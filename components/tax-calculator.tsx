"use client"

import { useMemo, useState } from "react"
import { Calculator, Info } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

// Nigerian Personal Income Tax (PIT) progressive bands — annual (NGN)
const BANDS = [
  { limit: 300_000, rate: 0.07 },
  { limit: 300_000, rate: 0.11 },
  { limit: 500_000, rate: 0.15 },
  { limit: 500_000, rate: 0.19 },
  { limit: 1_600_000, rate: 0.21 },
  { limit: Infinity, rate: 0.24 },
]

function formatNaira(n: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(Math.max(0, Math.round(n)))
}

export function TaxCalculator() {
  const [income, setIncome] = useState("3500000")
  const [pension, setPension] = useState("0")

  const result = useMemo(() => {
    const gross = Number(income) || 0
    const pensionDeduction = Number(pension) || 0

    // Consolidated Relief Allowance: higher of 200k or 1% of gross, plus 20% of gross
    const cra = Math.max(200_000, gross * 0.01) + gross * 0.2
    const taxable = Math.max(0, gross - cra - pensionDeduction)

    let remaining = taxable
    let tax = 0
    const breakdown: { band: string; rate: number; amount: number; tax: number }[] = []
    let lower = 0

    for (const { limit, rate } of BANDS) {
      if (remaining <= 0) break
      const slice = Math.min(remaining, limit)
      const bandTax = slice * rate
      tax += bandTax
      const upper = limit === Infinity ? Infinity : lower + limit
      breakdown.push({
        band:
          upper === Infinity
            ? `Above ${formatNaira(lower)}`
            : `${formatNaira(lower)} – ${formatNaira(upper)}`,
        rate,
        amount: slice,
        tax: bandTax,
      })
      remaining -= slice
      lower += limit
    }

    const net = gross - tax - pensionDeduction
    const effective = gross > 0 ? (tax / gross) * 100 : 0

    return { gross, cra, taxable, tax, net, effective, breakdown }
  }, [income, pension])

  return (
    <section
      id="tax"
      className="scroll-mt-20 border-t border-border bg-card/30 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="04 — Tool"
          title="Income Tax Calculator"
          description="A small interactive tool I built to estimate Nigerian Personal Income Tax (PAYE) using progressive bands and the Consolidated Relief Allowance."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          {/* Inputs */}
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Calculator className="size-5" />
              </span>
              <h3 className="text-base font-semibold">Your details</h3>
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="income"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Annual gross income (₦)
                </label>
                <input
                  id="income"
                  type="number"
                  inputMode="numeric"
                  min={0}
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="pension"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Annual pension / deductions (₦)
                </label>
                <input
                  id="pension"
                  type="number"
                  inputMode="numeric"
                  min={0}
                  value={pension}
                  onChange={(e) => setPension(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="flex items-start gap-2 rounded-md border border-border bg-secondary/40 p-3 text-xs leading-relaxed text-muted-foreground">
                <Info className="mt-0.5 size-4 shrink-0 text-primary" />
                <p>
                  Estimates only. The Consolidated Relief Allowance is the
                  higher of ₦200,000 or 1% of gross income, plus 20% of gross
                  income.
                </p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-border bg-secondary/30 p-4">
                <p className="text-xs text-muted-foreground">Total tax / year</p>
                <p className="mt-1 text-xl font-semibold text-primary">
                  {formatNaira(result.tax)}
                </p>
              </div>
              <div className="rounded-lg border border-border bg-secondary/30 p-4">
                <p className="text-xs text-muted-foreground">Net income / year</p>
                <p className="mt-1 text-xl font-semibold text-foreground">
                  {formatNaira(result.net)}
                </p>
              </div>
              <div className="rounded-lg border border-border bg-secondary/30 p-4">
                <p className="text-xs text-muted-foreground">Effective rate</p>
                <p className="mt-1 text-xl font-semibold text-foreground">
                  {result.effective.toFixed(1)}%
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground">
              <p>
                Relief (CRA):{" "}
                <span className="text-foreground">{formatNaira(result.cra)}</span>
              </p>
              <p>
                Taxable income:{" "}
                <span className="text-foreground">
                  {formatNaira(result.taxable)}
                </span>
              </p>
              <p>
                Net / month:{" "}
                <span className="text-foreground">
                  {formatNaira(result.net / 12)}
                </span>
              </p>
            </div>

            <div className="mt-6">
              <p className="mb-2 text-sm font-medium text-foreground">
                Tax band breakdown
              </p>
              <div className="overflow-hidden rounded-lg border border-border">
                <table className="w-full text-left text-sm">
                  <thead className="bg-secondary/50 text-xs text-muted-foreground">
                    <tr>
                      <th className="px-3 py-2 font-medium">Band</th>
                      <th className="px-3 py-2 font-medium">Rate</th>
                      <th className="px-3 py-2 text-right font-medium">Tax</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.breakdown.length === 0 ? (
                      <tr>
                        <td
                          colSpan={3}
                          className="px-3 py-4 text-center text-muted-foreground"
                        >
                          No tax due on this income.
                        </td>
                      </tr>
                    ) : (
                      result.breakdown.map((row) => (
                        <tr
                          key={row.band}
                          className="border-t border-border text-muted-foreground"
                        >
                          <td className="px-3 py-2 font-mono text-xs">
                            {row.band}
                          </td>
                          <td className="px-3 py-2">
                            {(row.rate * 100).toFixed(0)}%
                          </td>
                          <td className="px-3 py-2 text-right text-foreground">
                            {formatNaira(row.tax)}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
