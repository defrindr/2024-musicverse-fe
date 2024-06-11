"use client";
// import { Metadata } from "next";
import FormLogin from "./Form";
import { AuthContext } from "../layout";
import { useContext } from "react";

// export const metadata: Metadata = {
//   title: "Login",
// };

export default function AuthLoginPage() {
  const { items } = useContext(AuthContext);
  return (
    <div className="grid grid-cols-2 m-[5vw] gap-10">
      <div className="hidden md:block col-span-1">
        <img
          src={items["app.image.login"] ?? "/images/auth/hero.png"}
          alt=""
          className="w-full"
        />
      </div>
      <div className="col-span-2 md:col-span-1 flex justify-center items-center">
        <FormLogin />
      </div>
    </div>
  );
}
