import FooterApp from "@/components/admin/Footer";
import HeaderAdminApp from "@/components/admin/Header";
import SidebarAdminApp from "@/components/admin/Sidebar";
import ListSidebarMenu from "@/data/admin/sidebar";

import "@/styles/admin/dark.css";
import "@/styles/admin/light.css";
import "material-icons/iconfont/material-icons.css";
import "react-toastify/dist/ReactToastify.css"; //add this line
import { ToastContainer } from "react-toastify";

export default function AdminLayoutApp({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="AdminLayout" className="wrapper">
      <div className="wrapper-content">
        <SidebarAdminApp items={ListSidebarMenu} />
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
