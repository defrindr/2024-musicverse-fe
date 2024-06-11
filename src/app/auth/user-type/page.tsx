"use client";
import { useState } from "react";
import Option from "./Option";
import Confirm from "@/components/general/popups/Confirm";
import BlockLoading from "@/components/general/popups/BlockLoading";
import { api } from "@/lib/utis/api";
import { toast } from "react-toastify";
import { setCookie } from "typescript-cookie";
import App from "@/config/app";

export default function UserTypePage() {
  const [confirm, setConfirm] = useState(false);
  const [role, setRole] = useState<"TALENT" | "PRODUCER">("TALENT");
  const [loading, setLoading] = useState(false);

  const HandleSubmit = async () => {
    setConfirm(false);
    setLoading(true);

    api({
      path: "/auth/confirm-role",
      method: "post",
      body: { role },
    }).then(async (res) => {
      const json = await res.json();
      if (!res.ok) {
        setLoading(false);
        toast.error(json.message);
        return;
      }

      setCookie(App.Cookie.Auth.RedirectTo, json.data.redirectUrl);
      setCookie(App.Cookie.Auth.User, JSON.stringify(json.data.user));
      window.location.href = window.location.origin + json.data.redirectUrl;
    });

    return false;
  };

  return (
    <>
      <div className="grid grid-cols-5 gap-0">
        <div className="col-span-5 md:col-span-3 flex flex-col gap-2">
          <span
            className="
          font-[poppins]
          text-[48px]
          font-semibold
          leading-[52.32px]
          tracking-[0.01em]
          text-left
          block
          mb-4"
          >
            “Are you an Artist or a Producer?”
          </span>
          <span className="block mb-8">
            Select one profile type now and you can always create a second one
            later.
          </span>
        </div>
        <div className="col-span-5 md:col-span-2 flex flex-col gap-8">
          <Option
            title="talent"
            description="distribute your music"
            icon="/images/auth/icon-talent.png"
            active={role == "TALENT"}
            onSelect={() => setRole("TALENT")}
          />
          <Option
            title="PRODUCER"
            description="looking for new music talents"
            icon="/images/auth/icon-producer.png"
            active={role == "PRODUCER"}
            onSelect={() => setRole("PRODUCER")}
          />
        </div>

        <div className="col-span-3"></div>

        <div className="col-span-5 md:col-span-2 mt-8">
          <button
            disabled={loading}
            onClick={() => setConfirm(!confirm)}
            className="bg-primary p-2 px-4 rounded-full w-full"
          >
            CREATE PROFILE
          </button>
        </div>
      </div>

      <BlockLoading active={loading} />
      <Confirm
        text="Apakah anda yakin bahwa data sudah benar ??"
        onCancel={() => setConfirm(!confirm)}
        onApprove={HandleSubmit}
        active={confirm}
      />
    </>
  );
}
