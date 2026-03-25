import React from "react"
import Button from "../Atoms/button"

const PricingCTA = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20 flex flex-col text-white text-center items-center">
      <h1 className="text-4xl font-bold font-poppins xxs:text-2xl sm:text-4xl">
        Ready to deliver your next project with confidence?
      </h1>
      <p className="text-lg opacity-50 w-2/4 mt-5 xxs:text-sm xxs:w-full xxs:p-2 sm:p-0 sm:w-2/4">
        We help owners and teams eliminate uncertainty with better planning,
        tighter coordination, and transparent project controls.
      </p>
      <div className="mt-2">
        <Button
          title="Book a consultation"
          colorClass="bg-gradient-to-r from-pink to-purple "
        ></Button>
      </div>
    </div>
  )
}

export default PricingCTA
