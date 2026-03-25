import React from "react"
import Fade from "react-reveal/Fade"

const AboutHeader = () => {
  return (
    <Fade bottom cascade>
      <div className="max-w-7xl mx-auto mt-10">
        <div className="overflow-hidden rounded-xl">
          <img src="https://image.pollinations.ai/prompt/construction%20project%20leadership%20team%20in%20meeting%20room%20realistic%20photo?width=1600&height=900&seed=61&model=flux"></img>
        </div>
        <div className="mt-5">
          <span className="text-white text-sm opacity-50">About us</span>
          <h1 className="text-white text-7xl font-poppins font-semibold leading-snug xxs:text-lg xs:text-lg sm:text-3xl lg:text-7xl">
            We lead construction projects with disciplined planning, transparent
            communication, and field-first execution.
          </h1>
        </div>
      </div>
    </Fade>
  )
}

export default AboutHeader
