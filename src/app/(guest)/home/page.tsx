"use client";
import SectionDiscover from "./SectionDiscover";
import SectionHero from "./SectionHero";
import Navigation from "@/components/guest/Navigation";
import SectionInspire from "./SectionInspire";
import SectionMarket from "./SectionMarket";
import SectionAr from "./SectionAr";
import SectionFaq from "./SectionFaq";
import Footer from "@/components/guest/Footer";
import SectionBrand from "./SectionBrand";
import BlockLoading from "@/components/general/popups/BlockLoading";
import { useContext, useEffect, useState } from "react";
import { api } from "@/lib/utis/api";
import { createContext } from "react";

export const GuestContext = createContext<{ items: any }>({
  items: {
    faqs: [],
  },
});

export default function HomePage() {
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
    <>
      <GuestContext.Provider value={{ items }}>
        <Navigation />
        <SectionHero />
        <SectionBrand />
        <SectionDiscover />
        <SectionInspire />
        <SectionMarket />
        <SectionAr />
        <SectionFaq />
        <Footer />
      </GuestContext.Provider>
    </>
  );
}
