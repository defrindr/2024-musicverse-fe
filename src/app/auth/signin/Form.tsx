"use client";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { AuthLogin } from "@/lib/redux/slices/auth-slice";
import { useRouter } from "next/navigation";
import { FormEvent, useCallback } from "react";
import Input from "./Input";

export default function FormSignin() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { loading } = useAppSelector((state) => state.auth);
  const HandleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.target as HTMLFormElement);
      const payload: any = Object.fromEntries(data.entries());
      dispatch(AuthLogin({ router, payload }));

      return false;
    },
    [dispatch, router],
  );

  return (
    <div className="box-login">
      <form action={`#`} className="form" onSubmit={HandleSubmit}>
        <span className="title">
          We Helps You Create Amazing Music!
        </span>
        <Input
          name="name"
          type="text"
          placeholder="Your Name"
        />
        <Input
          name="email"
          type="email"
          placeholder="Enter Email"
        />
        <Input
          name="password"
          placeholder="Password"
          password
        />
        <div className="flex gap-4">
          <input type="checkbox" />
          <span>
            By creating an account you agree to the terms of service and privacy policy
          </span>
        </div>
        <div className="btn-container">
          <button className="btn-login" disabled={loading === "pending"}>
            <span
              className={
                "material-icons text-white " +
                (loading === "pending" ? "animate-spin" : "")
              }
            >
              {loading === "pending" ? "autorenew" : "login"}
            </span>
            <span>
              Masuk Sekarang
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
