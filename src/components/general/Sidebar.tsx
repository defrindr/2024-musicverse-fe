"use client";

import App from "@/config/app";
import Link from "next/link";
import React, { MouseEventHandler } from "react";
import { getCookie, setCookie } from "typescript-cookie";

interface SidebarAppProps {
  children: React.ReactNode;
}

export const ActionSidebarCollapse = () => {
  let sidebarWrapper: HTMLElement | null =
    window.document.getElementById("sidebar-wrapper");
  if (sidebarWrapper?.classList.contains("sidebar-collapse")) {
    sidebarWrapper?.classList.remove("sidebar-collapse");
    if (typeof window !== "undefined") {
      setCookie(App.Cookie.View.SidebarCollapse, false)
    }
  } else {
    sidebarWrapper?.classList.add("sidebar-collapse");
    if (typeof window !== "undefined") {
      setCookie(App.Cookie.View.SidebarCollapse, true)
    }
  }
};

export default function SidebarApp({ children }: SidebarAppProps) {
  let collapse;
  if (typeof window !== "undefined") {
    collapse = getCookie(App.Cookie.View.SidebarCollapse) === "true";
  } else {
    collapse = false;
  }
  return (
    <div id="sidebar-wrapper" className={collapse ? "sidebar-collapse" : ""}>
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
      <ul className="sidebar-items">{children}</ul>
    </div>
  );
}

export const SidebarTitle = ({ label }: { label: string }) => (
  <li className="sidebar-title">
    <span>{label}</span>
  </li>
);

export const SidebarMenu = ({
  label,
  icon,
  type = 'material',
  href,
}: {
  label: string;
  icon: string;
  type?: 'image' | 'material'
  href: string;
}) => (
  <li className="sidebar-menu">
    <Link href={href}>
      {type === 'material' ?
        <span className="material-icons">{icon}</span>
        :
        <img src={icon} alt={`icon ${label}`} />}

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

export const SidebarDropdown = ({
  label,
  icon,
  children,
}: {
  label: string;
  icon: string;
  children: React.ReactNode;
}) => {
  return (
    <li className="sidebar-dropdown">
      <a onClick={OpenSidebarDropdown} href="#">
        <span className="material-icons">{icon}</span>
        <span>{label}</span>
        <span className="material-icons">navigate_before</span>
      </a>
      <ul className="sidebar-dropdown-items">{children}</ul>
    </li>
  );
};

export const SidebarCopyright = ({ text }: { text: string }) => {
  return (
    <li>
      <span className="sidebar-copyright">&copy; {text}</span>
    </li>
  );
}

export const SidebarButton = ({ onClick, label }: { onClick: MouseEventHandler<HTMLButtonElement>; label: string }) => {
  return (
    <li>
      <button onClick={onClick} className="sidebar-link">
        {label}
      </button>
    </li>
  );
}
