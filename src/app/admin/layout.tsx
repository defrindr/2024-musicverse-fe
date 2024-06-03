import HeaderAdminApp from "@/components/admin/Header";
import SidebarAdminApp from "@/components/admin/Sidebar";

import AdminSidebar from "@/data/admin/admin-sidebar";
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
        <SidebarAdminApp items={AdminSidebar} />
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
