import React from "react"

const AboutTeamBigCard = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="bg-lightblack w-full h-full flex flex-row justify-between rounded-xl xxs:flex-col sm:flex-row">
        <img
          className="w-3/4 object-cover h-96 rounded-l-lg xxs:w-full sm:w-3/4"
          src="https://image.pollinations.ai/prompt/construction%20project%20manager%20on%20site%20with%20hardhat%20and%20plans%20realistic%20photo?width=1100&height=900&seed=64&model=flux"
        ></img>
        <div className="flex flex-col justify-between">
          <div className="text-white text-right m-6 font-poppins xxs:text-center sm:text-right">
            <h1 className="text-5xl font-bold">Adam Trudeaux</h1>
            <h3 className="text-lg font-bold opacity-50">Founder & Project Lead</h3>
          </div>
          <p className="text-white p-6 text-xl text-right xxs:text-center sm:text-right">
            Adam leads client alignment, schedule strategy, and on-site execution
            oversight. His focus is simple: keep commitments clear, remove blockers
            quickly, and deliver high-quality outcomes without timeline surprises.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutTeamBigCard
