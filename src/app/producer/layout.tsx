
import HeaderAdminApp from "@/components/general/Header";
import ProducerSidebar from "@/components/producer/Sidebar";
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
        <ProducerSidebar />
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
