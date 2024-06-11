import { GuestContext } from "@/app/(guest)/home/page";
import { useContext } from "react";

export default function Footer() {
  const { items } = useContext(GuestContext);

  return (
    <footer className="bg-black p-4 text-center">
      <span>{items["app.text.copyright"]}</span>
    </footer>
  );
}
