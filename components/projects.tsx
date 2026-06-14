import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { GithubIcon } from "@/components/brand-icons"
import { SectionHeading } from "@/components/section-heading"

const projects = [
  {
    title: "Skyfall Odyssey",
    category: "Unity • 3D Platformer",
    description:
      "A physics-driven 3D platformer with custom character controllers, dynamic camera systems, and a level streaming pipeline for seamless worlds.",
    image: "/projects/unity-platformer.png",
    tags: ["Unity", "C#", "Shader Graph", "Cinemachine"],
    featured: true,
  },
  {
    title: "Nexus Admin Suite",
    category: "ASP.NET Core • Web Platform",
    description:
      "An enterprise admin dashboard built on ASP.NET Core with role-based auth, real-time SignalR updates, and rich analytics.",
    image: "/projects/aspnet-dashboard.png",
    tags: ["ASP.NET Core", "SignalR", "SQL Server", "EF Core"],
    featured: true,
  },
  {
    title: "Prism Puzzles",
    category: "Unity • Mobile Game",
    description:
      "A polished casual puzzle game for iOS and Android with 200+ handcrafted levels and an in-game economy.",
    image: "/projects/mobile-puzzle.png",
    tags: ["Unity", "C#", "Mobile", "In-App Purchase"],
  },
  {
    title: "Forge API Platform",
    category: "ASP.NET Core • Backend",
    description:
      "A modular REST & gRPC API platform following clean architecture, with containerized deployments and full test coverage.",
    image: "/projects/api-platform.png",
    tags: ["ASP.NET Core", "gRPC", "Docker", "PostgreSQL"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="03 — Projects"
          title="Selected work"
          description="A mix of shipped games and production backend systems. Each project reflects a focus on craft, performance, and maintainability."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {project.featured && (
                  <span className="absolute left-3 top-3 rounded-md bg-primary px-2 py-1 font-mono text-xs font-medium text-primary-foreground">
                    Featured
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-xs text-primary">
                  {project.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-border bg-secondary/40 px-2 py-0.5 font-mono text-xs text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <GithubIcon className="size-4" /> Code
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ExternalLink className="size-4" /> Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
