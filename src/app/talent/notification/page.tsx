import Breadcrumb from "@/components/general/Breadcrumb";
import Tabs from "@/components/general/Tabs";

type NotificationItemType = {
  icon: "history" | "achievement";
  title: string;
  href: string;
  timestamp: string;
  read: boolean;
};

export default function NotificationPage() {
  const items: NotificationItemType[] = [
    {
      icon: "history",
      title: "Musicverse Auditions Start in 5 Minutes! Prepare Yourself.",
      href: "#",
      timestamp: "13 June, 03:55 PM",
      read: true,
    },
    {
      icon: "achievement",
      title:
        "Golden Opportunity!  Renowned producer EBI is looking for new singing talent in MusicVerse!",
      href: "#",
      timestamp: "13 June, 03:55 PM",
      read: false,
    },
    {
      icon: "achievement",
      title: "Musicverse Auditions Start in 5 Minutes! Prepare Yourself.",
      href: "#",
      timestamp: "13 June, 03:55 PM",
      read: true,
    },
  ];
  return (
    <>
      <Breadcrumb title="Notification" />
      <Tabs
        id="notification"
        pages={[
          {
            title: "new (1)",
            component: (
              <div className="flex flex-col gap-5">
                {items.map((item, index) => (
                  <NotificationItem item={item} key={index} />
                ))}
              </div>
            ),
          },
          {
            title: "all (3)",
            component: <></>,
          },
        ]}
      />
    </>
  );
}

const NotificationItem = ({ item }: { item: NotificationItemType }) => {
  return (
    <div
      className={`${item.read ? "bg-[#101010]" : "bg-[#1F2021]"} p-4 rounded-md text-white flex gap-4 items-center border-[1px] border-gray-700`}
    >
      <div>
        <img
          src={
            item.icon === "achievement"
              ? "/images/admin/notification/achievement.svg"
              : "/images/admin/notification/history.svg"
          }
          alt="logo notification"
          className="w-[36px] h-auto"
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-base font-semibold">{item.title}</span>
        <span className="text-sm text-gray-500 font-light">
          {item.timestamp}
        </span>
      </div>
    </div>
  );
};
