"use client";

import { SidebarItemsProps } from "@/data/admin/types-sidebar";
import Link from "next/link";
import { useMemo } from "react";

interface SidebarAdminAppProps {
  items: SidebarItemsProps[];
}

export const ActionSidebarCollapse = () => {
  let sidebarWrapper: HTMLElement | null =
    window.document.getElementById("sidebar-wrapper");
  if (sidebarWrapper?.classList.contains("sidebar-collapse"))
    sidebarWrapper?.classList.remove("sidebar-collapse");
  else sidebarWrapper?.classList.add("sidebar-collapse");
};

export default function SidebarAdminApp({ items }: SidebarAdminAppProps) {
  return (
    <div id="sidebar-wrapper">
      <button className="sidebar-close-button" onClick={ActionSidebarCollapse}>
        <span className="material-icons">close</span>
      </button>
      {/* <h4 className="sidebar-brand"> */}
      <div className="p-4">
        <img
          src="/images/admin/sidebar-logo.png"
          alt=""
          className="w-[70px] h-auto block"
        />
      </div>
      {/* </h4> */}
      <ul className="sidebar-items">{items.map(GenerateSidebarItems)}</ul>
    </div>
  );
}

const SidebarTitle = ({ label }: { label: string }) => (
  <li className="sidebar-title">
    <span>{label}</span>
  </li>
);

const SidebarMenu = ({
  label,
  icon,
  href,
}: {
  label: string;
  icon: string;
  href: string;
}) => (
  <li className="sidebar-menu">
    <Link href={href}>
      <img src={icon} alt={`icon ${label}`} />
      <span>{label}</span>
    </Link>
  </li>
);

const OpenSidebarDropdown = (event: React.MouseEvent<HTMLElement>) => {
  const parentNode: any = event.currentTarget.parentNode;
  const iconChevron: any = event.currentTarget.lastChild;
  if (!parentNode) return;

  if (parentNode.classList.contains("active")) {
    parentNode.classList.remove("active");
    iconChevron.innerHTML = "navigate_before";
  } else {
    parentNode.classList.add("active");
    iconChevron.innerHTML = "expand_more";
  }
};

const SidebarDropdown = ({
  label,
  icon,
  items,
}: {
  label: string;
  icon: string;
  items: SidebarItemsProps[];
}) => {
  const view = useMemo(() => items.map(GenerateSidebarItems), [items]);
  return (
    <li className="sidebar-dropdown">
      <a onClick={OpenSidebarDropdown} href="#">
        <span className="material-icons">{icon}</span>
        <span>{label}</span>
        <span className="material-icons">navigate_before</span>
      </a>
      <ul className="sidebar-dropdown-items">{view}</ul>
    </li>
  );
};

const GenerateSidebarItems = (item: SidebarItemsProps, index: number) => {
  if (item.type === "hr") {
    return <hr key={index} />;
  } else if (item.type === "link") {
    return (
      <li key={index}>
        <Link href={item.href} className="sidebar-link">
          {item.label}
        </Link>
      </li>
    );
  } else if (item.type === "copyright") {
    return (
      <li key={index}>
        <span className="sidebar-copyright">&copy; {item.text}</span>
      </li>
    );
  } else if (item.type === "title") {
    return <SidebarTitle key={index} label={item.label} />;
  } else if (item.type === "menu") {
    return (
      <SidebarMenu
        key={index}
        label={item.label}
        href={item.href}
        icon={item.icon}
      />
    );
  } else if (item.type === "dropdown") {
    return (
      <SidebarDropdown
        key={index}
        label={item.label}
        icon={item.icon}
        items={item.children}
      />
    );
  }
};
