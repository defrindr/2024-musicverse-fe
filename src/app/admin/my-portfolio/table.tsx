'use client';
import Datatable from "@/components/admin/datatable/page";
import moment from "moment";
import Link from "next/link";

type PortfolioType = {
  thumbnail: string;
  title: string;
  duration: number;
  musicLink: string;
  createdAt: Date;
}

export default function TableComponent() {
  const data: PortfolioType[] = [
    {
      thumbnail: "/images/admin/album_pict.png",
      title: "I Love You 3000",
      duration: (3 * 60) + 22,
      musicLink: "#",
      createdAt: new Date()
    },
    {
      thumbnail: "/images/admin/album_pict.png",
      title: "I Love You 3000",
      duration: (3 * 60) + 22,
      musicLink: "#",
      createdAt: new Date()
    },
  ];

  return (
    <Datatable
      changeRequest={(params) => { }}
      index={false}
      tableStyle="border-separate border-spacing-y-[1em]"
      fields={[
        {
          label: 'File',
          width: 50,
          className: 'bg-[#101010] first:rounded-tl-lg first:rounded-bl-lg  last:rounded-tr-lg last:rounded-br-lg min-w-[200px]',
          value: function (item: PortfolioType) {
            return (
              <div className="flex items-center gap-5">
                <img src={item.thumbnail} alt="" className="w-[50px] h-auto rounded-md" />
                <span className="font-bold text-base text-white">{item.title}</span>
              </div>
            )
          }
        },
        {
          label: 'created',
          width: (100 - 50) / 5,
          className: 'bg-[#101010] first:rounded-tl-lg first:rounded-bl-lg  last:rounded-tr-lg last:rounded-br-lg min-w-[150px] text-center',
          value: function (item: PortfolioType) {
            return (
              <span className="text-white">
                {
                  moment(item.createdAt).format('D MMM Y')
                }
              </span>
            )
          }
        },
        {
          label: 'duration',
          width: (100 - 50) / 5,
          className: 'bg-[#101010] first:rounded-tl-lg first:rounded-bl-lg  last:rounded-tr-lg last:rounded-br-lg min-w-[70px] md:min-w-auto text-center',
          value: function (item: PortfolioType) {
            return (
              <span className="text-white">
                {Math.floor(item.duration / 60)}:{item.duration % 60}
              </span>
            )
          }
        },
        {
          label: 'link',
          width: (100 - 50) / 5,
          className: 'bg-[#101010] first:rounded-tl-lg first:rounded-bl-lg  last:rounded-tr-lg last:rounded-br-lg min-w-[70px] md:min-w-auto text-center',
          value: function (item: PortfolioType) {
            return (
              <Link href={item.musicLink} className="text-primary">
                Link music
              </Link>
            )
          }
        },
        {
          label: 'Edit',
          width: (100 - 50) / 5,
          className: 'bg-[#101010] first:rounded-tl-lg first:rounded-bl-lg  last:rounded-tr-lg last:rounded-br-lg min-w-[70px] md:min-w-auto text-center',
          value: function (item: PortfolioType) {
            return (
              <div>
                <i className="material-icons text-primary">
                  edit
                </i>
              </div>
            )
          }
        },
        {
          label: 'Delete',
          width: (100 - 50) / 5,
          className: 'bg-[#101010] first:rounded-tl-lg first:rounded-bl-lg  last:rounded-tr-lg last:rounded-br-lg min-w-[70px] md:min-w-auto text-center',
          value: function (item: PortfolioType) {
            return (
              <div>
                <i className="material-icons text-primary">
                  delete
                </i>
              </div>
            )
          }
        },

      ]}
      data={{
        items: data
      }}
    />
  )
}