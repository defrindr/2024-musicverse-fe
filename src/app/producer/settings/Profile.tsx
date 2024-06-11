"use client";

import Form from "@/components/general/Form";
import { api } from "@/lib/utis/api";
import { Validations } from "@/lib/utis/validation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function ProfileComponent() {
  const FormState = useState({
    values: {
      name: "",
      email: "",
      phone_number: "",
      country: "",
    },
  });

  const fetchedUserProfile = async () => {
    const res = await api({
      path: "/auth/user",
    });
    const json = await res.json();
    if (res.ok) {
      const { name, phone_number, email, country } = json.data.user;
      FormState[1]((prop) => ({
        ...prop,
        values: { name, phone_number, email, country },
      }));
      // console.log(json.data.user)
    } else {
      toast.error(json.message);
    }
  };

  const updateProfile = async () => {
    const res = await api({
      path: "/auth/user",
      method: "put",
      body: FormState[0].values,
    });
    let json = await res.json();
    if (res.ok) {
      toast.success(json.message);
    } else {
      toast.error(json.message);
    }
  };

  useEffect(() => {
    fetchedUserProfile();
  }, []);

  return (
    <>
      <span className="capitalize font-semibold block text-white mb-3">
        Your Image
      </span>
      <div className="grid grid-cols-12 gap-5 md:gap-8">
        <div className="col-span-12 md:col-span-3">
          <img
            src="/images/admin/setting/profile.png"
            alt=""
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="col-span-12 md:col-span-7 mt-5 md:mt-0">
          <Form
            state={FormState[0]}
            setter={FormState[1]}
            withSubmitButton
            onSubmit={updateProfile}
            submitLabel="Save Update"
            fields={[
              {
                fieldType: "text",
                type: "text",
                name: "name",
                // validations: [
                //   Validations.Required()
                // ],
                label: "Your Name",
              },
              {
                fieldType: "text",
                type: "email",
                name: "email",
                // validations: [
                //   Validations.Required()
                // ],
                label: "Email",
              },
              {
                fieldType: "text",
                type: "text",
                validations: [Validations.Required()],
                name: "phone_number",
                label: "Phone Number",
              },
              {
                fieldType: "text",
                type: "text",
                name: "country",
                // validations: [
                //   Validations.Required()
                // ],
                label: "Country",
              },
            ]}
          />
        </div>
        <div className="md:col-span-2"></div>
      </div>
    </>
  );
}
