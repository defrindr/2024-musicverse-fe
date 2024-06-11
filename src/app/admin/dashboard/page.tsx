import Breadcrumb from "@/components/general/Breadcrumb";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import DashboardCard from "./DashboardCard";

export const metadata: Metadata = {
  title: "Dashboard Admin",
  description: "Ini dashboard untuk admin!!",
};

const ClientPage = dynamic(() => import("./ClientPage"), { ssr: false });

export default function AdminDashboardPage() {
  return (
    <>
      <Breadcrumb title="dashboard" description="Pengaturan Halaman Website" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <DashboardCard
          label="Jenis Hewan"
          count={2}
          icon="groups"
          color={"text-primary"}
        />
        <DashboardCard
          label="Jenis Hewan"
          count={2}
          icon="groups"
          color={"text-primary"}
        />
        <DashboardCard
          label="Jenis Hewan"
          count={2}
          icon="groups"
          color={"text-primary"}
        />
        <DashboardCard
          label="Jenis Hewan"
          count={2}
          icon="groups"
          color={"text-primary"}
        />
        <DashboardCard
          label="Jenis Hewan"
          count={2}
          icon="groups"
          color={"text-primary"}
        />
      </div>
    </>
  );
}
