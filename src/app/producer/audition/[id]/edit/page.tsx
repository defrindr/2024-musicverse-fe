import Breadcrumb from "@/components/general/Breadcrumb";
import { Metadata } from "next";
import AuditionEditForm from "./Form";

export const metadata: Metadata = {
  title: "Edit Virtual Reality Audition",
  description: "Edit Virtual reality audition",
};

export default function EditAuditionPage({
  params,
}: {
  params: { id: number };
}) {
  return (
    <>
      <Breadcrumb title="Edit Audition" />
      <AuditionEditForm id={params.id} />
    </>
  );
}
