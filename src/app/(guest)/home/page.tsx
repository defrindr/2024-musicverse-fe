"use client";
import SectionAbout from "./SectionAbout";
import SectionHero from "./SectionHero";
import Navigation from "@/components/guest/Navigation";
import SectionService from "./SectionService";
import SectionGallery from "./SectionGallery";
import SectionTestimoni from "./SectionTestimoni";
import SectionContact from "./SectionContact";
import SectionInformation from "./SectionInformation";
import Footer from "@/components/guest/Footer";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <SectionHero />
      <SectionAbout />
      <SectionService />
      <SectionGallery />
      <SectionTestimoni />
      <SectionContact />
      <SectionInformation />
      <Footer />
    </>
  );
}
