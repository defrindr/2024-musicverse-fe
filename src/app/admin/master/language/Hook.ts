import { DatatableDataType } from "@/components/general/datatable/page";
import { api } from "@/lib/utis/api";
import QueryString from "qs";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export type ILanguage = {
  id: number;
  language: string;
};

const useContent = () => {
  const [data, setData] = useState<DatatableDataType<ILanguage[]>>({
    items: [],
  });
  const [selected, setSelected] = useState<ILanguage | null>(null);

  const [FormState, FormSetter] = useState<{
    values: {
      language: string;
    };
  }>({
    values: {
      language: "",
    },
  });

  const fields = [
    {
      label: "Language",
      value: function (item: ILanguage) {
        return item.language;
      },
    },
  ];

  const [popup, setPopup] = useState({
    delete: false,
    detail: false,
    form: false,
  });

  const fetchedData = async (params: any = {}) => {
    const res = await api({
      path: "/master/language?" + QueryString.stringify(params),
    });
    const json = await res.json();

    if (res.ok) {
      setData(() => json.data);
    }
  };

  const HandleDelete = async () => {
    if (!selected) return;
    const res = await api({
      path: `/master/language/${selected.id}`,
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
    let path = `/master/language`;
    if (selected) {
      path = `/master/language/${selected.id}`;
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

  const openModalForm = (item: ILanguage | null = null) => {
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

  return {
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
  };
};

export { useContent };
