"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useCallback, useEffect, useState } from "react";
import Input from "./Input";

export default function FormLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const HandleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.target as HTMLFormElement);
      const payload: any = Object.fromEntries(data.entries());

      setLoading(true);
      return false;
    },
    [router],
  );

  useEffect(() => {
  }, []);

  return (
    <div className="box-login">
      <form action={`#`} className="form" onSubmit={HandleSubmit}>
        <span className="title">Login and Show Your Talent!</span>
        <Input name="email" type="email" placeholder="Username...." />
        <Input name="password" placeholder="Password...." password />
        <div className="btn-container">
          <button className="btn-login" disabled={loading}>
            <span
              className={
                "material-icons text-white " +
                (loading ? "animate-spin" : "")
              }
            >
              {loading ? "autorenew" : "login"}
            </span>
            <span className="ms-2">Masuk Sekarang</span>
          </button>
        </div>
      </form>
    </div>
  );
}
