"use client";
import { useState } from "react";
import Confirm from "../general/popups/Confirm";
import SidebarApp, { SidebarButton, SidebarMenu, SidebarTitle } from "../general/Sidebar";
import { onLogout } from "@/lib/utis/api";

export default function TalentSidebar() {
  const [confirmLogout, setConfirmLogout] = useState(false);
  return (
    <>
      <SidebarApp>
        <SidebarTitle label="Selamat Datang Talent," />
        <SidebarMenu label="Settings" href="/talent/settings" icon="/images/admin/sidebar/settings.svg" type="image" />
        <hr />
        <SidebarButton onClick={() => setConfirmLogout(!confirmLogout)} label="Logout" />
      </SidebarApp>
      <Confirm text={"Apakah anda yakin ingin keluar ?"} onApprove={onLogout} active={confirmLogout} onCancel={setConfirmLogout} />
    </>
  )
}