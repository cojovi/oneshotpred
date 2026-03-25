import React from "react"
import Fade from "react-reveal/Fade"

const PricingHeader = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10 font-poppins text-white flex flex-col items-center">
      <Fade bottom>
        <h1 className="text-6xl font-bold m-5 xxs:text-xl sm:text-4xl lg:text-6xl">
          Service packages built for your project stage
        </h1>
        <h2 className="text-base opacity-50 text-center xxs:text-sm sm:text-lg">
          Choose the support level that fits your timeline, team structure, and
          delivery complexity.
        </h2>
      </Fade>
      <Fade bottom cascade>
        <div className="grid grid-cols-2 gap-4 mt-10 xxs:grid-cols-1 sm:grid-cols-2">
          <div className="bg-lightblack p-10 rounded-xl">
            <h2 className="text-2xl text-gradient bg-gradient-to-r from-pink to-purple ">
              Project Setup
            </h2>
            <h1 className="text-4xl mt-2 font-bold">$1,200</h1>
            <h3 className="text-sm mt-2 opacity-50">
              Ideal for owners who need a clear plan before mobilization.
            </h3>
            <ul className="mt-5">
              <li className="text-sm opacity-70 py-2">
                - Scope and stakeholder kickoff workshop
              </li>
              <li className="text-sm opacity-70 py-2">
                - Baseline schedule and milestone map
              </li>
              <li className="text-sm opacity-70 py-2">
                - Procurement and risk readiness checklist
              </li>
            </ul>
            <button className="mt-5 px-5 bg-gradient-to-r from-pink to-purple p-2">
              Request Setup Plan
            </button>
          </div>
          <div className="bg-lightblack p-10 rounded-xl">
            <h2 className="text-2xl text-gradient bg-gradient-to-r from-pink to-purple ">
              Full Project Oversight
            </h2>
            <h1 className="text-4xl mt-2 font-bold">$3,500/mo</h1>
            <h3 className="text-sm mt-2 opacity-50">
              End-to-end coordination for active projects with multiple trades.
            </h3>
            <ul className="mt-5">
              <li className="text-sm opacity-70 py-2">
                - Weekly owner reporting and action log
              </li>
              <li className="text-sm opacity-70 py-2">
                - Trade sequencing and issue resolution
              </li>
              <li className="text-sm opacity-70 py-2">
                - Budget tracking and change-order controls
              </li>
              <li className="text-sm opacity-70 py-2">
                - Quality/safety walkthrough coordination
              </li>
              <li className="text-sm opacity-70 py-2">
                - Closeout and handover planning
              </li>
            </ul>
            <button className="mt-5 px-5 bg-gradient-to-r from-pink to-purple p-2">
              Book Discovery Call
            </button>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default PricingHeader
