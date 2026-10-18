import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase, Download, FileText, FolderGit2, Github, Linkedin, Mail, Sparkles, Wrench } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { profile } from "@/data/content";

const jumpIcons = { impact: Sparkles, experience: Briefcase, projects: FolderGit2, skills: Wrench, contact: Mail };

type CommandMenuProps = { open: boolean; onOpenChange: (open: boolean) => void };

/** ⌘K / Ctrl+K palette for jumping around the site and reaching links. */
const CommandMenu = ({ open, onOpenChange }: CommandMenuProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  const run = (fn: () => void) => {
    onOpenChange(false);
    fn();
  };

  const jump = (id: string) =>
    run(() => {
      navigate("/");
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }));
    });

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Jump to a section or link…" />
      <CommandList>
        <CommandEmpty>No results.</CommandEmpty>
        <CommandGroup heading="Sections">
          {(Object.keys(jumpIcons) as (keyof typeof jumpIcons)[]).map((id) => {
            const Icon = jumpIcons[id];
            return (
              <CommandItem key={id} onSelect={() => jump(id)} className="capitalize">
                <Icon className="mr-2" /> {id}
              </CommandItem>
            );
          })}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Resume">
          <CommandItem onSelect={() => run(() => navigate("/resume"))}>
            <FileText className="mr-2" /> View resume
          </CommandItem>
          <CommandItem onSelect={() => run(() => window.open(profile.resumeUrl, "_blank"))}>
            <Download className="mr-2" /> Download PDF
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Elsewhere">
          <CommandItem onSelect={() => run(() => window.open(profile.github, "_blank"))}>
            <Github className="mr-2" /> GitHub
          </CommandItem>
          <CommandItem onSelect={() => run(() => window.open(profile.linkedin, "_blank"))}>
            <Linkedin className="mr-2" /> LinkedIn
          </CommandItem>
          <CommandItem onSelect={() => run(() => (window.location.href = `mailto:${profile.email}`))}>
            <Mail className="mr-2" /> Email me
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default CommandMenu;
