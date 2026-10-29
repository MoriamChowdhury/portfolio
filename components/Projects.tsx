import Link from "next/link";
import { projects } from "@/data/portfolio";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle title="Projects"  />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition hover:-translate-y-1 hover:border-brand/60"
            >
              <div className="aspect-video overflow-hidden bg-surface-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={`${p.name} screenshot`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted">{p.short}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.stack.slice(0, 3).map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-surface-2 px-2.5 py-1 text-xs text-brand-2"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/projects/${p.id}`}
                  className="btn-primary mt-5 justify-center text-sm"
                >
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
