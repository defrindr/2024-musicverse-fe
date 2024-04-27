import { Metadata } from "next";
import FormLogin from "./Form";

export const metadata: Metadata = {
  title: "Login",
};

export default function AuthLoginPage() {
  return (
    <div className="grid grid-cols-2 m-[5vw] gap-10">
      <div className="hidden md:block col-span-1">
        <img src="/images/auth/hero.png" alt="" className="w-full" />
      </div>
      <div className="col-span-2 md:col-span-1 flex justify-center items-center">
        <FormLogin />
      </div>
    </div>
  );
}
