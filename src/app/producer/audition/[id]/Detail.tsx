"use client";
import Modal from "@/components/general/popups/Modal";
import { api } from "@/lib/utis/api";
import { Audition } from "@/lib/utis/types/response";
import { useEffect, useState } from "react";

export default function DetailInformation({ id }: { id: number }) {
  const [item, setItem] = useState<Audition | null>(null);
  const [modal, setModal] = useState(false);
  const [pdf, setPdf] = useState("");

  const fetchedItem = async () => {
    const res = await api({
      path: `/auditions/audition/${id}`,
    });
    const json = await res.json();

    setItem(json.data);
  };

  const openPdf = (pdfLink: string) => {
    setPdf(pdfLink);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    fetchedItem();
  }, []);

  if (!item) {
    return <></>;
  }

  return (
    <div>
      <span className="block font-light text-white">Audition Title: </span>
      <span className="block font-bold text-white text-[24px] leading-[32px] mb-8 mt-1">
        {item.title}
      </span>
      <span className="block font-light text-white">Skill Category: </span>
      <span className="block font-bold text-white text-[24px] leading-[32px] mb-8 mt-1">
        {item.skill.name}
      </span>
      <span className="block font-light text-white">Date & Time: </span>
      <span className="block font-bold text-white text-[24px] leading-[32px] mb-8 mt-1">
        {item.date}
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="col-span-1">
          <span className="block font-light text-white">
            Term & Conditions:{" "}
          </span>
          <button
            onClick={() => openPdf(item.term)}
            className="font-bold text-primary text-[24px] leading-[32px] mb-8 mt-1 flex items-center cursor-pointer"
          >
            <span className="material-icons" style={{ fontSize: "32px" }}>
              file_present
            </span>
            Term Audition
          </button>
        </div>
        <div className="col-span-1">
          <span className="block font-light text-white">Contract: </span>
          <button
            onClick={() => openPdf(item.contract)}
            className="font-bold text-primary text-[24px] leading-[32px] mb-8 mt-1 flex items-center cursor-pointer"
          >
            <span className="material-icons" style={{ fontSize: "32px" }}>
              file_copy
            </span>
            Contract Audition
          </button>
        </div>
      </div>

      <span className="block font-light text-white">Description: </span>
      <span className="block font-bold text-white text-[24px] leading-[32px] mb-8 mt-1">
        {item.description}
      </span>

      <Modal
        active={modal}
        body={
          <>
            <iframe
              src={`${pdf}#toolbar=0&navpanes=0`}
              style={{
                width: "50vw",
                height: "80vh",
              }}
            ></iframe>
          </>
        }
        footer={
          <>
            <button
              onClick={() => closeModal()}
              className="py-1 px-2 rounded-md bg-slate-200 text-black"
            >
              Tutup
            </button>
          </>
        }
      />
    </div>
  );
}
