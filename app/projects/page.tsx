import type { Metadata } from "next"
import { Projects } from "@/components/projects"

export const metadata: Metadata = {
  title: "Projects — Emmanuel Oyebamiji",
  description:
    "A showcase of games and web platforms built by Emmanuel Oyebamiji.",
}

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      <Projects />
    </div>
  )
}
