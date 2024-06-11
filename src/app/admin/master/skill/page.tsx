import Breadcrumb from "@/components/general/Breadcrumb";
import { Metadata } from "next";
import List from "./List";

export const metadata: Metadata = {
  title: "Skill kategori",
  description: "List skill kategori",
};

export default function SkillList() {
  return (
    <>
      <Breadcrumb title="Skill kategori" description="List skill kategori" />
      <List />
    </>
  );
}
