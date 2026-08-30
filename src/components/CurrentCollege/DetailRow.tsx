export function DetailRow({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="flex items-start justify-between gap-6 border-b border-slate-100 py-3.5 last:border-0 sm:py-4">
      <dt className="text-sm text-slate-500">{label}</dt>
      <dd className="text-right text-sm font-medium capitalize text-slate-900">
        {value}
      </dd>
    </div>
  );
}
