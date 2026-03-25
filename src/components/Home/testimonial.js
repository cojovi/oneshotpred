import React from "react"
import Fade from "react-reveal/Fade"

const Testimonial = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-10 h-auto mb-10">
      <Fade bottom>
        <div className="w-full flex flex-row justify-between align-middle bg-lightblack p-12 rounded-lg xxs:flex-col xs:flex-col sm:flex-row xxs:p-5 lg:p-12">
          <div className="w-3/4 xxs:w-full xs:w-full sm:w-3/4">
            <div className="font-poppins text-white font-semibold text-2xl leading-10 xxs:text-xs xxs:font-normal sm:text-2xl">
              "One Shot Project Management brought structure to a complex
              renovation that had been slipping for months. Within two weeks they
              rebuilt our schedule, aligned every trade partner, and gave us clear
              weekly reporting on budget, risks, and decisions. We opened on time
              with no last-minute chaos. Their communication and field discipline
              changed everything for our team."
            </div>
            <div className="mt-10">
              <h1 className="text-white text-3xl font-bold font-poppins">
                Mason Keller
              </h1>
              <h1 className="text-white text-sm font-semibold font-poppins opacity-50">
                Owner Representative
              </h1>
            </div>
          </div>
          <div className="w-1/4 overflow-hidden flex align-middle justify-center xxs:hidden sm:block">
            <img
              className="rounded-xl w-auto h-auto"
              src="https://image.pollinations.ai/prompt/professional%20construction%20owner%20representative%20portrait%20in%20office%20realistic%20photo?width=700&height=900&seed=44&model=flux"
            ></img>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Testimonial
