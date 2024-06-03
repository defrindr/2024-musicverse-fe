"use client";

import Form from "@/components/admin/Form";
import { useState } from "react";

export default function PasswordComponent() {
  const PasswordFieldState = useState({ values: {} });
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
            withSubmitButton
            submitLabel="Update Password"
            fields={[
              {
                fieldType: "text",
                type: "password",
                name: "oldPassword",
                label: "Old Password *",
              },
              {
                fieldType: "text",
                type: "password",
                name: "newPassword",
                label: "New Password *",
              },
              {
                fieldType: "text",
                type: "password",
                name: "confirmPassword",
                label: "Confirm New Password *",
              },
            ]}
          />
        </div>
        <div className="col-span-1"></div>
      </div>
    </>
  );
}
