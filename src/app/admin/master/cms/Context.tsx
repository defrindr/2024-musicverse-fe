"use client";
import { api } from "@/lib/utis/api";
import { createContext, ReactNode, useEffect, useState } from "react";

export const CmsContext = createContext({
  items: {
    texts: [],
    images: [],
  },
  updateItems: () => {},
});

export default function CmsContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [items, setItems] = useState({});

  const updateItems = async () => {
    const res = await api({
      path: "/web-config",
    });
    const json = await res.json();
    setItems(json.data);
  };

  useEffect(() => {
    updateItems();
  }, []);

  return (
    <CmsContext.Provider value={{ items, updateItems }}>
      {children}
    </CmsContext.Provider>
  );
}
