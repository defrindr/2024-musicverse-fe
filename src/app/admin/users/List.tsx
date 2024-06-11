"use client";

import Datatable from "@/components/general/datatable/page";
import { api } from "@/lib/utis/api";
import { ResponseData, User } from "@/lib/utis/types/response";
import QueryString from "qs";
import { useEffect, useState } from "react";

export default function ListUsers({ role }: { role: string }) {
  const [response, setResponse] = useState<ResponseData<User>>({
    items: [],
    meta: {
      currentPage: 0,
      total: 0,
      perPage: 0,
      path: "",
      totalPage: 0,
    },
  });

  const fetchedItem = async (params: any = {}) => {
    const res = await api({
      path: `/users/${role}?` + QueryString.stringify(params),
    });
    const json = await res.json();

    if (!res.ok) {
      return;
    }

    setResponse(json.data);
  };

  useEffect(() => {
    fetchedItem();
  }, []);

  return (
    <>
      <Datatable
        index
        searchable
        delay={300}
        data={response}
        changeRequest={fetchedItem}
        fields={[
          {
            label: "Nama",
            value: (item) => item.name,
          },
          {
            label: "Nama",
            value: (item) => item.name,
          },
          {
            label: "Email",
            value: (item) => item.email,
          },
          {
            label: "Negara",
            value: (item) => item.country,
          },
        ]}
      />
    </>
  );
}
