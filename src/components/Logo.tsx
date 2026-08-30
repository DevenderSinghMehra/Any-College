import Link from "next/link";

export function Logo() {
  //!make it look good later.
  return (
    <Link
      href="/"
      className="shrink-0 text-[27px] items-center gap-x-2 flex font-bold tracking-[-1.4px] text-[#315bc1]"
    >
      <h1 className="font-geom text-black">AnyCollege</h1>

      <img className="w-8" src="/houseLogo.jpg" alt="any-college icon" />
    </Link>
  );
}
