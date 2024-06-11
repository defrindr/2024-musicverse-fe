"use client";
import Form from "@/components/general/Form";
import { api } from "@/lib/utis/api";
import { Validations } from "@/lib/utis/validation";
import { notFound, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function FormAssesment({ id, assesmentId }: { id: number; assesmentId?: number }) {
  const router = useRouter();
  const [FormState, FormDispatch] = useState({ values: {} })

  const HandleSubmit = async () => {
    const body = Object.assign(FormState.values, {
      'audition_id': id
    });

    let path = `/auditions/audition/${id}/assesment`;
    let method = "post"

    if (assesmentId) {
      path += `/${assesmentId}`;
      method = "PUT"
    }

    const res = await api({
      path,
      method,
      body
    })

    const json = await res.json();

    if (!res.ok) {
      toast.error(json.message);
      return;
    }

    toast.success(json.message);
    router.back();
    router.refresh();
  }


  const fetchedItem = async () => {

    const res = await api({
      path: `/auditions/audition/${id}/assesment/${assesmentId}`,
    })

    const json = await res.json();

    if (!res.ok) {
      toast.error(json.message);
      notFound();
      return;
    }

    FormDispatch((props) => ({ ...props, values: json.data }))
  }

  useEffect(() => {
    if (assesmentId) fetchedItem();
  }, [])

  return (
    <>
      <Form
        state={FormState}
        setter={FormDispatch}
        withSubmitButton
        onSubmit={HandleSubmit}
        fields={[
          {
            fieldType: 'text',
            name: 'assesment',
            placeholder: 'Vocal Ability',
            validations: [
              Validations.Required()
            ],
            label: 'Assesment Poin',
          },
          {
            fieldType: 'text',
            type: 'number',
            name: 'weight',
            placeholder: '50',
            validations: [
              Validations.Required()
            ],
            label: 'Bobot Assesment',
          },
        ]} />
    </>
  )
}