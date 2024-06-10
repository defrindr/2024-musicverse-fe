"use client";

import Datatable from "@/components/general/datatable/page";
import Confirm from "@/components/general/popups/Confirm";
import { api } from "@/lib/utis/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type ISkill = {
  name: string;
  icon: string
}

export default function List() {
  const router = useRouter();
  const [items, setItems] = useState<ISkill[]>([]);
  const [popup, setPopup] = useState(false);
  const [selected, setSelected] = useState<{
    id: number
  } | null>(null)

  const fetchedItems = async () => {
    const res = await api({
      path: '/auditions/skill-category'
    });
    const json = await res.json();

    if (res.ok) {
      setItems(() => json.data.items)
    }
  }

  const HandleDelete = async () => {
    if (!selected) return;
    const res = await api({
      path: `/auditions/skill-category/${selected.id}`,
      method: 'delete'
    });
    const json = await res.json();

    if (!res.ok) {
      toast.error(json.message)
      return;
    }

    closeModalDelete();
    toast.success(json.message)
    fetchedItems();
  }

  const openModalDelete = (item: any) => {
    setPopup(true);
    setSelected(item);
  }

  const closeModalDelete = () => {
    setPopup(false);
    setSelected(null)
  }

  useEffect(() => {
    fetchedItems();
  }, [])

  return (
    <>
      <Datatable
        index
        actionButtonHref='/admin/master/skill/create'
        data={{ items }}
        fields={[
          {
            label: "name",
            value: function (item: ISkill) {
              return item.name
            }
          },
          {
            label: "Ikon",
            className: "text-center",
            value: function (item: ISkill) {
              return (
                <>
                  <img src={item.icon} className="w-auto h-[50px]" />
                </>
              )
            }
          }
        ]}

        changeRequest={function (param: {}): void {
          console.log('trigger changeRequest')
        }}

        actionColumn={(item) => {
          return <>
            <Link href={`/admin/master/skill/${item.id}`}>
              <span className="material-icons text-white">
                edit
              </span>
            </Link>
            <button onClick={() => openModalDelete(item)}>
              <span className="material-icons text-red-600">
                delete
              </span>
            </button>
          </>;
        }}
      />

      <Confirm
        text={"Yakin ingin menghapus data ini ?"}
        onCancel={() => closeModalDelete()}
        onApprove={HandleDelete}
        active={popup} />
    </>
  )
}