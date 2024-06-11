"use client";
import BlockLoading from "@/components/general/popups/BlockLoading";
import { api } from "@/lib/utis/api";
import "@/styles/auth/theme.css";
import "material-icons/iconfont/material-icons.css";
import { createContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; //add this line

export const AuthContext = createContext<{ items: any }>({ items: {} });

export default function AdminLayoutApp({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [completed, setCompleted] = useState(false);
  const [items, setItems] = useState({});

  const fetched = async () => {
    const res = await api({
      path: "/preferences",
    });
    const json = await res.json();

    if (res.ok) {
      setItems(json.data);
      setCompleted(true);
    }
  };

  useEffect(() => {
    fetched();
  }, []);

  if (!completed) return <BlockLoading active opacity={1} />;
  return (
    <AuthContext.Provider value={{ items }}>
      <div id="AuthLayout" className="wrapper">
        <div className="wrapper-content">
          <div className="container-fluid">{children}</div>
        </div>
      </div>
      <ToastContainer theme="dark" />
    </AuthContext.Provider>
  );
}
