"use client";

import Datatable, {
  DatatableDataType,
} from "@/components/general/datatable/page";
import Confirm from "@/components/general/popups/Confirm";
import { api } from "@/lib/utis/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import QueryString from "qs";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type ISkill = {
  name: string;
  icon: string;
};

export default function List() {
  const router = useRouter();
  const [data, setData] = useState<DatatableDataType<ISkill[]>>({
    items: [],
  });
  const [popup, setPopup] = useState(false);
  const [selected, setSelected] = useState<{
    id: number;
  } | null>(null);

  const fetchedData = async (params: any = {}) => {
    const res = await api({
      path: "/auditions/skill-category?" + QueryString.stringify(params),
    });
    const json = await res.json();

    if (res.ok) {
      setData(() => json.data);
    }
  };

  const HandleDelete = async () => {
    if (!selected) return;
    const res = await api({
      path: `/auditions/skill-category/${selected.id}`,
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

  const openModalDelete = (item: any) => {
    setPopup(true);
    setSelected(item);
  };

  const closeModalDelete = () => {
    setPopup(false);
    setSelected(null);
  };

  useEffect(() => {
    fetchedData();
  }, []);

  return (
    <>
      <Datatable
        index
        searchable
        delay={500}
        actionButtonHref="/admin/master/skill/create"
        data={data}
        fields={[
          {
            label: "name",
            value: function (item: ISkill) {
              return item.name;
            },
          },
          {
            label: "Ikon",
            className: "text-center",
            value: function (item: ISkill) {
              return (
                <>
                  <img src={item.icon} className="w-auto h-[50px]" />
                </>
              );
            },
          },
        ]}
        changeRequest={fetchedData}
        actionColumn={(item) => {
          return (
            <>
              <Link href={`/admin/master/skill/${item.id}`}>
                <span className="material-icons text-white">edit</span>
              </Link>
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
        active={popup}
      />
    </>
  );
}
