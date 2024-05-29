import "@/styles/guest/light.css";
import "@/styles/guest/dark.css";
import "material-icons/iconfont/material-icons.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Musicverse",
};

export default function GuestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div id="GuestLayout">{children}</div>;
}
