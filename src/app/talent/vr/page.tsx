import Breadcrumb from "@/components/general/Breadcrumb";
import Tabs from "@/components/general/Tabs";
import TalentVrCharacter from "./Character";
import TalentVrAudition from "./Audition";
import TalentVrEvent from "./Event";

export default function TalentVrPage() {
  return (
    <>
      <Breadcrumb title="Virtual Reality" />
      <Tabs
        id="talent-vr"
        pages={[
          {
            title: "Character",
            component: <TalentVrCharacter />,
          },
          {
            title: "Your Audition",
            component: <TalentVrAudition />,
          },
          {
            title: "Upcoming Event",
            component: <TalentVrEvent />,
          },
        ]}
      />
    </>
  );
}
