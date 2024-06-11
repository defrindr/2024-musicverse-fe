"use client";

import Form from "@/components/general/Form";
import App from "@/config/app";
import { api } from "@/lib/utis/api";
import { Validations } from "@/lib/utis/validation";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

export default function AuditionEditForm({ id }: { id: number }) {
  const router = useRouter();
  const formRef = useRef();
  const FormState = useState<{
    values: any;
  }>({
    values: {},
  });

  const HandleSubmit = async () => {
    const res = await api({
      path: `/auditions/audition/${id}`,
      method: "put",
      body: new FormData(formRef.current),
    });
    const json = await res.json();

    if (!res.ok) {
      toast.error(json.message);
      return;
    }

    toast.success(json.message);
    FormState[1]((prop) => ({ ...prop, values: {} }));
    router.replace(`/producer/audition/${id}`);
  };

  const fetched = async () => {
    const res = await api({
      path: `/auditions/audition/${id}`,
    });
    const json = await res.json();
    if (res.ok) {
      FormState[1]((prop) => ({
        ...prop,
        values: { ...json.data, date: json.data._date },
      }));
    }
  };

  useEffect(() => {
    fetched();
  }, []);

  return (
    <>
      <>
        <button
          onClick={() => {
            router.back();
            router.refresh();
          }}
          className="py-2 px-8 bg-slate-500 mb-5 text-black rounded-full flex items-end gap-2 self-end font-semibold"
        >
          <span>Kembali</span>
        </button>
      </>
      <Form
        formRef={formRef}
        onSubmit={HandleSubmit}
        state={FormState[0]}
        setter={FormState[1]}
        withSubmitButton
        fields={[
          {
            fieldType: "text",
            name: "title",
            label: "Audition Title",
            validations: [Validations.Required()],
          },
          {
            fieldType: "dropdown",
            name: "skill_id",
            label: "Skill Category",
            source: App.Url + "/auditions/skill-category/dropdown",
            validations: [Validations.Required()],
          },
          {
            fieldType: "text",
            type: "datetime-local",
            name: "date",
            label: "Date And Time",
            validations: [Validations.Required()],
          },
          {
            fieldType: "textarea",
            name: "description",
            rows: 6,
            label: "Brief Description",
            validations: [Validations.Required()],
          },
          {
            fieldType: "file",
            name: "term",
            label: "Term And Agreement",
            span: "col-span-12 md:col-span-6",
            accept: "application/pdf",
            validations: [Validations.Required()],
            withPreview: true,
            preview: FormState[0].values.term,
          },
          {
            fieldType: "file",
            name: "contract",
            label: "Contract Proposal",
            span: "col-span-12 md:col-span-6",
            accept: "application/pdf",
            validations: [Validations.Required()],
            withPreview: true,
            preview: FormState[0].values.contract,
          },
        ]}
      />
    </>
  );
}
