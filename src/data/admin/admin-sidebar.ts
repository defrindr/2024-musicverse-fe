import { SidebarItemsProps } from "./types-sidebar";

const AdminSidebar: SidebarItemsProps[] = [
  {
    type: "menu",
    label: "Artist",
    icon: "/images/admin/sidebar/artist.svg",
    href: "/admin/dashboard",
  },
  {
    type: "hr",
  },
  {
    type: "menu",
    label: "Metaverse",
    icon: "/images/admin/sidebar/metaverse.svg",
    href: "/admin/dashboard",
  },
  {
    type: "menu",
    label: "add portfolio",
    icon: "/images/admin/sidebar/add.svg",
    href: "/admin/add-portfolio",
  },
  {
    type: "menu",
    label: "library",
    icon: "/images/admin/sidebar/library.svg",
    href: "/admin/my-portfolio",
  },
  {
    type: "menu",
    label: "notification",
    icon: "/images/admin/sidebar/notification.svg",
    href: "/admin/notification",
  },
  {
    type: "menu",
    label: "settings",
    icon: "/images/admin/sidebar/settings.svg",
    href: "/admin/settings",
  },
  {
    type: "hr",
  },
  {
    type: "link",
    label: "Help",
    href: "/admin/dashboard",
  },
  {
    type: "link",
    label: "Contact Us",
    href: "/admin/dashboard",
  },
  {
    type: "link",
    label: "Logout",
    href: "/auth",
  },
  {
    type: "copyright",
    text: "2024 Musicverse",
  },
];

export default AdminSidebar;
