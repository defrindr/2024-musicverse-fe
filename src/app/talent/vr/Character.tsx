"use client";
import Form from "@/components/general/Form";
import { Validations } from "@/lib/utis/validation";
import { useState } from "react";

export default function TalentVrCharacter() {
  const [FormState, FormSetter] = useState({ values: {} });
  return (
    <>
      <div className="grid grid-cols-12 gap-5 mt-5">
        <div className="col-span-12 sm:col-span-4">
          <div className="p-5 bg-slate-900 rounded-md sm:min-h-[65vh]">
            <img
              src="/images/admin/vr-character.png"
              alt=""
              className="w-[150px] block m-auto"
            />
          </div>
        </div>
        <div className="col-span-12 sm:col-span-5">
          <Form
            withSubmitButton
            submitLabel="SAVE UPDATE"
            state={FormState}
            setter={FormSetter}
            fields={[
              {
                fieldType: "text",
                name: "name",
                label: "Your Name",
                validations: [Validations.Required()],
              },
              {
                fieldType: "text",
                name: "city",
                label: "City",
                span: "col-span-12 sm:col-span-6",
                validations: [Validations.Required()],
              },
              {
                fieldType: "text",
                name: "country",
                label: "Country",
                span: "col-span-12 sm:col-span-6",
                validations: [Validations.Required()],
              },
              {
                fieldType: "text",
                type: "number",
                name: "age",
                min: 18,
                label: "Age",
                span: "col-span-12 sm:col-span-6",
                validations: [Validations.Required()],
              },
              {
                fieldType: "dropdown",
                name: "gender",
                label: "Gender",
                items: [
                  {
                    key: "L",
                    label: "Male",
                  },
                  {
                    key: "P",
                    label: "Female",
                  },
                ],
                span: "col-span-12 sm:col-span-6",
                validations: [Validations.Required()],
              },
              {
                fieldType: "text",
                name: "skill",
                label: "Skills",
                validations: [Validations.Required()],
              },
              {
                fieldType: "text",
                name: "genre",
                label: "Music Genre",
                validations: [Validations.Required()],
              },
              {
                fieldType: "text",
                name: "hobby",
                label: "Hobby",
                validations: [Validations.Required()],
              },
            ]}
          />
        </div>
        <div className="col-span-12 sm:col-span-3"></div>
      </div>
    </>
  );
}
