"use client";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { ActionSidebarCollapse } from "./Sidebar";

const HandleOpenPopupMenu = () => {
  const element = document.getElementById("header-modal-menu");
  if (!element) return;

  if (element.classList.contains("active")) {
    element.classList.remove("active");
  } else {
    element.classList.add("active");
  }
};

export default function HeaderAdminApp() {
  const router = useRouter();

  const HandleLogout = useCallback(() => {
    router.replace("/auth/login");
  }, [router]);

  const HandleChangeMode = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    const iconElement = event.currentTarget.children[0];
    const themeProvider = document.querySelectorAll("[data-theme]")[0];
    console.log(themeProvider);
    if (!themeProvider) return;
    if (themeProvider.getAttribute("data-theme") == "dark") {
      themeProvider.setAttribute("data-theme", "light");
      localStorage.setItem("APP[THEME]", "light");
      iconElement.innerHTML = "light_mode";
    } else {
      themeProvider.setAttribute("data-theme", "dark");
      localStorage.setItem("APP[THEME]", "dark");
      iconElement.innerHTML = "dark_mode";
    }
  };

  return (
    <div className="header">
      <div className="header-left-item">
        <button
          onClick={ActionSidebarCollapse}
          className="header-icon sidebar-collapse-button"
        >
          <span className="material-icons">menu</span>
        </button>
      </div>
      <div className="header-right-item relative">
        <button
          onClick={HandleChangeMode}
          className="flex rounded-full items-center justify-center bg-gray-400 w-[30px] h-[30px]"
        >
          <span className="material-icons text-white">light_mode</span>
        </button>
        {/* <button onClick={HandleOpenPopupMenu} className="header-profile-button">
          <Gravatar title="Administrator" />
          <span>Administrator</span>
        </button> */}
        <div id="header-modal-menu">
          <ul className="flex flex-col gap-1">
            <li className="border-b-[1px] border-gray-200 p-3">
              <a
                href="#"
                className="flex justify-start gap-2 items-center hover:text-[var(--color-primary)]"
              >
                <span className="material-icons">person</span>
                <span>Ubah Profil</span>
              </a>
            </li>
            <li className="border-b-[1px] border-gray-200 p-3">
              <a
                href="#"
                className="flex justify-start gap-2 items-center hover:text-[var(--color-primary)]"
              >
                <span className="material-icons">settings</span>
                <span>Pengaturan</span>
              </a>
            </li>
            <li className="p-3">
              <button
                onClick={HandleLogout}
                className="flex justify-start gap-2 items-center hover:text-[var(--color-primary)]"
              >
                <span className="material-icons">logout</span>
                <span>Keluar</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
