import Breadcrumb from "@/components/general/Breadcrumb";
import { Metadata } from "next";
import ListUsers from "./List";
import Tabs from "@/components/general/Tabs";

export const metadata: Metadata = {
  title: "Users",
  description: "List of user",
};
export default function UsersPage() {
  return (
    <>
      <Breadcrumb title="Users" description="List of users" />
      <Tabs
        id="users-list-tab"
        pages={[
          {
            title: "Producers",
            component: <ListUsers role="producer" />,
          },
          {
            title: "Talents",
            component: <ListUsers role="talent" />,
          },
        ]}
      />
    </>
  );
}
