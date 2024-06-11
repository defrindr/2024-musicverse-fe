import Breadcrumb from "@/components/general/Breadcrumb";
import Tabs from "@/components/general/Tabs";
import { Metadata } from "next";
import DetailInformation from "./Detail";

export const metadata: Metadata = {
  title: "Detail Virtual Reality Auditions",
  description: "Detail Virtual reality audition",
};

export default function DetailAuditionPage({
  params,
}: {
  params: { id: number };
}) {
  return (
    <>
      <Breadcrumb title="Detail Audition" />
      <Tabs
        pages={[
          {
            title: "Information",
            component: <DetailInformation id={params.id} />,
          },
          {
            title: "Assesments",
            component: <></>,
          },
          {
            title: "Participants",
            component: <></>,
          },
        ]}
        id={"detail-audition"}
      />
    </>
  );
}
