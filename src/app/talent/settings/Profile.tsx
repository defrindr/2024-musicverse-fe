"use client";

import Form from "@/components/admin/Form";
import { useState } from "react";

export default function ProfileComponent() {
  const FormState = useState({ values: {} });
  return (
    <>
      <span className="capitalize font-semibold block text-white mb-3">Your Image</span>
      <div className="grid grid-cols-12 gap-5 md:gap-8">
        <div className="col-span-12 md:col-span-3">
          <img src="/images/admin/setting/profile.png" alt="" className="w-full h-auto rounded-lg" />
        </div>
        <div className="col-span-12 md:col-span-7 mt-5 md:mt-0">
          <Form
            state={FormState[0]}
            setter={FormState[1]}
            withSubmitButton
            submitLabel="Save Update"
            fields={[
              {
                fieldType: 'text',
                type: 'text',
                name: 'name',
                label: 'Your Name *'
              },
              {
                fieldType: 'text',
                type: 'email',
                name: 'email',
                label: 'Email *'
              },
              {
                fieldType: 'text',
                type: 'text',
                name: 'phone',
                label: 'Phone Number *'
              },
              {
                fieldType: 'text',
                type: 'text',
                name: 'country',
                label: 'Country *'
              },
            ]}
          />
        </div>
        <div className="md:col-span-2"></div>
      </div>
    </>
  )
}