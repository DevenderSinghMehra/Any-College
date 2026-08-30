"use client";
import { useSelector } from "react-redux";
import Link from "next/link";
import type { RootState } from "@/src/store/store";
import { StatCard } from "@/src/components/CurrentCollege/StatCard";
import { DetailRow } from "@/src/components/CurrentCollege/DetailRow";

export default function CollegePage() {
  const currentCollege = useSelector(
    (state: RootState) => state.currentCollege.college,
  );

  function valueOrFallback(value: string | number) {
    const strValue = String(value).trim();
    if (!strValue) return "Not Available"; //it can only be "", but still
    return value;
  }

  function getINR(value: number) {
    return `₹ ${value.toLocaleString("en-IN")}`;
  }

  if (!currentCollege) {
    return (
      <main className="min-h-[calc(100dvh-76px)] bg-[#fcfcfd] px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
          <p className="text-sm text-slate-500">
            College information unavailable.
          </p>
        </div>
      </main>
    );
  }

  const {
    name,
    city,
    state,
    type,
    fees_ug_inr,
    placement_avg_lpa,
    rating,
    nirf_rank,
  } = currentCollege;

  return (
    <main className="min-h-[calc(100dvh-76px)] bg-[#fcfcfd] px-5 py-6 sm:px-8 sm:py-8">
      <div className="mx-auto max-w-5xl">
        <nav
          aria-label="Breadcrumb"
          className="mb-7 flex items-center gap-2 text-xs text-slate-400 sm:mb-8"
        >
          <Link className="transition-colors hover:text-rose-500" href="/">
            Home
          </Link>
          <span aria-hidden="true">›</span>
          <Link
            className="transition-colors hover:text-rose-500"
            href="/colleges"
          >
            Colleges
          </Link>
          <span aria-hidden="true">›</span>
          <span className="max-w-40 truncate capitalize text-slate-600 sm:max-w-xs">
            {name}
          </span>
        </nav>

        <section className="rounded-3xl border border-slate-200 bg-white px-5 py-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)] sm:px-8 sm:py-7">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
            <div className="min-w-0">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-rose-50 px-3 py-1 text-[11px] font-semibold uppercase text-rose-500">
                  {type}
                </span>
                <span className="flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                  <span aria-hidden="true">★</span> {rating}
                </span>
              </div>
              <h1 className="max-w-3xl break-words text-3xl font-bold leading-tight text-slate-950 uppercase sm:text-4xl lg:text-[2.7rem]">
                {name}
              </h1>
              <p className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                <svg
                  aria-hidden="true"
                  className="size-4 shrink-0 text-rose-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 5.25-7.5 10-7.5 10s-7.5-4.75-7.5-10a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <span className="capitalize">
                  {city ? `${city},` : ""} {state}
                </span>
              </p>
            </div>
            <div className="shrink-0 rounded-2xl border border-rose-100 bg-rose-50/60 px-4 py-3 sm:min-w-28 sm:text-center">
              <p className="text-[10px] font-semibold uppercase text-rose-400">
                Rating
              </p>
              <p className="mt-1 text-2xl font-bold text-rose-500">{rating}</p>
              <p className="text-[10px] text-rose-400">out of 10</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="overview-heading" className="mt-6 sm:mt-7">
          <div className="mb-3 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase text-rose-500">
                At a glance
              </p>
              <h2
                id="overview-heading"
                className="mt-1 text-xl font-bold text-slate-900"
              >
                Overview
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            <StatCard label="UG Fees" value={getINR(fees_ug_inr)} />
            <StatCard
              label="Avg. Placement"
              value={getINR(placement_avg_lpa)}
            />
            <StatCard label="Rating" value={rating} />
            <StatCard label="NIRF Rank" value={valueOrFallback(nirf_rank)} />
          </div>
        </section>

        <section
          aria-labelledby="details-heading"
          className="mt-6 rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)] sm:mt-7 sm:px-7 sm:py-6"
        >
          <h2 id="details-heading" className="text-xl font-bold text-slate-900">
            College details
          </h2>
          <dl className="mt-3 grid gap-x-10 md:grid-cols-2">
            <DetailRow label="College Type" value={type} />
            <DetailRow label="City" value={valueOrFallback(city)} />
            <DetailRow label="State" value={state} />
            <DetailRow label="UG Fees" value={getINR(fees_ug_inr)} />
            <DetailRow
              label="Average Placement"
              value={getINR(placement_avg_lpa)}
            />
            <DetailRow label="Rating" value={rating} />
            <DetailRow label="NIRF Rank" value={nirf_rank} />
          </dl>
        </section>
      </div>
    </main>
  );
}
