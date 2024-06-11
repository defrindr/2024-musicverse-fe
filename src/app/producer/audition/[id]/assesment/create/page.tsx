import { Metadata } from "next"
import FormAssesment from "../_/Form"
import Breadcrumb from "@/components/general/Breadcrumb"

export const metadata: Metadata = {
  title: 'Create Assesment Point'
}

export default function CreateAssesmentPage({ params }: { params: { id: number } }) {

  return (
    <>
      <Breadcrumb title="Create Assesment Point" />
      <FormAssesment
        id={params.id}
      />
    </>
  )
}