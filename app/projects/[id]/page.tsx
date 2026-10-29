import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/portfolio";
import { GithubIcon } from "@/components/Icons";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  return { title: project ? `${project.name} | Project Details` : "Project not found" };
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-line bg-surface p-6">
      <h2 className="mb-3 text-lg font-semibold text-brand-2">{title}</h2>
      {children}
    </section>
  );
}

export default async function ProjectDetails({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 pt-28 pb-20 sm:px-6">
      <Link href="/#projects" className="text-sm text-muted hover:text-brand-2">
        ← Back to Projects
      </Link>

      <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">
        <span className="gradient-text">{project.name}</span>
      </h1>

      <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-surface-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          className="aspect-video w-full object-cover"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Live Project ↗
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          <GithubIcon /> GitHub (Client)
        </a>
      </div>

      <div className="mt-8 space-y-5">
        <Block title="Description">
          <p className="leading-relaxed text-muted">{project.description}</p>
        </Block>

        <Block title="Main Technology Stack">
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <li
                key={t}
                className="rounded-full border border-line bg-surface-2 px-3 py-1 text-sm"
              >
                {t}
              </li>
            ))}
          </ul>
        </Block>

        <Block title="Challenges Faced">
          <ul className="list-disc space-y-1.5 pl-5 text-muted">
            {project.challenges.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Block>

        <Block title="Potential Improvements & Future Plans">
          <ul className="list-disc space-y-1.5 pl-5 text-muted">
            {project.future.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </Block>
      </div>
    </div>
  );
}
