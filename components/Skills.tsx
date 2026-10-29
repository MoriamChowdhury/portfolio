import { skills } from "@/data/portfolio";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  return (
    <section id="skills" className="bg-surface/40 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle title="Skills"  />

        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-line bg-surface p-6"
            >
              <h3 className="mb-5 text-lg font-semibold text-brand-2">
                {group.category}
              </h3>
              <ul className="space-y-4">
                {group.items.map((s) => (
                  <li key={s.name}>
                    <div className="mb-1.5 flex justify-between text-sm">
                      <span>{s.name}</span>
                      <span className="text-muted">{s.level}%</span>
                    </div>
                    <div
                      className="h-2 overflow-hidden rounded-full bg-surface-2"
                      role="progressbar"
                      aria-valuenow={s.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={s.name}
                    >
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand to-brand-2"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
