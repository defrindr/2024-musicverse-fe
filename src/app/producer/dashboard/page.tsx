import Breadcrumb from "@/components/general/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Admin",
  description: "Ini dashboard untuk admin!!",
};

export default function AdminDashboardPage() {
  return (
    <>
      <Breadcrumb title="dashboard" description="Pengaturan Halaman Website" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* <DashboardCard label="Jenis Hewan" count={2} bg="bg-white" icon="groups" color={"text-primary"} /> */}
      </div>
    </>
  );
}
