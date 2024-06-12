"use client";
import Datatable from "@/components/general/datatable/page";
import Form from "@/components/general/Form";
import Confirm from "@/components/general/popups/Confirm";
import Modal from "@/components/general/popups/Modal";
import { Validations } from "@/lib/utis/validation";
import { ILanguage, useContent } from "./Hook";

export default function Content() {
  const {
    openModalForm,
    HandleDelete,
    HandleSubmit,
    fetchedData,
    openModalDelete,
    closeModalForm,
    closeModalDelete,
    FormSetter,

    data,
    popup,
    FormState,
    selected,
    fields,
  } = useContent();
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
        fields={fields}
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
                  name: "language",
                  label: "Language",
                  value: selected?.language,
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
