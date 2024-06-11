"use client";
import Datatable from "@/components/general/datatable/page";
import Confirm from "@/components/general/popups/Confirm";
import { api } from "@/lib/utis/api";
import {
  AuditionAssesment,
  Response,
  ResponseData,
} from "@/lib/utis/types/response";
import Link from "next/link";
import { useRouter } from "next/navigation";
import QueryString from "qs";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Assesments({ id }: { id: number }) {
  const [response, setResponse] = useState<ResponseData<AuditionAssesment>>({
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
  const [selected, setSelected] = useState<AuditionAssesment | null>(null);

  const fetchedItem = async (params: any = {}) => {
    const res = await api({
      path:
        `/auditions/audition/${id}/assesment?` + QueryString.stringify(params),
    });
    const json = await res.json();
    setResponse(json.data);
  };

  const openModal = (item: AuditionAssesment) => {
    setSelected(item);
    setConfirm(true);
  };

  const closeModal = () => {
    setConfirm(false);
  };

  const HandleDelete = async () => {
    if (!selected) return;

    const res = await api({
      path: `/auditions/audition/${id}/assesment/${selected?.id}`,
      method: "DELETE",
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
        actionButtonHref={`/producer/audition/${id}/assesment/create`}
        searchable
        delay={100}
        changeRequest={fetchedItem}
        data={response}
        actionColumn={(item: AuditionAssesment) => {
          return (
            <>
              <Link href={`/producer/audition/${id}/assesment/${item.id}`}>
                <span className="material-icons text-white">edit</span>
              </Link>
              <button onClick={() => openModal(item)}>
                <span className="material-icons text-red-600">delete</span>
              </button>
            </>
          );
        }}
        fields={[
          {
            label: "Nama Poin Assesment",
            value: (item: AuditionAssesment) => item.assesment,
          },
          {
            label: "Bobot Assesment",
            value: (item: AuditionAssesment) => item.weight,
          },
        ]}
      />

      <Confirm
        text="Yakin ingin menghapus data ini ?"
        onCancel={() => closeModal()}
        onApprove={() => HandleDelete()}
        active={confirm}
      />
    </>
  );
}
