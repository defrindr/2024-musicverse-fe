"use client";

import Form from "@/components/general/Form";
import { api } from "@/lib/utis/api";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


type AllowedType = 'instagram' | 'soundcloud' | 'youtube' | 'tiktok' | 'website';
type IResponse = {
  [key in AllowedType]: string;
};

type IPayload = {
  name: AllowedType,
  value: string
}


export default function SocialComponent() {
  const SocialState = useState<{
    values: IResponse
  }>({
    values: {
      instagram: '',
      soundcloud: '',
      youtube: '',
      tiktok: '',
      website: ''
    }
  });
  const setSocialLinks = (obj: IResponse) => {
    SocialState[1]((prop) => ({ ...prop, values: { ...obj } }));
  }

  const fetchedSocials = async () => {
    let res = await api({
      path: '/auth/socials',
    })
    let json = await res.json()
    setSocialLinks(json.data.socials)
  }

  useEffect(() => {
    fetchedSocials();
  }, [])



  const HandleSubmit = async () => {
    let socials: IPayload[] = [];

    const keys = Object.keys(SocialState[0].values) as AllowedType[];

    for (let i = 0; i < keys.length; i++) {
      socials.push({
        name: keys[i],
        value: SocialState[0].values[keys[i]]
      })
    }


    let res = await api({
      path: '/auth/socials',
      method: 'post',
      body: { socials }
    })

    let json = await res.json()

    if (res.ok) {
      toast.success(json.message)
    } else {
      toast.error(json.message)
    }
  }



  return (
    <>
      <span className="capitalize font-semibold block text-white mb-3">
        Social Links
      </span>
      <span className="block text-white text-sm">
        Add your social link handles.
      </span>
      <div className="grid grid-cols-3 mt-10">
        <div className="col-span-3 md:col-span-2">
          <Form
            state={SocialState[0]}
            setter={SocialState[1]}
            onSubmit={HandleSubmit}
            withSubmitButton
            submitLabel="Update Social"
            fields={[
              {
                fieldType: "text",
                name: "instagram",
                placeholder: "ADD YOUR INSTAGRAM",
                icon: <img src="/images/admin/setting/social/instagram.svg" />,
              },
              {
                fieldType: "text",
                name: "soundcloud",
                placeholder: "ADD YOUR SOUNDCLOUD",
                icon: <img src="/images/admin/setting/social/soundcloud.svg" />,
              },
              {
                fieldType: "text",
                name: "youtube",
                placeholder: "ADD YOUR YOUTUBE",
                icon: <img src="/images/admin/setting/social/youtube.svg" />,
              },
              {
                fieldType: "text",
                name: "tiktok",
                placeholder: "ADD YOUR TIKTOK",
                icon: <img src="/images/admin/setting/social/tiktok.svg" />,
              },
              {
                fieldType: "text",
                name: "website",
                placeholder: "ADD YOUR WEBSITE",
                icon: <img src="/images/admin/setting/social/website.svg" />,
              },
            ]}
          />
        </div>
        <div className="col-span-1"></div>
      </div>
    </>
  );
}
