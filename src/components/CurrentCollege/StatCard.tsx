export function StatCard({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string | number;
  accent?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-[0_8px_24px_rgba(15,23,42,0.04)] sm:px-5">
      <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-slate-400">
        {label}
      </p>
      <p
        className={`mt-2 truncate text-lg font-semibold tracking-[-0.02em] sm:text-xl ${
          accent ? "text-rose-500" : "text-slate-900"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
