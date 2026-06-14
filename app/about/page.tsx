import type { Metadata } from "next"
import { About } from "@/components/about"

export const metadata: Metadata = {
  title: "About — Emmanuel Oyebamiji",
  description:
    "Learn about Emmanuel Oyebamiji, a Unity game developer and ASP.NET engineer.",
}

export default function AboutPage() {
  return (
    <div className="pt-16">
      <About />
    </div>
  )
}
