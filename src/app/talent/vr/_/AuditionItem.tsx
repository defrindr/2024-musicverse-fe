import { Audition } from "@/lib/utis/types/response";
import Link from "next/link";

export default function AuditionItem({ item }: { item: Audition }) {
  return (
    <div className="p-5 rounded-md bg-slate-800 grid grid-cols-3">
      <div className="col-span-2">
        <span className="block text-white text-[12px] font-light">
          {item.date}
        </span>
        <span className="block text-white font-bold text-[28px] leading-[38px]">
          {item.title}
        </span>
        <span className="block text-white font-bold">{item.skill.name}</span>
        <div className="block mt-8">
          <Link
            href={`/talent/vr/audition/${item.id}`}
            className="px-4 py-2 bg-primary text-white font-bold rounded-full "
          >
            MORE
          </Link>
        </div>
      </div>
      <div className="col-span-1">
        <img src={item.skill.icon} alt={item.skill.name} className="w-auto" />
      </div>
    </div>
  );
}
