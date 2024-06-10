import Breadcrumb from "@/components/general/Breadcrumb";
import { Metadata } from "next";
import FormSkillCategory from "../_/Form";

export const metadata: Metadata = {
  title: "Tambah Skill Baru",
  description: "Tambah Skill Baru Categories",
};

export default function CreateSkillCategory() {
  return (
    <>
      <Breadcrumb title="Tambah Skill Baru" />
      <div className="grid grid-cols-2">
        <FormSkillCategory />
      </div>
    </>
  )
}