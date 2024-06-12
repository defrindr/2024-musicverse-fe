"use client";
import { useState } from "react";
import Confirm from "../general/popups/Confirm";
import SidebarApp, {
  SidebarButton,
  SidebarDropdown,
  SidebarMenu,
  SidebarTitle,
} from "../general/Sidebar";
import { onLogout } from "@/lib/utis/api";

export default function AdminSidebar() {
  const [confirmLogout, setConfirmLogout] = useState(false);
  return (
    <>
      <SidebarApp>
        <SidebarTitle label="Selamat Datang Admin," />
        <SidebarMenu label="Pengguna" href="/admin/users" icon="person" />
        <SidebarDropdown label={"Master"} icon="dvr">
          <SidebarMenu
            label="Skill kategori"
            href="/admin/master/skill"
            icon="mic"
          />
          <SidebarMenu label="CMS" href="/admin/master/cms" icon="settings" />

          <SidebarMenu
            label="Language"
            href="/admin/master/language"
            icon="settings"
          />
          <SidebarMenu
            label="Genre"
            href="/admin/master/genre"
            icon="settings"
          />
          <SidebarMenu
            label="Country"
            href="/admin/master/country"
            icon="settings"
          />
        </SidebarDropdown>
        <hr />
        <SidebarButton
          onClick={() => setConfirmLogout(!confirmLogout)}
          label="Logout"
        />
      </SidebarApp>
      <Confirm
        text={"Apakah anda yakin ingin keluar ?"}
        onApprove={onLogout}
        active={confirmLogout}
        onCancel={setConfirmLogout}
      />
    </>
  );
}
