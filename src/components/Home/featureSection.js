import React from "react"
import Fade from "react-reveal/Fade"

const FeatureSection = () => {
  return (
    <div className="max-w-7xl mx-auto mt-14">
      <Fade bottom cascade>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="rounded-xl h-44 flex flex-col justify-center text-center surface-card transition duration-500 ease-in-out hover:surface-card-strong">
            <h1 className="text-theme-primary text-5xl font-poppins font-bold">125+</h1>
            <h3 className="text-theme-muted mt-2">Projects Delivered</h3>
          </div>
          <div className="rounded-xl h-44 flex flex-col justify-center text-center surface-card transition duration-500 ease-in-out hover:surface-card-strong">
            <h1 className="text-theme-primary text-5xl font-poppins font-bold">94%</h1>
            <h3 className="text-theme-muted mt-2">On-Time Milestones</h3>
          </div>
          <div className="rounded-xl h-44 flex flex-col justify-center text-center surface-card transition duration-500 ease-in-out hover:surface-card-strong">
            <h1 className="text-theme-primary text-5xl font-poppins font-bold">38</h1>
            <h3 className="text-theme-muted mt-2">Active Trade Partners</h3>
          </div>
          <div className="rounded-xl h-44 flex flex-col justify-center text-center surface-card transition duration-500 ease-in-out hover:surface-card-strong">
            <h1 className="text-theme-primary text-5xl font-poppins font-bold">0</h1>
            <h3 className="text-theme-muted mt-2">Safety Compromises</h3>
          </div>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="mt-16 px-2 sm:px-6">
          <h1 className="text-theme-primary text-7xl font-bold xxs:text-3xl xs:text-4xl sm:text-4xl lg:text-6xl xl:text-7xl font-poppins">
            From pre-construction planning <br></br>
            to final turnover
          </h1>
          <h2 className="text-theme-muted text-sm mt-6 leading-relaxed sm:text-base">
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
        <div className="mt-14 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row gap-5">
          <div className="w-2/6 gradient-industrial p-8 rounded-xl xxs:w-full xs:w-full sm:w-2/6">
            <h1 className="text-white text-4xl">Stats</h1>
            <div className="mt-5">
              <div>
                <h2 className="text-white opacity-80 text-xl">Year Founded</h2>
                <h1 className="text-white text-sm">2022</h1>
              </div>
              <div className="mt-5">
                <h2 className="text-white opacity-80 text-xl">Client Retention</h2>
                <h1 className="text-white text-sm">96%</h1>
              </div>
              <div className="mt-5">
                <h2 className="text-white opacity-80 text-xl">Team Members</h2>
                <h1 className="text-white text-sm">8</h1>
              </div>
            </div>
          </div>

          <div className="w-4/6 surface-card p-8 rounded-xl xxs:w-full xs:w-full sm:w-4/6">
            <h1 className="text-theme-primary text-4xl font-poppins font-semibold">Our Core Behaviours</h1>
            <p className="mt-8 text-theme-muted leading-relaxed">
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
        <div className="mt-16 px-2 sm:px-6">
          <h1 className="text-theme-primary text-7xl font-bold font-poppins xxs:text-3xl xs:text-4xl sm:text-5xl lg:text-7xl">
            Work more easily with everyone
          </h1>
          <h2 className="text-theme-muted text-sm mt-5 leading-relaxed sm:text-base">
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
        <div className="mt-12 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row gap-5">
          <div className="w-1/3 gradient-industrial p-8 rounded-xl xxs:w-full xs:w-full sm:w-1/3">
            <h1 className="text-white text-2xl">
              Fast Startup and Mobilization<br></br>
            </h1>
            <p className="mt-6 text-white opacity-80 text-sm leading-relaxed">
              We stand projects up quickly with clear scopes, baseline schedules,
              and procurement alignment so crews can execute without delay.
            </p>
          </div>

          <div className="w-1/3 surface-card p-8 rounded-xl xxs:w-full xs:w-full sm:w-1/3">
            <h1 className="text-theme-primary text-2xl">
              Operational Excellence,<br></br>Any Location
            </h1>
            <p className="mt-6 text-theme-muted text-sm leading-relaxed">
              From tenant improvements to multi-phase commercial builds, our
              process scales to site complexity while preserving quality and pace.
            </p>
          </div>
          <div className="w-1/3 surface-card p-8 rounded-xl xxs:w-full xs:w-full sm:w-1/3">
            <h1 className="text-theme-primary text-2xl">
              Seamless Communication<br></br>and Collaboration
            </h1>
            <p className="mt-6 text-theme-muted text-sm leading-relaxed">
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
