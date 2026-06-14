"use client"

import { useState, type FormEvent } from "react"
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass =
    "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-muted-foreground"

  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="05 — Contact"
          title="Let's build something"
          description="Have a game idea, a backend challenge, or a role in mind? Send a message and I'll get back to you."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: "hello@emmanueloyebamiji.dev" },
              { icon: MapPin, label: "Location", value: "Lagos, Nigeria — Remote" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-5"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="size-5" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-sm font-medium text-foreground">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <CheckCircle2 className="size-12 text-primary" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  Message sent!
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Thanks, {form.name || "there"}. I&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Jane Doe"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="jane@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell me about your project..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <Send className="size-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
