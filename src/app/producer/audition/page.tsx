import Breadcrumb from "@/components/general/Breadcrumb";
import Tabs from "@/components/general/Tabs";
import { Metadata } from "next";
import AuditionContextComponent from "./Context";
import AuditionForm from "./Form";
import AuditionList from "./List";

export const metadata: Metadata = {
  title: "Virtual Reality Auditions",
  description: "Virtual reality audition",
};

export default function AdminDashboardPage() {
  return (
    <AuditionContextComponent>
      <Breadcrumb title="Virtual Reality Auditions" />
      <Tabs
        pages={[
          {
            title: "Add Audition",
            component: <AuditionForm />,
          },
          {
            title: "Your Audition",
            component: <AuditionList />,
          },
        ]}
        id={"audition"}
      />
    </AuditionContextComponent>
  );
}
