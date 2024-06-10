"use client";

import Form from "@/components/general/Form";
import { api } from "@/lib/utis/api";
import { Validations } from "@/lib/utis/validation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function PasswordComponent() {
  const defaultState = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  };

  const PasswordFieldState = useState({
    values: defaultState
  });

  const HandleSubmit = async () => {
    let res = await api({
      path: '/auth/password',
      method: 'put',
      body: PasswordFieldState[0].values
    });
    let json = await res.json();

    if (res.ok) {
      toast.success(json.message)
      PasswordFieldState[1]((prop) => ({ ...prop, values: defaultState }));
    } else {
      toast.error(json.message)
    }
  }

  return (
    <>
      <span className="capitalize font-semibold block text-white mb-3">
        Change Your Password
      </span>
      <span className="block text-white text-sm">
        Enter your current password and new password below.
      </span>
      <div className="grid grid-cols-3 mt-10">
        <div className="col-span-3 md:col-span-2">
          <Form
            state={PasswordFieldState[0]}
            setter={PasswordFieldState[1]}
            onSubmit={HandleSubmit}
            withSubmitButton
            submitLabel="Update Password"
            fields={[
              {
                fieldType: "text",
                type: "password",
                name: "oldPassword",
                label: "Old Password",
                validations: [
                  Validations.Required()
                ]
              },
              {
                fieldType: "text",
                type: "password",
                name: "newPassword",
                label: "New Password",
                validations: [
                  Validations.Required()
                ]
              },
              {
                fieldType: "text",
                type: "password",
                name: "confirmPassword",
                label: "Confirm New Password",
                validations: [
                  Validations.Required()
                ]
              },
            ]}
          />
        </div>
        <div className="col-span-1"></div>
      </div>
    </>
  );
}
