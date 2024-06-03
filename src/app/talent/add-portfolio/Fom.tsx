"use client";
import Form from "@/components/admin/Form";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FormComponent() {
  const router = useRouter();
  const FormState = useState({ values: {} });
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 md:col-span-6">
        <Form
          state={FormState[0]}
          setter={FormState[1]}
          withSubmitButton
          submitLabel="NEXT"
          onSubmit={() => router.push("/talent/add-portfolio/step-2")}
          fields={[
            {
              fieldType: "text",
              name: "releaseTitle",
              label: "Release Title *",
            },
            {
              fieldType: "text",
              name: "keys",
              label: "Keys *",
              span: "col-span-6",
            },
            {
              fieldType: "text",
              name: "bpm",
              label: "BPM (Bits Per Minutes) *",
              span: "col-span-6",
            },
            {
              fieldType: "dropdown",
              items: [
                {
                  key: "jazz",
                  label: "Jazz",
                },
                {
                  key: "pop",
                  label: "Pop",
                },
                {
                  key: "rock",
                  label: "Rock",
                },
              ],
              name: "genre",
              label: "Genre *",
            },
            {
              fieldType: "dropdown",
              items: [
                {
                  key: "indonesia",
                  label: "Indonesia",
                },
              ],
              name: "language",
              label: "Language *",
            },
          ]}
        />
      </div>
    </div>
  );
}
