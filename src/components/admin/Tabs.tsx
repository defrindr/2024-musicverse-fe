"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";

type TabsPageType = {
  title: string;
  component: React.ReactNode;
};

type TabsType = {
  id: string;
  pages: TabsPageType[];
};

export default function Tabs(props: TabsType) {
  const keyId = useMemo(
    () => `ZeroTemplate_TabComponent[${props.id}]`,
    [props.id],
  );
  const titles = useMemo(
    () => props.pages.map((page) => page.title),
    [props.pages],
  );
  const components = useMemo(
    () => props.pages.map((page) => page.component),
    [props.pages],
  );
  const [active, setActive] = useState<number>(0);

  const HandleChangeTab = useCallback(
    (index: number) => {
      localStorage.setItem(keyId, index.toString());
      setActive(index);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.id, keyId],
  );

  useEffect(
    () => {
      let activeIndex: number = Number(localStorage.getItem(keyId)) ?? 0;
      setActive(activeIndex);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <div className="component-tabs">
      <ul className="flex md:pl-2 overflow-auto scroll-smooth no-scrollbar">
        {titles.map((title, index) => {
          return (
            <li
              key={"title-" + index}
              className={`title ${active === index && 'active'}`}
              onClick={() => HandleChangeTab(index)}
            >
              {title}
            </li>
          );
        })}
      </ul>
      <div className="bg-transparent md:p-4">
        {components.map((component, index) => {
          if (index === active) {
            return (
              <div key={"component-" + index} className="block">
                {component}
              </div>
            );
          }
          return (
            <div key={"component-" + index} className="hidden">
              {component}
            </div>
          );
        })}
      </div>
    </div>
  );
}
