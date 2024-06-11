"use client";
import React, { Dispatch, SetStateAction, useState } from "react";

export const AuditionContext = React.createContext<{
  state: any;
  setState: Dispatch<SetStateAction<{}>>;
}>({
  state: {},
  setState: () => {},
});

export default function AuditionContextComponent({ children }: any) {
  const [state, setState] = useState({});

  return (
    <AuditionContext.Provider value={{ state, setState }}>
      {children}
    </AuditionContext.Provider>
  );
}
