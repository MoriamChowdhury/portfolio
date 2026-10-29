import { about, profile } from "@/data/portfolio";
import SectionTitle from "./SectionTitle";
import { PinIcon } from "./Icons";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionTitle title="About Me" subtitle="Curious mind.
Builder’s mindset." />

        <div className="rounded-2xl border border-line bg-surface p-6 sm:p-10">
          <div className="space-y-4 leading-relaxed text-muted">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="mb-3 text-sm font-semibold tracking-widest text-brand-2 uppercase">
              Hobbies &amp; Interests
            </h3>
            <ul className="flex flex-wrap gap-2">
              {about.interests.map((i) => (
                <li
                  key={i}
                  className="rounded-full border border-line bg-surface-2 px-4 py-1.5 text-sm"
                >
                  {i}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 flex items-center gap-2 text-sm text-muted">
            <PinIcon className="h-4 w-4 text-brand-2" /> {profile.location}
          </p>
        </div>
      </div>
    </section>
  );
}
