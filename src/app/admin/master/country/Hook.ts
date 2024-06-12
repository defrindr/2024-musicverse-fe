import { DatatableDataType } from "@/components/general/datatable/page";
import { api } from "@/lib/utis/api";
import QueryString from "qs";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export type ICountry = {
  id: number;
  country: string;
};

const useContent = () => {
  const [data, setData] = useState<DatatableDataType<ICountry[]>>({
    items: [],
  });
  const [selected, setSelected] = useState<ICountry | null>(null);

  const [FormState, FormSetter] = useState<{
    values: {
      country: string;
    };
  }>({
    values: {
      country: "",
    },
  });

  const fields = [
    {
      label: "Country",
      value: function (item: ICountry) {
        return item.country;
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
      path: "/master/country?" + QueryString.stringify(params),
    });
    const json = await res.json();

    if (res.ok) {
      setData(() => json.data);
    }
  };

  const HandleDelete = async () => {
    if (!selected) return;
    const res = await api({
      path: `/master/country/${selected.id}`,
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
    let path = `/master/country`;
    if (selected) {
      path = `/master/country/${selected.id}`;
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

  const openModalForm = (item: ICountry | null = null) => {
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
