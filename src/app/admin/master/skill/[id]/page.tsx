import Breadcrumb from "@/components/general/Breadcrumb";
import { Metadata } from "next";
import FormSkillCategory from "../_/Form";

export const metadata: Metadata = {
  title: "Ubah Skill",
  description: "Ubah Skill",
};

export default function CreateSkillCategory({ params }: { params: { id: number } }) {
  return (
    <>
      <Breadcrumb title="Ubah Skill" />
      <div className="grid grid-cols-2">
        <FormSkillCategory id={params.id} />
      </div>
    </>
  )
}