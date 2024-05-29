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

export default function HomePage() {
  return (
    <>
      <Navigation />
      <SectionHero />
      <SectionBrand />
      <SectionDiscover />
      <SectionInspire />
      <SectionMarket />
      <SectionAr />
      <SectionFaq />
      <Footer />
    </>
  );
}
