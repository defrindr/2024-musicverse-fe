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
    type: "link",
    label: "Logout",
    href: "/talent/dashboard",
  },
  {
    type: "copyright",
    text: "2024 Musicverse",
  },
];
export default ListSidebarMenu;
