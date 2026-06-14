import {
  Gamepad2,
  Server,
  Database,
  Boxes,
  Cloud,
  Wrench,
} from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const skillGroups = [
  {
    icon: Gamepad2,
    title: "Game Development",
    skills: ["Unity Engine", "C# Scripting", "Physics & Animation", "Shaders & VFX", "Multiplayer (Netcode)"],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    skills: ["ASP.NET Core", "Web API & MVC", "Entity Framework", "SignalR", "gRPC"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["SQL Server", "PostgreSQL", "Redis", "LINQ", "Dapper"],
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    skills: ["Azure", "Docker", "CI/CD Pipelines", "Git & GitHub", "Vercel"],
  },
  {
    icon: Boxes,
    title: "Architecture",
    skills: ["Clean Architecture", "SOLID", "Microservices", "DDD", "Unit Testing"],
  },
  {
    icon: Wrench,
    title: "Tools & Workflow",
    skills: ["Visual Studio", "Rider", "Blender", "Jira", "Figma"],
  },
]

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-y border-border bg-card/30 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="02 — Skills"
          title="Tools & technologies"
          description="A full-stack toolkit spanning game engines, backend frameworks, and the infrastructure that ships them to players and users."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <group.icon className="size-5" />
                </span>
                <h3 className="text-base font-semibold text-foreground">
                  {group.title}
                </h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
