import React from "react"
import Fade from "react-reveal/Fade"

const CareersHeader = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <Fade bottom cascade>
        <div className="flex">
          <div className="w-2/4 m-2 text-white bg-lightblack p-8 rounded-xl">
            <h2 className="text-sm opacity-50 font-semibold">Our Team</h2>
            <h1 className="text-5xl font-bold">
              Meet the people behind <br></br> project delivery.
            </h1>
            <p className="mt-5 opacity-70">
              We combine planning discipline with field execution leadership to
              keep projects moving with confidence.
            </p>
          </div>
          <div className="w-2/4 rounded-xl overflow-hidden m-2">
            <img src="https://image.pollinations.ai/prompt/construction%20team%20coordination%20meeting%20onsite%20realistic%20photo?width=1100&height=800&seed=65&model=flux"></img>
          </div>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="flex flex-row-reverse mt-10">
          <div className="w-2/5 m-2 text-white bg-lightblack p-8 rounded-xl">
            <h2 className="text-sm opacity-50 font-semibold">How We Work</h2>
            <h1 className="text-5xl font-bold">
              Schedule control, risk visibility, <br></br> and accountable coordination.
              </h1>
            <p className="mt-5 opacity-70">
              Every engagement is designed around predictable communication and
              measurable outcomes.
            </p>
          </div>
          <div className="w-3/5 rounded-xl overflow-hidden m-2">
            <img src="https://image.pollinations.ai/prompt/construction%20superintendent%20and%20engineer%20reviewing%20drawings%20at%20sunset%20realistic%20photo?width=1400&height=800&seed=66&model=flux"></img>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default CareersHeader
