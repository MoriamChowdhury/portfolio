import { profile } from "@/data/portfolio";
import {
  DownloadIcon,
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  XIcon,
} from "./Icons";

const socials = [
  { label: "GitHub", href: profile.socials.github, Icon: GithubIcon },
 
  

];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
        <div className="order-2 text-center md:order-1 md:text-left">
          <p className="mb-3 text-sm font-medium tracking-widest text-brand-2 uppercase">
            Hello, I&apos;m
          </p>
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            <span className="gradient-text">{profile.name}</span>
          </h1>
          <h2 className="mt-3 text-xl font-semibold text-ink sm:text-2xl">
            {profile.designation}
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-muted md:mx-0">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <a href={profile.resume} download className="btn-primary">
              <DownloadIcon /> Download Resume
            </a>
            <a href="/#contact" className="btn-outline">
              Contact Me
            </a>
          </div>

          <ul className="mt-8 flex justify-center gap-3 md:justify-start">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-muted transition hover:border-brand-2 hover:text-brand-2"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 flex justify-center md:order-2">
          <div className="rounded-full bg-gradient-to-br from-brand to-brand-2 p-1.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profile.photo}
              alt={`${profile.name} - ${profile.designation}`}
              className="h-56 w-56 rounded-full bg-surface object-cover sm:h-72 sm:w-72 lg:h-80 lg:w-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
