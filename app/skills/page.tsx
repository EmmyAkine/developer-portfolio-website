import type { Metadata } from "next"
import { Skills } from "@/components/skills"

export const metadata: Metadata = {
  title: "Skills — Emmanuel Oyebamiji",
  description:
    "Technical skills across Unity game development and ASP.NET Core backend engineering.",
}

export default function SkillsPage() {
  return (
    <div className="pt-16">
      <Skills />
    </div>
  )
}
