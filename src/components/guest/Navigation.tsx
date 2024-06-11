"use client";
import { GuestContext } from "@/app/(guest)/home/page";
import Link from "next/link";
import { useContext } from "react";

const NavigationItem = ({
  children,
  href = "#",
}: {
  children: React.ReactNode | string;
  href?: string;
}) => {
  return (
    <li>
      <a href={href}>
        <span className="text-sm font-semibold  hover:text-primary">
          {children}
        </span>
      </a>
    </li>
  );
};

export default function Navigation() {
  const { items } = useContext(GuestContext);
  const HandleShowNavigation = () => {
    let navigationMobile = document.getElementById("navigation-mobile");
    let navigationMobileClassList = navigationMobile?.classList;
    if (!navigationMobileClassList) return;

    if (navigationMobileClassList.contains("active")) {
      navigationMobileClassList.remove("active");
    } else {
      navigationMobileClassList.add("active");
    }
  };

  return (
    <div className="sticky top-0 z-50  bg-black">
      <div className="container flex p-5 pl-8 pr-8 justify-between items-center text-[#CCCCCC]">
        <div className="flex flex-row text-center items-center justify-center gap-5">
          <img
            src={items["app.image.logo"] ?? "/images/guest/logo.png"}
            alt="Logo"
            className="w-[100px] h-auto"
          />
          <div className="hidden lg:block">
            <ul className="flex gap-10">
              <NavigationItem href="#section-discover">ABOUT</NavigationItem>
              <NavigationItem href="#section-market">
                HOW IT WORKS
              </NavigationItem>
              <NavigationItem href="#section-faq">FAQ</NavigationItem>
            </ul>
          </div>
        </div>
        <div className="block lg:hidden">
          <button onClick={HandleShowNavigation}>
            <span className="material-icons !text-4xl">menu</span>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-4 lg:items-center">
          <Link href={"/auth/login"} className="text-sm">
            LOG IN
          </Link>
          <Link
            href={"/auth/signin"}
            className="text-sm bg-primary text-white p-2 px-5 rounded-xl"
          >
            SIGN IN
          </Link>
        </div>
      </div>
      <div id="navigation-mobile" className="navigation-mobile">
        <div className="container">
          <ul className="flex flex-col gap-3">
            <NavigationItem>ABOUT</NavigationItem>
            <NavigationItem>HOW IT WORKS</NavigationItem>
            <NavigationItem>FAQ</NavigationItem>
            <NavigationItem href="/auth/login">LOG IN</NavigationItem>
            <NavigationItem href="/auth/signin">SIGN IN</NavigationItem>
          </ul>
        </div>
      </div>
    </div>
  );
}
