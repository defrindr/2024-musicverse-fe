"use client";

import { api } from "@/lib/utis/api";
import { Audition, Response, ResponseData } from "@/lib/utis/types/response";
import { useContext, useEffect, useState } from "react";
import AuditionItem from "./AuditionItem";
import { AuditionContext } from "./Context";

export default function AuditionList() {
  const { setState } = useContext(AuditionContext);
  const defaultState = {
    meta: {
      currentPage: 0,
      total: 0,
      perPage: 0,
      path: "",
      totalPage: 0,
    },
    items: [],
  };
  const [data, setData] = useState<ResponseData<Audition>>(defaultState);

  const fetchedData = async () => {
    const res = await api({
      path: "/auditions/audition",
    });
    const json: Response<Audition> = await res.json();

    setData(json.data ?? defaultState);
  };

  useEffect(() => {
    setState((props: any) => ({ ...props, fetchedData }));
    fetchedData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {data.items.map((item) => (
          <AuditionItem item={item} />
        ))}
      </div>
    </>
  );
}
