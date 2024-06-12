import Breadcrumb from "@/components/general/Breadcrumb";
import Tabs from "@/components/general/Tabs";
import { Metadata } from "next";
import Image from "./Image";
import Redaksional from "./Redaksional";
import CmsContextProvider from "./Context";
import Faq from "./Faq";

export const metadata: Metadata = {
  title: "Content Management Sistem",
};

export default function CmsPage() {
  return (
    <>
      <Breadcrumb title="Content Management Sistem" />
      <CmsContextProvider>
        <Tabs
          id="cms"
          pages={[
            {
              title: "Redaksional",
              component: <Redaksional />,
            },
            {
              title: "Gambar",
              component: <Image />,
            },
            {
              title: "FAQ",
              component: <Faq />,
            },
          ]}
        />
      </CmsContextProvider>
    </>
  );
}
