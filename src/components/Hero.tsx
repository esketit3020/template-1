/**
 * Design SOP §4 — Section 2: Hero.
 * "Headline answering 'what's in it for me', service area, primary CTA
 *  ('Get a Free Quote'), star rating/review count badge, real photo or short video."
 *
 * Design SOP §2 — the visitor must see what, where and how to contact within
 * seconds. So: service in the H1, suburbs named, phone and quote CTA both visible,
 * rating above the fold (conversion checklist items 2 and 3).
 */

import Link from "next/link";
import { business, yearsTrading } from "@/lib/business";
import { HeroPlate } from "./RoofPlate";
import { AlertIcon, ArrowRightIcon, CheckIcon, PhoneIcon, StarIcon } from "./Icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-900 text-white">
      {/* Artwork — see RoofPlate.tsx header on why this is an illustration. */}
      <div className="absolute inset-0" aria-hidden="true">
        <HeroPlate className="h-full w-full object-cover" />
        {/* Scrim: keeps AA contrast on the copy over the artwork. */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/92 to-ink-950/35 lg:to-transparent" />
      </div>

      <div className="shell relative">
        <div className="max-w-2xl py-14 md:py-20 lg:py-28">
          {/* Where — stated first, because half of local trade searches are "near me". */}
          <p className="eyebrow text-ember-300">
            Brisbane Southside &amp; Inner East · Est. {business.foundedYear}
          </p>

          {/* What's in it for me */}
          <h1 className="h-display mt-4 text-white">
            Your roof fixed properly,
            <span className="block text-ember-400">and warranted for 25 years.</span>
          </h1>

          <p className="lede mt-5 max-w-xl text-ink-200">
            Roof restorations, repairs, re-roofs and 24/7 storm damage across Coorparoo, Camp Hill,
            Carindale, Bulimba and the wider southside. Free inspection, a photo report you keep,
            and a fixed price in writing within 48 hours.
          </p>

          {/* Primary + secondary CTAs, visible without scrolling (checklist item 2) */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/contact" className="btn btn-primary text-lg">
              Get a Free Quote
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
            <a href={business.phone.office.href} className="btn btn-ghost-light text-lg">
              <PhoneIcon className="h-5 w-5" />
              {business.phone.office.display}
            </a>
          </div>

          {/* Softer CTA for early-stage browsers (design SOP §2, three-tier CTAs) */}
          <p className="mt-4 text-[0.9375rem] text-ink-300">
            Not ready for a quote?{" "}
            <Link
              href="#how-we-work"
              className="font-semibold text-white underline decoration-ember-400 decoration-2 underline-offset-4 hover:text-ember-300"
            >
              See how we work
            </Link>{" "}
            or{" "}
            <Link
              href="/projects"
              className="font-semibold text-white underline decoration-ember-400 decoration-2 underline-offset-4 hover:text-ember-300"
            >
              browse recent jobs
            </Link>
            .
          </p>

          {/* ── Rating badge above the fold (checklist item 3) ── */}
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={business.reviews.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-white/15 bg-white/10 px-4 py-3 backdrop-blur transition-colors hover:border-white/35"
            >
              <span className="flex flex-col items-center leading-none">
                <span className="font-display text-3xl font-bold">{business.reviews.rating}</span>
                <span className="flex gap-px pt-1" aria-hidden="true">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarIcon key={i} className="h-3 w-3 text-amber-400" />
                  ))}
                </span>
              </span>
              <span className="text-sm leading-snug">
                <strong className="block font-semibold">
                  {business.reviews.count} Google reviews
                </strong>
                <span className="text-ink-300">Brisbane southside homeowners</span>
              </span>
            </a>

            <ul className="space-y-2 text-sm">
              {[
                `${business.licence.body} Licence ${business.licence.number}`,
                `${yearsTrading()} years, family-run, employed crews`,
                `${business.insurance.publicLiability} public liability`,
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 shrink-0 text-ember-400" />
                  <span className="text-ink-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Urgent pathway. Visually distinct from the ember primary CTA so the two
             intents never compete (design doc §3.2). ── */}
      <div className="relative border-t border-urgent-700/60 bg-urgent-700/25 backdrop-blur">
        <div className="shell flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-3">
          <p className="flex items-center gap-2.5 text-[0.9375rem]">
            <AlertIcon className="h-5 w-5 shrink-0 text-urgent-500" />
            <span>
              <strong className="font-semibold text-white">Roof leaking right now?</strong>{" "}
              <span className="text-ink-200">
                We make safe within 4 hours, any hour, right across the southside.
              </span>
            </span>
          </p>
          <a
            href={business.phone.emergency.href}
            className="font-display text-lg font-bold text-white underline decoration-urgent-500 decoration-2 underline-offset-4 hover:text-urgent-500"
          >
            24/7 storm line {business.phone.emergency.display}
          </a>
        </div>
      </div>
    </section>
  );
}
