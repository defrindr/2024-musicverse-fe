import Title from "@/components/guest/Title";
import { useContext, useMemo } from "react";
import { GuestContext } from "./page";

export default function SectionDiscover() {
  const { items } = useContext(GuestContext);

  const secondTitle = useMemo(() => {
    if (items["app.text.discover-title"]) {
      let splitted = items["app.text.discover-title"].split("\n");
      return splitted[splitted.length - 1] !== items["app.text.discover-title"]
        ? splitted[splitted.length - 1]
        : "";
    }
    return "";
  }, [items["app.text.discover-title"]]);

  const firstTitle = useMemo(() => {
    if (items["app.text.discover-title"])
      return items["app.text.discover-title"].replace(secondTitle, "");
    return "";
  }, [items["app.text.discover-title"], secondTitle]);

  return (
    <section id="section-discover">
      <div className="container mx-auto px-12 py-12">
        <div className="grid grid-cols-12 gap-4 items-center justify-center">
          <div className="col-span-12 md:col-span-12">
            <Title
              main={firstTitle}
              second={secondTitle}
              className="mb-5 lg:mb-10 text-center lg:w-[580px] self-center m-auto block"
            />
            <p className="mb-5 text-center">
              {items["app.text.discover-content"]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
