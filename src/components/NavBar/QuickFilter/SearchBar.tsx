import { SpriteIcon } from "../../SpriteIcon";
//!apply dry later for both searchBar components 
export function SearchBar() {
  return (
    <div className="flex py-2 flex-1 items-center gap-2 rounded-sm outline-1 outline-slate-200 bg-[#fafafa] px-5 lg:max-w-[580px]">
      <SpriteIcon
        className="size-7 shrink-0 text-slate-500"
        aria-hidden="true"
        iconName="search"
      />
      <input
        className="flex-1 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
        placeholder="Search and select your course"
        aria-label="Search and select your course"
        type="text"
      />
    </div>
  );
}
