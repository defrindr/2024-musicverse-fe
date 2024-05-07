"use client";

import Form from "@/components/admin/Form";
import { useState } from "react";

export default function SocialComponent() {
  const PasswordFieldState = useState({ values: {} });
  return (
    <>
      <span className="capitalize font-semibold block text-white mb-3">Social Links</span>
      <span className="block text-white text-sm">Add your social link handles.</span>
      <div className="grid grid-cols-3 mt-10">
        <div className="col-span-3 md:col-span-2">
          <Form state={PasswordFieldState[0]} setter={PasswordFieldState[1]}
            withSubmitButton
            submitLabel="Update Social"
            fields={[
              {
                fieldType: 'text',
                name: 'instagram',
                placeholder: 'ADD YOUR INSTAGRAM',
                icon: <img src="/images/admin/setting/social/instagram.svg" />
              },
              {
                fieldType: 'text',
                name: 'soundcloud',
                placeholder: 'ADD YOUR SOUNDCLOUD',
                icon: <img src="/images/admin/setting/social/soundcloud.svg" />
              },
              {
                fieldType: 'text',
                name: 'youtube',
                placeholder: 'ADD YOUR YOUTUBE',
                icon: <img src="/images/admin/setting/social/youtube.svg" />
              },
              {
                fieldType: 'text',
                name: 'tiktok',
                placeholder: 'ADD YOUR TIKTOK',
                icon: <img src="/images/admin/setting/social/tiktok.svg" />
              },
              {
                fieldType: 'text',
                name: 'website',
                placeholder: 'ADD YOUR WEBSITE',
                icon: <img src="/images/admin/setting/social/website.svg" />
              }
            ]} />
        </div>
        <div className="col-span-1"></div>
      </div>
    </>
  )
}