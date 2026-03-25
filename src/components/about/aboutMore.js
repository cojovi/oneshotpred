import React from "react"
import Fade from "react-reveal/Fade"

const AboutMore = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <Fade bottom cascade>
        <div className="grid grid-cols-3 h-full overflow-hidden gap-4 xxs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-3">
          <div className="col-start-1 col-end-3 h-96 overflow-hidden rounded-xl">
            <img
              className="object-cover h-96 w-full"
              src="https://image.pollinations.ai/prompt/construction%20site%20planning%20table%20with%20drawings%20and%20helmets%20realistic%20photo?width=1400&height=900&seed=62&model=flux"
            ></img>
          </div>
          <div className="col-start-3 overflow-hidden rounded-xl h-96 xxs:col-start-1 sm:col-start-3">
            <img
              className="object-cover h-96"
              src="https://image.pollinations.ai/prompt/construction%20supervisor%20reviewing%20jobsite%20timeline%20on%20tablet%20realistic%20photo?width=800&height=900&seed=63&model=flux"
            ></img>
          </div>
        </div>
      </Fade>
      <div className="grid grid-cols-4">
        <p className="col-start-3 col-end-5 text-white text-3xl leading-normal mt-10 xxs:col-start-1 sm:col-start-3 xxs:text-sm xs:text-lg sm:text-3xl">
          We partner with owners and builders to convert complex scopes into
          executable plans. Our work spans preconstruction strategy, schedule
          control, trade coordination, quality tracking, and closeout support.
          The result is fewer surprises, faster decisions, and better delivery
          confidence from kickoff to handover.
        </p>
      </div>
    </div>
  )
}

export default AboutMore
