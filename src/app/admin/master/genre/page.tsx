import Breadcrumb from "@/components/general/Breadcrumb";
import { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Genres",
};

export default function CmsPage() {
  return (
    <>
      <Breadcrumb title="Genres" />
      <Content />
    </>
  );
}
