import { CheckCircle2 } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const highlights = [
  "Designing core gameplay loops, physics & AI in Unity",
  "Building RESTful & gRPC APIs with ASP.NET Core",
  "Optimizing performance for mobile and console",
  "Clean architecture, SOLID principles & unit testing",
]

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="01 — About" title="Who I am" />

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I&apos;m Emmanuel, a developer who lives at the intersection of
              interactive entertainment and solid backend engineering. By day I
              architect maintainable services with{" "}
              <span className="text-foreground">ASP.NET Core</span>; by night I
              prototype game mechanics and ship polished experiences in{" "}
              <span className="text-foreground">Unity</span>.
            </p>
            <p>
              My background in C# spans both worlds, which lets me think about
              gameplay systems and server infrastructure with the same rigor —
              readable code, predictable performance, and a focus on the end
              user. I care deeply about craft, whether that&apos;s the feel of a
              jump or the latency of an endpoint.
            </p>
            <p>
              When I&apos;m not coding, I&apos;m studying game design, exploring
              new .NET releases, and contributing to small open-source tools.
            </p>
          </div>

          <ul className="space-y-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 text-sm text-foreground"
              >
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
