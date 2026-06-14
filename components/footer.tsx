import { Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Emmanuel Oyebamiji. Built with Next.js.
        </p>
        <div className="flex items-center gap-3">
          {[
            { icon: GithubIcon, label: "GitHub", href: "https://github.com" },
            { icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com" },
            { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
