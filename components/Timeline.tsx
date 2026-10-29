import type { ReactNode } from "react";

export type TimelineItem = {
  title: string;
  subtitle: string;
  period: string;
  body?: ReactNode;
};

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative ml-3 border-l border-line">
      {items.map((it) => (
        <li key={it.title + it.period} className="mb-10 ml-6 last:mb-0">
          <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-bg bg-brand-2" />
          <span className="text-xs font-semibold tracking-widest text-brand-2 uppercase">
            {it.period}
          </span>
          <h3 className="mt-1 text-lg font-semibold">{it.title}</h3>
          <p className="text-muted">{it.subtitle}</p>
          {it.body && <div className="mt-2 text-sm text-muted">{it.body}</div>}
        </li>
      ))}
    </ol>
  );
}
