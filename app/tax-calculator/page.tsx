import type { Metadata } from "next"
import { TaxCalculator } from "@/components/tax-calculator"

export const metadata: Metadata = {
  title: "Tax Calculator — Emmanuel Oyebamiji",
  description:
    "An interactive Nigerian PAYE income tax calculator built with Next.js.",
}

export default function TaxCalculatorPage() {
  return (
    <div className="pt-16">
      <TaxCalculator />
    </div>
  )
}
