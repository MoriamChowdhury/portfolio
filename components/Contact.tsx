import { profile } from "@/data/portfolio";
import SectionTitle from "./SectionTitle";
import { MailIcon, GithubIcon } from "./Icons";

export default function Contact() {
  const items = [
    {
      label: "Email",
      value: "moriam.tech@gmail.com",
      href: "moriam.tech@gmail.com",
      Icon: MailIcon,
    },
    {
      label: "GitHub",
      value:"https://github.com/MoriamChowdhury",
      href: "https://github.com/MoriamChowdhury",
      Icon: GithubIcon,
    },
  ];

  return (
    <section id="contact" className="bg-surface/40 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionTitle title="Contact Me" />

        <div className="grid gap-4 sm:grid-cols-2">
          {items.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={label === "GitHub" ? "_blank" : undefined}
              rel={
                label === "GitHub"
                  ? "noopener noreferrer"
                  : undefined
              }
              className="flex flex-col items-center rounded-2xl border border-line bg-surface p-6 text-center transition hover:-translate-y-1 hover:border-brand-2"
            >
              <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-surface-2 text-brand-2">
                <Icon className="h-6 w-6" />
              </span>

              <span className="text-sm text-muted">{label}</span>

              <span className="mt-1 break-all text-sm font-medium">
                {value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}