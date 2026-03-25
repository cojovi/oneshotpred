import React from "react"
import Fade from "react-reveal/Fade"

const CareersRoles = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col items-center text-white mt-20 font-poppins">
      <h2 className="text-sm font-bold opacity-50">our leadership pillars</h2>
      <h1 className="text-6xl font-bold mt-3">Experience, systems, and execution.</h1>
      <Fade bottom cascade>
        <div className="grid grid-cols-2 gap-6 mt-10">
          <a
            href="#"
            className="m-5 p-5 bg-lightblack rounded-xl border cursor-pointer hover:border-purple text-left"
          >
            <h2 className="text-3xl font-bold">Project Strategy</h2>
            <p className="mt-10 opacity-50">
              Scope alignment, milestone planning, and proactive risk controls.
            </p>
          </a>
          <a
            href="#"
            className="m-5 p-5 bg-lightblack rounded-xl border cursor-pointer hover:border-purple text-left"
          >
            <h2 className="text-3xl font-bold">Field Coordination</h2>
            <p className="mt-10 opacity-50">
              Trade partner communication, issue resolution, and quality follow-through.
            </p>
          </a>
        </div>
      </Fade>
    </div>
  )
}

export default CareersRoles
