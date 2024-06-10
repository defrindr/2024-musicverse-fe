"use client";

import Form from "@/components/general/Form";
import { Validations } from "@/lib/utis/validation";
import { useState } from "react";

export default function AuditionForm() {
  const FormState = useState({
    values: {
      title: "",
      skill_id: "",
      date: "",
      description: ""
    }
  })

  return (
    <>
      <Form
        withSubmitButton
        fields={[
          {
            fieldType: 'text',
            name: 'title',
            label: 'Audition Title',
            validations: [
              Validations.Required(),
            ]
          },
          {
            fieldType: 'dropdown',
            name: 'skill_id',
            label: 'Skill Category',
            validations: [
              Validations.Required(),
            ]
          },
          {
            fieldType: 'text',
            type: 'datetime-local',
            name: 'date',
            label: 'Date And Time',
            validations: [
              Validations.Required(),
            ]
          },
          {
            fieldType: 'textarea',
            name: 'description',
            rows: 6,
            label: 'Brief Description',
            validations: [
              Validations.Required(),
            ]
          }
        ]} state={FormState[0]} setter={FormState[1]} />
    </>
  )
}