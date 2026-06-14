import Link from "next/link"
import { ArrowRight, Mail, Gamepad2, Server } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Subtle grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 size-[480px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            Available for freelance &amp; full-time roles
          </span>

          <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Emmanuel Oyebamiji
            <span className="mt-2 block text-2xl font-medium text-muted-foreground sm:text-3xl">
              Unity Game Developer &amp;{" "}
              <span className="text-primary">ASP.NET</span> Engineer
            </span>
          </h1>

          <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            I craft immersive, performant games with Unity and engineer
            scalable, secure backends with ASP.NET Core. From gameplay systems
            to production APIs, I build experiences that feel great and run
            reliably.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View Projects
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/40 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Mail className="size-4" />
              Get in Touch
            </Link>
          </div>

          <div className="flex items-center gap-3 pt-2">
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
                className="inline-flex size-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Stat / focus cards */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Years Building", value: "5+" },
            { label: "Projects Shipped", value: "30+" },
            { label: "Game Engine", value: "Unity / C#", icon: Gamepad2 },
            { label: "Backend", value: "ASP.NET Core", icon: Server },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-card p-5"
            >
              <div className="flex items-center justify-between">
                <p className="text-2xl font-semibold tracking-tight text-foreground">
                  {stat.value}
                </p>
                {stat.icon && (
                  <stat.icon className="size-5 text-primary" />
                )}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
