"use client";
import "@/styles/auth/theme.css";
import "material-icons/iconfont/material-icons.css";
import "react-toastify/dist/ReactToastify.css"; //add this line
import { ToastContainer } from "react-toastify";

export default function AdminLayoutApp({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div id="AuthLayout" className="wrapper">
        <div className="wrapper-content">
          <div className="container-fluid">{children}</div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
