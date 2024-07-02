"use client";
import Datatable from "@/components/general/datatable/page";
import Confirm from "@/components/general/popups/Confirm";
import App from "@/config/app";
import { api } from "@/lib/utis/api";
import {
  AuditionParticipant,
  ResponseData
} from "@/lib/utis/types/response";
import Link from "next/link";
import QueryString from "qs";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Participants({ id }: { id: number }) {
  const [response, setResponse] = useState<ResponseData<AuditionParticipant>>({
    items: [],
    meta: {
      currentPage: 0,
      total: 0,
      perPage: 0,
      path: "",
      totalPage: 0,
    },
  });
  const [confirm, setConfirm] = useState(false);
  const [selected, setSelected] = useState<AuditionParticipant | null>(null);

  const fetchedItem = async (params: any = {}) => {
    const res = await api({
      path:
        `/auditions/audition/${id}/participant?` + QueryString.stringify(params),
    });
    const json = await res.json();
    setResponse(json.data);
  };

  const openModal = (item: AuditionParticipant) => {
    setSelected(item);
    setConfirm(true);
  };

  const closeModal = () => {
    setConfirm(false);
  };

  const HandleAudisi = async () => {
    if (!selected) return;

    const res = await api({
      path: `/auditions/audition/${id}/participant/${selected?.id}/set-room`,
      method: "POST",
    });
    const json = await res.json();

    if (!res.ok) {
      toast.error(json.message);
      return;
    }

    toast.success(json.message);

    // close modal
    closeModal();
    // reload item
    fetchedItem();
  };

  useEffect(() => {
    fetchedItem();
  }, []);

  return (
    <>
      <Datatable
        index
        actionButtonHref={`/producer/audition/${id}/participant/create`}
        searchable
        delay={100}
        changeRequest={fetchedItem}
        data={response}
        actionColumn={(item: AuditionParticipant) => {
          if (item.status === "auditions")
            return (
              <>
                <a href={App.StreamerUrl + "?" + QueryString.stringify({
                  room: item.room,
                  name: item.participant?.name
                })} target="_blank">
                  <span className="material-icons text-green-400">camera</span>
                </a>
              </>
            );
          else if (item.status === "registration")
            return (
              <>
                <button onClick={() => openModal(item)}>
                  <span className="bg-green-500 p-1 px-4 m-auto rounded-md">Audisi</span>
                </button>
              </>
            );

          return <></>;
        }}
        fields={[
          {
            label: "Nama Peserta",
            value: (item: AuditionParticipant) => item.participant?.name ?? '-',
          },
          {
            label: "Status",
            value: (item: AuditionParticipant) => item.status,
          },
        ]}
      />

      <Confirm
        text="Yakin ingin mengaudisi peserta ini ?"
        onCancel={() => closeModal()}
        onApprove={() => HandleAudisi()}
        active={confirm}
      />
    </>
  );
}
