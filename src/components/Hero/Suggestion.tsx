import Link from "next/link";
import { SpriteIcon } from "@/src/components/SpriteIcon";

export function Suggestion({
  title = "Explore Colleges",
  description = "Discover top colleges across India by course, city or rank.",
  iconName = "search",
  href = "#explore",
}) {
  return (
    <Link
      href={href}
      className="group flex w-full items-center gap-3 rounded-2xl border border-rose-100 bg-rose-50/80 p-4 shadow-[0_4px_14px_rgba(190,24,93,0.04)] transition-colors hover:border-rose-200 hover:bg-rose-50 sm:gap-4 sm:p-5"
    >
      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-rose-100 text-[#d92f35] sm:size-12">
        <SpriteIcon className="size-5 sm:size-6" iconName={iconName} />
      </span>

      <span className="min-w-0 flex-1">
        <strong className="block text-xs font-semibold leading-5 text-slate-950 sm:text-sm">
          {title}
        </strong>
        <span className="mt-1 block max-w-[14rem] text-[10px] leading-4 text-slate-500 sm:text-[11px] sm:leading-5">
          {description}
        </span>
      </span>

      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-white text-[#d92f35] shadow-sm transition-transform group-hover:translate-x-0.5 sm:size-8">
        <SpriteIcon className="size-3.5 sm:size-4" iconName="arow-right" />
      </span>
    </Link>
  );
}
