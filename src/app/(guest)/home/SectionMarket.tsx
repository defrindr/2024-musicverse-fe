import Title from "@/components/guest/Title";
import { useContext } from "react";
import { GuestContext } from "./page";

export default function SectionMarket() {
  const { items } = useContext(GuestContext);

  return (
    <section id="section-market">
      <div className="container mx-auto py-12 px-12">
        <div className="grid grid-cols-12 gap-5 items-center">
          <div className="col-span-12 lg:col-span-5">
            <Title
              main={
                items["app.text.market-title"] ??
                "Help market and distribute music"
              }
              className="mb-5 lg:mb-10"
            />
            <p className="text-justify">{items["app.text.market-content"]}</p>
          </div>
          <div className="col-span-0 lg:col-span-1"></div>
          <div className="col-span-12 lg:col-span-6">
            <img
              src={items["app.image.market"] ?? "images/guest/market.png"}
              alt="Market"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
