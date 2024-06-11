"use client";
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useContext,
  useState,
} from "react";
import Input from "./Input";
import AuthButton from "@/components/auth/button";
import { toast } from "react-toastify";
import { api } from "@/lib/utis/api";
import { setCookie } from "typescript-cookie";
import App from "@/config/app";
import { AuthContext } from "../layout";

export default function FormSignin() {
  const { items } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [agree, setAgree] = useState(false);

  const setFormField = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((old) => ({ ...old, [e.target.name]: e.target.value }));
  };

  const HandleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setLoading(true);

      if (!agree) {
        setLoading(false);
        toast.error(
          "Untuk dapat melakukan pendaftaran, Anda harus menyetujui ketentuan yang berlaku.",
        );
        return;
      }

      api({
        path: "/auth/register",
        method: "post",
        body: form,
      }).then(async (res) => {
        let json = await res.json();
        if (res.status !== 200) {
          toast.error(json.message);
          setLoading(false);
          return;
        }

        setCookie(App.Cookie.Auth.Token, json.data.accessToken);
        setCookie(App.Cookie.Auth.ExpiredAt, json.data.expiredAt);
        setCookie(App.Cookie.Auth.RedirectTo, json.data.redirectUrl);
        setCookie(App.Cookie.Auth.User, JSON.stringify(json.data.user));
        window.location.href = window.location.origin + json.data.redirectUrl;
      });

      setLoading(false);
      return false;
    },
    [agree, form],
  );

  return (
    <div className="box-login">
      <form action={`#`} className="form" onSubmit={HandleSubmit}>
        <span className="title">{items["app.text.signin-title"]}</span>
        <Input
          required
          onChange={setFormField}
          name="name"
          type="text"
          placeholder="Your Name"
        />
        <Input
          required
          onChange={setFormField}
          name="email"
          type="email"
          placeholder="Enter Email"
        />
        <Input
          min={6}
          required
          onChange={setFormField}
          name="password"
          placeholder="Password"
          password
        />
        <Input
          min={6}
          required
          onChange={setFormField}
          name="confirmPassword"
          placeholder="Confirm Password"
          password
        />
        <div className="flex gap-4">
          <input onChange={() => setAgree(() => !agree)} type="checkbox" />
          <span>
            By creating an account you agree to the terms of service and privacy
            policy
          </span>
        </div>
        <div className="btn-container">
          <AuthButton text="Daftar Sekarang" loading={loading} />
        </div>
      </form>
    </div>
  );
}
