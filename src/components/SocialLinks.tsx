import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/content";

const links = [
  { href: profile.github, label: "GitHub", Icon: Github },
  { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
];

const SocialLinks = () => (
  <div className="flex gap-3">
    {links.map(({ href, label, Icon }) => (
      <a
        key={label}
        href={href}
        target={href.startsWith("mailto") ? undefined : "_blank"}
        rel="noopener noreferrer"
        aria-label={label}
        className="glass grid h-11 w-11 place-items-center rounded-xl text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/40 hover:text-foreground hover:shadow-[0_0_24px_-6px_hsl(var(--cyan)/0.6)]"
      >
        <Icon size={18} />
      </a>
    ))}
  </div>
);

export default SocialLinks;
