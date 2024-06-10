import AdminSidebar from "@/components/admin/Sidebar";
import HeaderAdminApp from "@/components/general/Header";

import "@/styles/admin/dark.css";
import "@/styles/admin/light.css";
import "material-icons/iconfont/material-icons.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; //add this line

export default function AdminLayoutApp({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="AdminLayout" className="wrapper">
      <div className="wrapper-content">
        <AdminSidebar />
        <div className="container-fluid">
          <HeaderAdminApp />
          <main className="main-content">{children}</main>
          {/* <FooterApp /> */}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
