import Link from "next/link";
import { Fragment } from "react/jsx-runtime";
type BreadCrumbProps = {
  linksArr: string[];
};

export function BreadCrumb({ linksArr }: BreadCrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-7 flex items-center capitalize gap-2 text-xs *:hover:text-rose-500 *:transition-colors text-slate-400 sm:mb-8"
    >
      <Link href="/">Home</Link>
      {linksArr.map((text, i) => {
        const islast: Boolean = i === linksArr.length - 1;
        return (
          <Fragment key={text}>
            <span aria-hidden="true">›</span>
            {islast ? (
              <b>{text}</b>
            ) : (
              <Link className="sm:max-w-xs max-w-40 truncate" href={`/${text}`}>
                {text}
              </Link>
            )}
          </Fragment>
        );
      })}
    </nav>
  );
}
