"use client";

import { FormEvent, useContext, useState } from "react";
import Input from "./Input";
import { api } from "@/lib/utis/api";
import { setCookie } from "typescript-cookie";
import App from "@/config/app";
import { toast } from "react-toastify";
import AuthButton from "@/components/auth/button";
import { AuthContext } from "../layout";
export default function FormLogin() {
  const { items } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const onSubmitLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = { email, password };
      api({
        path: `/auth/login`,
        body: payload,
        method: "POST",
      }).then(async (res) => {
        setLoading(false);
        let json = await res.json();
        if (res.status === 200) {
          setCookie(App.Cookie.Auth.Token, json.data.accessToken);
          setCookie(App.Cookie.Auth.ExpiredAt, json.data.expiredAt);
          setCookie(App.Cookie.Auth.RedirectTo, json.data.redirectUrl);
          setCookie(App.Cookie.Auth.User, JSON.stringify(json.data.user));
          window.location.href = window.location.origin + json.data.redirectUrl;
        } else {
          toast.error(json.message);
        }
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }

    return false;
  };

  return (
    <div className="box-login">
      <form className="form" onSubmit={onSubmitLogin}>
        <span className="title">{items["app.text.login-title"]}</span>
        <Input
          name="email"
          type="email"
          placeholder="Email...."
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          name="password"
          placeholder="Password...."
          password
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="btn-container">
          <AuthButton text="Masuk Sekarang" loading={loading} />
        </div>
      </form>
    </div>
  );
}
