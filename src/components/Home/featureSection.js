import React from "react"
import Fade from "react-reveal/Fade"

const FeatureSection = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <Fade bottom cascade>
        <div className="w-full flex flex-row justify-between mt-10 xxs:flex-col xs:flex-col sm:flex-row">
          <div className="rounded-xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r from-lightblack to-lightblack hover:from-purple hover:to-pink transition duration-500 ease-in-out">
            <h1 className="text-white text-5xl">125+</h1>
            <h3 className="text-white">Projects Delivered</h3>
          </div>
          <div className="rounded-xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r from-lightblack to-lightblack hover:from-purple hover:to-pink transition duration-500 ease-in-out">
            <h1 className="text-white text-5xl">94%</h1>
            <h3 className="text-white">On-Time Milestones</h3>
          </div>
          <div className="rounded-xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r from-lightblack to-lightblack hover:from-purple hover:to-pink transition duration-500 ease-in-out">
            <h1 className="text-white text-5xl">38</h1>
            <h3 className="text-white">Active Trade Partners</h3>
          </div>
          <div className="rounded-xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r from-lightblack to-lightblack hover:from-purple hover:to-pink transition duration-500 ease-in-out">
            <h1 className="text-white text-5xl">0</h1>
            <h3 className="text-white">Safety Compromises</h3>
          </div>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="mt-10 px-8">
          <h1 className="text-white text-7xl font-bold xxs:text-2xl xs:text-2xl sm:text-3xl lg:text-5xl xl:text-7xl">
            From pre-construction planning <br></br>
            to final turnover
          </h1>
          <h2 className="text-white text-sm mt-5 opacity-50">
            One Shot Project Management leads construction projects with a practical,
            systems-first approach tailored to your site, budget, and timeline.
            We build project roadmaps, align subcontractors, lock procurement plans,
            and maintain clear owner communication from kickoff through closeout.
            Instead of one-size-fits-all administration, each engagement is shaped
            around your scope complexity, permitting requirements, and delivery goals.
            <br></br><br></br>
            Our team keeps risk visible, decisions documented, and work progressing
            so your project stays predictable.
          </h2>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row">
          <div className="w-2/6 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-2/6">
            <h1 className="text-white text-4xl">Stats</h1>
            <div className="mt-5">
              <div>
                <h2 className="text-white opacity-50 text-xl">Year Founded</h2>
                <h1 className="text-white text-sm">2022</h1>
              </div>
              <div className="mt-5">
                <h2 className="text-white opacity-50 text-xl">Client Retention</h2>
                <h1 className="text-white text-sm">96%</h1>
              </div>
              <div className="mt-5">
                <h2 className="text-white opacity-50 text-xl">Team Members</h2>
                <h1 className="text-white text-sm">8</h1>
              </div>
            </div>
          </div>

          <div className="w-4/6 bg-lightblack p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6">
            <h1 className="text-white text-4xl">Our Core Behaviours</h1>
            <p className="mt-10 text-white opacity-50">
              We operate with clarity, accountability, and urgency. Every project
              has a defined responsibility matrix, transparent reporting cadence,
              and measurable milestone ownership.<br></br>
              We coordinate architects, engineers, trades, and owners through a
              single delivery rhythm that minimizes downtime and change-order churn.
              Scope risks are surfaced early, not at the end of the schedule.<br></br>
              Field execution matters as much as planning. We perform routine
              quality walks, track safety actions, and maintain issue logs that
              keep teams aligned and decisions auditable.
            </p>
          </div>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="mt-10 px-8">
          <h1 className="text-white text-7xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-7xl">
            Work more easily with everyone
          </h1>
          <h2 className="text-white text-sm mt-5 opacity-50">
            Construction success depends on communication discipline. Our team
            builds shared schedules, publishes weekly action summaries, and keeps
            every stakeholder synced on budget, procurement, inspections, and
            next critical path tasks. With One Shot Project Management, owners,
            vendors, and field crews all work from the same playbook.
            <br></br>
          </h2>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row">
          <div className="w-1/3 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h1 className="text-white text-2xl">
              Fast Startup and Mobilization<br></br>
            </h1>
            <p className="mt-10 text-white opacity-50 text-sm">
              We stand projects up quickly with clear scopes, baseline schedules,
              and procurement alignment so crews can execute without delay.
            </p>
          </div>

          <div className="w-1/3 bg-lightblack p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h1 className="text-white text-2xl">
              Operational Excellence,<br></br>Any Location
            </h1>
            <p className="mt-10 text-white opacity-50 text-sm">
              From tenant improvements to multi-phase commercial builds, our
              process scales to site complexity while preserving quality and pace.
            </p>
          </div>
          <div className="w-1/3 bg-lightblack p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h1 className="text-white text-2xl">
              Seamless Communication<br></br>and Collaboration
            </h1>
            <p className="mt-10 text-white opacity-50 text-sm">
              Our dashboards and reporting cadence keep owners informed and crews
              accountable, reducing confusion and preventing avoidable rework.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default FeatureSection
