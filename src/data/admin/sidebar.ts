type SidebarItemMenuProps = {
  type: "menu";
  label: string;
  icon: string;
  href: string;
};
type SidebarItemTitleProps = {
  type: "title";
  label: string;
};

type SidebarItemDropdownProps = {
  type: "dropdown";
  label: string;
  icon: string;
  active: boolean;
  children: SidebarItemMenuProps[];
};

type SidebarHrProps = {
  type: "hr";
};

type SidebarCopyrightProps = {
  type: "copyright";
  text: string;
};

type SidebarLinkProps = {
  type: "link";
  label: string;
  href: string;
};

export type SidebarItemsProps =
  | SidebarLinkProps
  | SidebarCopyrightProps
  | SidebarHrProps
  | SidebarItemMenuProps
  | SidebarItemTitleProps
  | SidebarItemDropdownProps;

const ListSidebarMenu: SidebarItemsProps[] = [
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
    href: "/admin/dashboard",
  },
  {
    type: "menu",
    label: "library",
    icon: "/images/admin/sidebar/library.svg",
    href: "/admin/dashboard",
  },
  {
    type: "menu",
    label: "notification",
    icon: "/images/admin/sidebar/notification.svg",
    href: "/admin/dashboard",
  },
  {
    type: "menu",
    label: "settings",
    icon: "/images/admin/sidebar/settings.svg",
    href: "/admin/dashboard",
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
    href: "/admin/dashboard",
  },
  {
    type: "copyright",
    text: "2024 Musicverse",
  },
];
export default ListSidebarMenu;
