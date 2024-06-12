"use client";
import Datatable, {
  DatatableDataType,
} from "@/components/general/datatable/page";
import Form from "@/components/general/Form";
import Confirm from "@/components/general/popups/Confirm";
import Modal from "@/components/general/popups/Modal";
import { api } from "@/lib/utis/api";
import { IFaq } from "@/lib/utis/types/response";
import { Validations } from "@/lib/utis/validation";
import { useRouter } from "next/navigation";
import QueryString from "qs";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Faq() {
  const router = useRouter();
  const [data, setData] = useState<DatatableDataType<IFaq[]>>({
    items: [],
  });
  const [selected, setSelected] = useState<IFaq | null>(null);

  const [FormState, FormSetter] = useState<{
    values: {
      question: string;
      answer: string;
    };
  }>({
    values: {
      question: "",
      answer: "",
    },
  });

  const [popup, setPopup] = useState({
    delete: false,
    detail: false,
    form: false,
  });

  const fetchedData = async (params: any = {}) => {
    const res = await api({
      path: "/cms/faq?" + QueryString.stringify(params),
    });
    const json = await res.json();

    if (res.ok) {
      setData(() => json.data);
    }
  };

  const HandleDelete = async () => {
    if (!selected) return;
    const res = await api({
      path: `/cms/faq/${selected.id}`,
      method: "delete",
    });
    const json = await res.json();

    if (!res.ok) {
      toast.error(json.message);
      return;
    }

    closeModalDelete();
    toast.success(json.message);
    fetchedData();
  };

  const HandleSubmit = async () => {
    let method = "post";
    let path = `/cms/faq`;
    if (selected) {
      path = `/cms/faq/${selected.id}`;
      method = "put";
    }

    const res = await api({
      path,
      method,
      body: FormState.values,
    });

    const json = await res.json();

    if (!res.ok) {
      toast.error(json.message);
      return;
    }

    closeModalForm();
    toast.success(json.message);
    fetchedData();
  };

  const openModalDelete = (item: any) => {
    setPopup((prop) => ({ ...prop, delete: true }));
    setSelected(item);
  };

  const openModalForm = (item: IFaq | null = null) => {
    setPopup((prop) => ({ ...prop, form: true }));
    if (item) {
      setSelected(item);
    }
  };

  const closeModalDelete = () => {
    setPopup((prop) => ({ ...prop, delete: false }));
    setSelected(null);
  };

  const closeModalForm = () => {
    setPopup((prop) => ({ ...prop, form: false }));
    setSelected(null);
  };

  useEffect(() => {
    fetchedData();
  }, []);

  return (
    <>
      <button
        className="bg-primary py-1 px-4 rounded-sm text-white"
        onClick={() => openModalForm()}
      >
        Create
      </button>
      <Datatable
        index
        searchable
        delay={500}
        data={data}
        fields={[
          {
            label: "Question",
            value: function (item: IFaq) {
              return item.question;
            },
          },
        ]}
        changeRequest={fetchedData}
        actionColumn={(item) => {
          return (
            <>
              <button onClick={() => openModalForm(item)}>
                <span className="material-icons text-yellow-600">edit</span>
              </button>
              <button onClick={() => openModalDelete(item)}>
                <span className="material-icons text-red-600">delete</span>
              </button>
            </>
          );
        }}
      />

      <Confirm
        text={"Yakin ingin menghapus data ini ?"}
        onCancel={() => closeModalDelete()}
        onApprove={HandleDelete}
        active={popup.delete}
      />

      <Modal
        active={popup.form}
        noFooter
        className="w-full md:w-[60vw]"
        body={
          <>
            <Form
              onSubmit={HandleSubmit}
              state={FormState}
              setter={FormSetter}
              fields={[
                {
                  fieldType: "text",
                  name: "question",
                  label: "Question",
                  placeholder: "How to use .... ?",
                  value: selected?.question,
                  validations: [Validations.Required()],
                },
                {
                  fieldType: "textarea",
                  name: "answer",
                  label: "Answer",
                  rows: 6,
                  placeholder: "You must ....",
                  value: selected?.answer,
                  validations: [Validations.Required()],
                },
              ]}
              footer={
                <div className="flex justify-end">
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      closeModalForm();
                    }}
                    className="py-1 px-4 rounded-md ms-3 bg-slate-500"
                  >
                    Kembali
                  </button>
                  <button className="bg-primary py-1 px-4 rounded-md ms-3">
                    Simpan
                  </button>
                </div>
              }
            />
          </>
        }
      />
    </>
  );
}
