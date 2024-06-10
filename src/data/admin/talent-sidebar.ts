'use client';
import { onLogout } from "@/lib/utis/api";
import { SidebarItemsProps } from "./types-sidebar";

const TalentSidebar: SidebarItemsProps[] = [
  {
    type: "menu",
    label: "Artist",
    icon: "/images/admin/sidebar/artist.svg",
    href: "/talent/dashboard",
  },
  {
    type: "hr",
  },
  {
    type: "menu",
    label: "Metaverse",
    icon: "/images/admin/sidebar/metaverse.svg",
    href: "/talent/dashboard",
  },
  {
    type: "menu",
    label: "add portfolio",
    icon: "/images/admin/sidebar/add.svg",
    href: "/talent/add-portfolio",
  },
  {
    type: "menu",
    label: "library",
    icon: "/images/admin/sidebar/library.svg",
    href: "/talent/my-portfolio",
  },
  {
    type: "menu",
    label: "notification",
    icon: "/images/admin/sidebar/notification.svg",
    href: "/talent/notification",
  },
  {
    type: "menu",
    label: "settings",
    icon: "/images/admin/sidebar/settings.svg",
    href: "/talent/settings",
  },
  {
    type: "hr",
  },
  {
    type: "link",
    label: "Help",
    href: "/talent/dashboard",
  },
  {
    type: "link",
    label: "Contact Us",
    href: "/talent/dashboard",
  },
  {
    type: "button",
    label: "Logout",
    onClick: () => {
      onLogout();
    },
  },
  {
    type: "copyright",
    text: "2024 Musicverse",
  },
];

export default TalentSidebar;
