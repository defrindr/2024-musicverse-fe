'use client';
import { onLogout } from "@/lib/utis/api";
import { SidebarItemsProps } from "./types-sidebar";

const ProducerSidebar: SidebarItemsProps[] = [
  {
    type: "menu",
    label: "Artist",
    icon: "/images/admin/sidebar/artist.svg",
    href: "/producer/dashboard",
  },
  {
    type: "hr",
  },
  {
    type: "menu",
    label: "notification",
    icon: "/images/admin/sidebar/notification.svg",
    href: "/producer/notification",
  },
  {
    type: "hr",
  },
  {
    type: "link",
    label: "Help",
    href: "/producer/dashboard",
  },
  {
    type: "link",
    label: "Contact Us",
    href: "/producer/dashboard",
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

export default ProducerSidebar;
