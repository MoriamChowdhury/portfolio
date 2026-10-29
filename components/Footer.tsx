import { profile } from "@/data/portfolio";
import { FacebookIcon, GithubIcon, LinkedinIcon, XIcon } from "./Icons";

const socials = [
  { label: "GitHub", href: profile.socials.github, Icon: GithubIcon },
 
  { label: "Facebook", href: profile.socials.facebook, Icon: FacebookIcon },
  
];

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <ul className="flex gap-4">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted transition hover:text-brand-2"
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
