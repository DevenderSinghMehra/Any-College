"use client";
import { useSelector } from "react-redux";
import type { RootState } from "@/src/store/store";
import { StatCard } from "@/src/components/CurrentCollege/StatCard";
import { DetailRow } from "@/src/components/CurrentCollege/DetailRow";
import { BreadCrumb } from "@/src/components/BreadCrumb";
import { SpriteIcon } from "@/src/components/SpriteIcon";
//this component need alot of component splitting.
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
    name: collegeName,
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
        <BreadCrumb linksArr={["Colleges", collegeName]} />

        <section className="rounded-3xl border border-slate-200 bg-white px-5 py-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)] sm:px-8 sm:py-7">
          <div className="flex max-sm:flex-col justify-between sm:items-center gap-6 ">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-rose-50 px-3 py-1 text-[11px] font-semibold uppercase text-rose-500">
                  {type}
                </span>
                <span className="flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                  <span aria-hidden="true">★</span> {rating}
                </span>
              </div>
              <h1 className="max-w-3xl wrap-break-word text-3xl font-bold leading-tight text-slate-950 uppercase sm:text-4xl lg:text-[2.7rem]">
                {collegeName}
              </h1>
              <p className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                <SpriteIcon
                  aria-hidden="true"
                  className="size-4 shrink-0 fill-rose-400"
                  iconName="location-pointer"
                />
                <span className="capitalize">
                  {city ? `${city},` : ""} {state}
                </span>
              </p>
            </div>
            <div className="shrink-0 rounded-2xl border border-rose-100 bg-rose-50/60 px-6 py-4 max-sm:w-full text-center text-rose-400 text-[10px] sm:px-8 sm-py-6">
              <p className="font-semibold uppercase ">Rating</p>
              <p className="mt-1 text-2xl font-bold text-rose-500">{rating}</p>
              <p>out of 10</p>
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
              value={`${placement_avg_lpa} LPA`}
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
