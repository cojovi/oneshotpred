import React from "react"
import Fade from "react-reveal/Fade"

const BlogHeader = () => {
  return (
    <Fade bottom>
      <div className="max-w-7xl mx-auto mt-10 flex text-white xxs:flex-col sm:flex-row">
        <div className="h-full object-cover overflow-hidden rounded-xl m-5">
          <img src="https://image.pollinations.ai/prompt/construction%20project%20management%20dashboard%20on%20laptop%20at%20active%20jobsite%20realistic%20photo?width=1200&height=900&seed=45&model=flux"></img>
        </div>
        <div className="m-5">
          <h2 className="text-sm opacity-50">Construction Intelligence</h2>
          <h1 className="text-5xl font-bold font-poppins xxs:text-lg sm:text-5xl">
            Project Management Insights You Can Use This Week
          </h1>
          <p className="text-lg mt-4 opacity-50 xxs:text-sm sm:text-lg">
            Welcome to the One Shot Project Management blog. We share practical
            guidance for better schedules, cleaner handoffs, tighter budget
            control, and stronger field coordination. These articles are written
            for owners and teams who need fewer surprises and better outcomes on
            active construction projects.
          </p>
          <div className="flex items-center mt-5">
            <div className="h-10 w-10 object-cover overflow-hidden rounded-full">
              <img
                className="h-10 w-10"
                src="https://image.pollinations.ai/prompt/professional%20editorial%20avatar%20construction%20project%20manager%20headshot%20realistic%20photo?width=200&height=200&seed=46&model=flux"
              ></img>
            </div>
            <div className="ml-2">
              <h2>One Shot PM Editorial Team</h2>
              <h4 className="text-xs opacity-50">Jan 18, 2024</h4>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default BlogHeader
