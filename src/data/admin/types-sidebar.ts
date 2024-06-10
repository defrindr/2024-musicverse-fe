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

type SidebarButtonProps = {
  type: "button";
  label: string;
  onClick: any;
};

export type SidebarItemsProps =
  | SidebarLinkProps
  | SidebarCopyrightProps
  | SidebarHrProps
  | SidebarItemMenuProps
  | SidebarItemTitleProps
  | SidebarItemDropdownProps
  | SidebarButtonProps;
