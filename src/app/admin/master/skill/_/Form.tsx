"use client";
import Form from "@/components/general/Form";
import { api } from "@/lib/utis/api";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

export default function FormSkillCategory({ id }: { id?: number }) {
  const router = useRouter();
  const formRef = useRef();

  const FormState = useState({})

  const fetchedData = async () => {

    if (id) {
      let res = await api({
        path: `/auditions/skill-category/${id}`
      })
      let json = await res.json()

      if (!res.ok) {
        toast.error(json.message)
        return;
      }

      FormState[1]((prop) => ({
        ...prop, values: {
          name: json.data.name
        }
      }))
    }
  }

  const HandleSubmit = async () => {
    let path = "/auditions/skill-category";
    if (id) path += `/${id}`;

    const res = await api({
      path,
      method: 'post',
      body: new FormData(formRef.current)
    })

    const json = await res.json();

    if (res.ok) {
      toast.success(json.message)

      router.replace('/admin/master/skill');
      router.refresh()
      return
    }

    toast.error(json.message)
  }

  useEffect(() => {
    fetchedData();
  }, [])

  return (
    <Form
      formRef={formRef}
      onSubmit={HandleSubmit}
      state={FormState[0]}
      setter={FormState[1]}
      withSubmitButton
      fields={
        [
          {
            fieldType: 'text',
            name: 'name',
            label: 'Nama Kategori'
          },
          {
            fieldType: 'file',
            name: 'icon',
            label: 'Ikon',
            accept: 'image/*'
          }
        ]
      } />
  )
}