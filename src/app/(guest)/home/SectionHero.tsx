"use client";

import React, { useContext } from "react";
import { GuestContext } from "./page";

const SliderItem = () => {
  const { items } = useContext(GuestContext);

  return (
    <>
      <div className="grid grid-cols-12 gap-2 items-center">
        <div className="col-span-1 md:col-span-2" />
        <div className="col-span-4 md:col-span-4">
          <span className="block text-lg md:text-xl lg:text-[64px] lg:leading-[72px] text-white mb-3 font-bold">
            {items["app.text.hero"] &&
              items["app.text.hero"]
                .split("\n")
                .map((text: string, index: number) => (
                  <React.Fragment key={index}>
                    {text}
                    <br />
                  </React.Fragment>
                ))}
          </span>
        </div>
        <div className="col-span-7 md:block md:col-span-6">
          <img
            src={items["app.image.hero"] ?? "/images/guest/hero.png"}
            alt="Slider"
            className="w-[100%] align-middle"
          />
        </div>
        <div />
      </div>
      <div className="flex justify-center items-center italic text-xs">
        <span className="text-center block">
          {items["app.text.hero-bottom"]}
        </span>
      </div>
    </>
  );
};

export default function SectionHero() {
  return (
    <header>
      <SliderItem key={1} />
    </header>
  );
}
