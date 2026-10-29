import { education } from "@/data/portfolio";
import SectionTitle from "./SectionTitle";
import Timeline from "./Timeline";

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionTitle title="Education"  />
        <Timeline
          items={education.map((e) => ({
            title: e.degree,
            subtitle: e.institution,
            period: e.period,
            body: e.detail,
          }))}
        />
      </div>
    </section>
  );
}
