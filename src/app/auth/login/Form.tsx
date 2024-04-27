"use client";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { AuthLogin } from "@/lib/redux/slices/auth-slice";
import { useRouter } from "next/navigation";
import { FormEvent, useCallback } from "react";
import Input from "./Input";

export default function FormLogin() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { loading } = useAppSelector((state) => state.auth);
  const HandleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // const data = new FormData(event.target as HTMLFormElement);
      // const payload: any = Object.fromEntries(data.entries());
      // dispatch(AuthLogin({ router, payload }));

      router.push('/admin/dashboard')

      return false;
    },
    [dispatch, router],
  );

  return (
    <div className="box-login">
      <form action={`#`} className="form" onSubmit={HandleSubmit}>
        <span className="title">
          Login and Show Your Talent!
        </span>
        <Input
          name="email"
          type="email"
          placeholder="Username...."
        />
        <Input
          name="password"
          placeholder="Password...."
          password
        />
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
