/**
 * Design SOP §4 — Section 10: Secondary CTA / emergency band.
 * "Full-width band, especially for storm/leak/urgent trades."
 *
 * Onboarding §2 confirmed an emergency pathway is required and gave a dedicated
 * number that rings the on-call foreman rather than the office. Conversion
 * checklist item 10.
 */

import Link from "next/link";
import { business } from "@/lib/business";
import { AlertIcon, ArrowRightIcon, CheckIcon, ClockIcon, PhoneIcon } from "./Icons";

export function EmergencyBand() {
  return (
    <section
      aria-labelledby="emergency-heading"
      className="relative overflow-hidden bg-urgent-700 text-white"
    >
      <div className="hatch absolute inset-0" aria-hidden="true" />

      <div className="shell relative py-14 md:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="eyebrow flex items-center gap-2 text-white/80">
              <AlertIcon className="h-4 w-4" />
              Emergency &amp; storm response
            </p>

            <h2 id="emergency-heading" className="h-section mt-3 text-white">
              Water coming in? Don&rsquo;t wait for a quote.
            </h2>

            <p className="lede mt-4 max-w-xl text-white/85">
              In a Brisbane storm the damage that costs the most is the water that gets in over the
              next three days — not the hail itself. Ring the storm line and you get the on-call
              foreman, not a voicemail. We will have a crew tarping and making safe within 4 hours
              anywhere in our primary area, any hour.
            </p>

            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {[
                "Answered 24/7, including public holidays",
                "Make-safe within 4 hours, primary area",
                "Insurance-ready photo report on the night",
                "We deal with your insurer's assessor",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-[0.9375rem]">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-white/70" />
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 flex items-start gap-2 text-[0.8125rem] text-white/70">
              <ClockIcon className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                During a major hail event that 4-hour window stretches, and we will tell you
                honestly on the phone where you sit in the queue rather than promise a time we
                cannot hold.
              </span>
            </p>
          </div>

          <div className="rounded-lg border border-white/25 bg-urgent-700/40 p-6 backdrop-blur md:p-8">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
              24/7 storm line
            </p>
            <a
              href={business.phone.emergency.href}
              className="mt-2 block font-display text-[2.5rem] font-bold leading-none text-white underline decoration-white/40 decoration-4 underline-offset-8 hover:decoration-white md:text-[2.875rem]"
            >
              {business.phone.emergency.display}
            </a>
            <p className="mt-4 text-[0.9375rem] text-white/80">
              Rings the on-call foreman directly. If it is not urgent, please use the office line so
              we keep this one clear.
            </p>

            <div className="mt-6 flex flex-col gap-2.5">
              <a
                href={business.phone.emergency.href}
                className="btn bg-white text-urgent-700 hover:bg-white/90"
              >
                <PhoneIcon className="h-5 w-5" />
                Call the storm line now
              </a>
              <Link href="/emergency" className="btn btn-ghost-light">
                What to do before we arrive
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>

            <p className="mt-5 border-t border-white/20 pt-4 text-[0.8125rem] text-white/70">
              Not urgent? Office{" "}
              <a
                href={business.phone.office.href}
                className="font-semibold text-white underline underline-offset-2"
              >
                {business.phone.office.display}
              </a>{" "}
              · Mon–Fri 6:30am–5pm
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
