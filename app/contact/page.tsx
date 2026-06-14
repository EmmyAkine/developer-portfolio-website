import type { Metadata } from "next"
import { Contact } from "@/components/contact"

export const metadata: Metadata = {
  title: "Contact — Emmanuel Oyebamiji",
  description: "Get in touch with Emmanuel Oyebamiji for freelance or full-time work.",
}

export default function ContactPage() {
  return (
    <div className="pt-16">
      <Contact />
    </div>
  )
}
