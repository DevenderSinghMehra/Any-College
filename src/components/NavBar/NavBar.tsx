import { Logo } from "../Logo";
import { QuickFilter } from "./QuickFilter/QuickFilter";
import { SearchBar } from "./SearchBar";
import { SpriteIcon } from "../SpriteIcon";
export function NavBar() {
  return (
    <nav className="flex justify-center p-4 w-full items-center gap-4 border-b border-slate-100 bg-white px-4 text-sm shadow-[0_2px_7px_rgba(15,23,42,0.06)]">
      <Logo />
      <QuickFilter />
      <SearchBar />

      <button
        aria-label="Open menu"
        className="ml-auto md:hidden rounded-full border border-slate-200 p-2 text-slate-700 xl:ml-0"
      >
        <SpriteIcon
          className="size-5"
          iconName="hamburger"
          aria-hidden="true"
        />
      </button>
    </nav>
  );
}
