import React from "react"
import Fade from "react-reveal/Fade"

const PricingFAQ = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10 text-center text-white">
      <Fade bottom>
        <h1 className="text-5xl font-poppins font-bold xxs:text-xl sm:text-3xl lg:text-5xl">
          Frequently asked questions
        </h1>
      </Fade>
      <Fade bottom cascade>
        <div className="grid grid-cols-2 gap-8  text-left mt-10 xxs:grid-cols-1 sm:grid-cols-2">
          <div className="xxs:p-2 sm:p-0">
            <h1 className="font-bold text-2xl font-poppins xxs:text-lg sm:text-2xl">
              Do you work with residential or commercial projects?
            </h1>
            <p className="mt-2 text-sm opacity-50">
              We support both. Most clients are commercial renovation and
              light-industrial teams, but we also provide project controls for
              high-scope residential builds.
            </p>
          </div>
          <div className="xxs:p-2 sm:p-0">
            <h1 className="font-bold text-2xl font-poppins xxs:text-lg sm:text-2xl">
              Can you join a project that is already underway?
            </h1>
            <p className="mt-2 text-sm opacity-50">
              Yes. We can assess current status, rebuild practical schedules, and
              establish reporting cadence without disrupting active field work.
            </p>
          </div>
          <div className="xxs:p-2 sm:p-0">
            <h1 className="font-bold text-2xl font-poppins xxs:text-lg sm:text-2xl">
              How often will we receive updates?
            </h1>
            <p className="mt-2 text-sm opacity-50">
              Weekly status reports are standard. High-risk phases can include
              additional check-ins and daily coordination summaries.
            </p>
          </div>
          <div className="xxs:p-2 sm:p-0">
            <h1 className="font-bold text-2xl font-poppins xxs:text-lg sm:text-2xl">
              Do you replace our general contractor?
            </h1>
            <p className="mt-2 text-sm opacity-50">
              No. We collaborate with your GC and trade teams to improve decision
              speed, accountability, and owner visibility.
            </p>
          </div>
          <div className="xxs:p-2 sm:p-0">
            <h1 className="font-bold text-2xl font-poppins xxs:text-lg sm:text-2xl">
              What regions do you serve?
            </h1>
            <p className="mt-2 text-sm opacity-50">
              We primarily serve Texas-based projects and remote-support clients
              in neighboring states.
            </p>
          </div>
          <div className="xxs:p-2 sm:p-0">
            <h1 className="font-bold text-2xl font-poppins xxs:text-lg sm:text-2xl">
              How do we get started?
            </h1>
            <p className="mt-2 text-sm opacity-50">
              Share your scope, timeline, and biggest constraints through our
              contact form. We will schedule a discovery call and recommend the
              right package.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default PricingFAQ
