import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/business";
import { PageHeader, QuoteCta } from "@/components/Blocks";
import {
  AlertIcon,
  PhoneIcon,
  ClockIcon,
  CheckIcon,
  ShieldIcon,
  ArrowRightIcon,
  DroneIcon,
} from "@/components/Icons";
import { breadcrumbSchema, jsonLdProps } from "@/lib/schema";

export const metadata: Metadata = {
  title: "24/7 Emergency Roof Repairs & Storm Make-Safe Brisbane | Ironbark Roofing",
  description:
    "Active roof leak or severe storm damage? Ironbark Roofing provides 24/7 emergency make-safe within 4 hours across the Brisbane southside. Call our on-call foreman directly on 0447 882 310.",
  alternates: { canonical: "/emergency" },
};

export default function EmergencyPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Emergency", path: "/emergency" },
  ];

  return (
    <>
      <script {...jsonLdProps(breadcrumbSchema(breadcrumbs))} />

      <PageHeader
        eyebrow="24/7 Storm &amp; Leak Response"
        title="Emergency Roof Repairs &amp; 4-Hour Make-Safe in Brisbane"
        intro="When severe weather breaches your roof, speed prevents structural and internal ceiling collapse. Our emergency number rings the on-call foreman directly — 24 hours a day, 7 days a week."
        breadcrumbs={breadcrumbs}
      >
        <div className="mt-8">
          <a
            href={business.phone.emergency.href}
            className="btn btn-urgent text-lg font-bold px-8 py-4 shadow-lift"
          >
            <AlertIcon className="h-6 w-6" />
            Call the 24/7 Storm Line: {business.phone.emergency.display}
          </a>
        </div>
      </PageHeader>

      {/* Main Emergency Details */}
      <section className="section bg-cream">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              {/* Emergency Protocol */}
              <div className="rounded-xl border border-ink-200 bg-white p-6 sm:p-8 shadow-plate">
                <h2 className="h-section text-ink-900">What Happens When You Call</h2>
                <p className="mt-3 text-lg leading-relaxed text-ink-700">
                  During a storm or sudden leak, the goal is immediate damage limitation. Here is our make-safe process:
                </p>

                <ol className="mt-6 space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Direct talk with the on-call foreman",
                      body: "You will speak directly to our on-call tradesperson (usually Marco), not an offshore call centre. We will confirm your suburb, assess the severity, and confirm our arrival window.",
                    },
                    {
                      step: "2",
                      title: "Rapid make-safe within 4 hours",
                      body: "Anywhere in our primary Brisbane southside area, we aim to be on site within 4 hours to install heavy-duty tarps, sandbag vulnerable planes, and clear blocked downpipes.",
                    },
                    {
                      step: "3",
                      title: "On-site photographic report for insurance",
                      body: "While making safe, we photograph damaged tiles, buckled sheets, and internal water ingress to give your insurer immediate, unarguable proof of storm causation.",
                    },
                    {
                      step: "4",
                      title: "Permanent repair scope & insurer liaison",
                      body: "Once the weather clears, we prepare the comprehensive repair quote, meet with the insurance assessor if required, and complete the permanent repair to our 10 or 25-year warranty standard.",
                    },
                  ].map((s) => (
                    <li key={s.step} className="flex gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-urgent-600 font-display text-lg font-bold text-white">
                        {s.step}
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-bold text-ink-900">{s.title}</h3>
                        <p className="mt-1 text-sm text-ink-600 leading-relaxed">{s.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Safety Guide */}
              <div className="mt-12 rounded-xl border border-ink-200 bg-white p-6 sm:p-8 shadow-plate">
                <h2 className="h-section text-ink-900">What to Do Before Our Crew Arrives</h2>
                <p className="mt-2 text-sm text-ink-600">
                  Please follow these critical safety steps while waiting for our make-safe team:
                </p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-lg border-l-4 border-urgent-600 bg-urgent-600/5 p-4">
                    <h4 className="font-bold text-urgent-700">1. DO NOT CLIMB ONTO THE ROOF</h4>
                    <p className="mt-1 text-xs text-ink-700 leading-relaxed">
                      Wet tile and Colorbond are extremely slippery. High winds and lightning make roof access deadly. Wait for our trained, fall-arrest equipped crew.
                    </p>
                  </div>

                  <div className="rounded-lg border-l-4 border-amber-500 bg-amber-500/5 p-4">
                    <h4 className="font-bold text-ink-900">2. Isolate Electrical Power If Water is Near Wiring</h4>
                    <p className="mt-1 text-xs text-ink-700 leading-relaxed">
                      If water is dripping through ceiling lights, fans, or running down walls near powerpoints, immediately turn off the main switch at your meter box.
                    </p>
                  </div>

                  <div className="rounded-lg border-l-4 border-ink-400 bg-ink-50 p-4">
                    <h4 className="font-bold text-ink-900">3. Relieve Bulging Plasterboard Ceilings</h4>
                    <p className="mt-1 text-xs text-ink-700 leading-relaxed">
                      If a plasterboard ceiling is visibly sagging with trapped water, carefully pierce the centre with a screwdriver or broom handle over a large bucket. Draining the pooled water prevents the entire ceiling sheet from collapsing under weight.
                    </p>
                  </div>

                  <div className="rounded-lg border-l-4 border-ink-400 bg-ink-50 p-4">
                    <h4 className="font-bold text-ink-900">4. Document and Protect Valuables</h4>
                    <p className="mt-1 text-xs text-ink-700 leading-relaxed">
                      Move electronics, rugs, and furniture away from the leak. Take photos and videos with your smartphone showing water coming through the ceiling for insurance records.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Emergency Box */}
            <div>
              <div className="sticky top-28 space-y-6">
                <div className="rounded-xl border-2 border-urgent-600 bg-urgent-700 p-6 text-white shadow-lift sm:p-8">
                  <span className="font-display text-xs font-bold uppercase tracking-widest text-urgent-200">
                    Direct Line to On-Call Foreman
                  </span>
                  <a
                    href={business.phone.emergency.href}
                    className="mt-3 block font-display text-3xl font-bold leading-none text-white underline decoration-white/50 decoration-4 underline-offset-8 hover:decoration-white sm:text-4xl"
                  >
                    {business.phone.emergency.display}
                  </a>
                  <p className="mt-4 text-xs leading-relaxed text-white/85">
                    Answered 24 hours a day, 365 days a year including Christmas and public holidays.
                  </p>

                  <ul className="mt-6 space-y-2.5 border-t border-white/20 pt-5 text-xs">
                    {[
                      "4-hour make-safe guarantee (primary area)",
                      "Full heavy tarping and sandbagging",
                      "Insurance-compliant condition report",
                      "Employed, licensed tradespeople",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 shrink-0 text-white" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 border-t border-white/20 pt-4 text-xs text-white/80">
                    <p>
                      <strong>Non-urgent enquiries:</strong> Please call our main office on{" "}
                      <a href={business.phone.office.href} className="underline font-bold">
                        {business.phone.office.display}
                      </a>{" "}
                      to keep this emergency channel open for active leaks.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-ink-200 bg-white p-6 shadow-plate">
                  <h3 className="font-display text-lg font-bold text-ink-900">
                    Dealing with Insurance Claims
                  </h3>
                  <p className="mt-2 text-xs text-ink-600 leading-relaxed">
                    We know what insurers require: clear drone photography, dent-density measurements, tile crack analysis, and itemised scopes. We deal with insurers and loss adjusters every week during storm season.
                  </p>
                  <Link
                    href="/services/storm-hail-damage"
                    className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-ember-600 hover:text-ember-700"
                  >
                    Read our full Storm &amp; Hail Damage Service Guide →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteCta
        heading="Need non-urgent storm repairs or a post-weather check?"
        intro="If the weather has passed and you want your roof inspected for hail bruises, cracked pointing, or slipped tiles, book our free drone inspection."
      />
    </>
  );
}
