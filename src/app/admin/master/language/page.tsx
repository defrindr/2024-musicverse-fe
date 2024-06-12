import Breadcrumb from "@/components/general/Breadcrumb";
import { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Languages",
};

export default function CmsPage() {
  return (
    <>
      <Breadcrumb title="Languages" />
      <Content />
    </>
  );
}
