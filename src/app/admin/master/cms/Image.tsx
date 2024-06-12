"use client";
import { useContext, useEffect, useMemo, useState } from "react";
import { CmsContext } from "./Context";
import Form, { FieldFormType } from "@/components/general/Form";
import { api } from "@/lib/utis/api";
import { toast } from "react-toastify";

export default function Image() {
  const ctx = useContext(CmsContext);

  const [FormState, FormSetter] = useState<{
    values: any;
  }>({ values: {} });

  const fields: FieldFormType[] = useMemo(() => {
    return (
      ctx.items?.images?.map((item: any) => {
        return {
          fieldType: "file",
          name: item.name,
          value: item.value,
          rows: 6,
          span: "col-span-12 sm:col-span-6",
          accept: "image/*",
          withPreview: true,
          preview: item.value,
          label: item.name
            .replace("app.text.", "")
            .split("-")
            .join(" ")
            .toUpperCase(),
        } as FieldFormType;
      }) ?? []
    );
  }, [ctx.items]);

  const HandleSubmit = async () => {
    let body = new FormData();
    let keys = Object.keys(FormState.values);
    for (let keyIndex = 0; keyIndex < keys.length; keyIndex++) {
      let key = keys[keyIndex];
      body.append(`image[${keyIndex}][name]`, key);
      body.append(`image[${keyIndex}][value]`, FormState.values[key]);
    }
    const res = await api({
      path: "/cms/config/image",
      method: "post",
      body,
    });

    const json = await res.json();

    if (res.ok) {
      toast.success(json.message);
      ctx.updateItems();
    } else {
      toast.error(json.message);
    }
  };

  return (
    <>
      <Form
        withSubmitButton
        onSubmit={HandleSubmit}
        state={FormState}
        setter={FormSetter}
        fields={fields}
      />
    </>
  );
}
