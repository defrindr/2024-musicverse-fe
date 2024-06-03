import Breadcrumb from "@/components/admin/Breadcrumb";
import Tabs from "@/components/admin/Tabs";
import ProfileComponent from "./Profile";
import PasswordComponent from "./Password";
import SocialComponent from "./Social";

export default function SettingPage() {
  return (
    <>
      <Breadcrumb title="your account setting" />
      <Tabs
        pages={[
          {
            title: "account",
            component: <ProfileComponent />,
          },
          {
            title: "password",
            component: <PasswordComponent />,
          },
          {
            title: "social",
            component: <SocialComponent />,
          },
        ]}
        id={"settings"}
      />
    </>
  );
}
