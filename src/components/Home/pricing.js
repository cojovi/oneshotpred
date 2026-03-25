import React from "react"
import Button from "../Atoms/button"
import Fade from "react-reveal/Fade"

const PricingMain = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 h-screen xxs:hidden xs:hidden sm:hidden lg:block">
      <Fade bottom>
        <div className="w-full gradient-industrial flex items-center justify-center h-screen rounded-xl">
          <div className="flex w-9/12 surface-card h-auto rounded-xl overflow-hidden">
            <div className="p-8 w-3/5">
              <h1 className="text-3xl font-bold text-theme-primary font-poppins">
                From project kickoff <br></br> to clean handover.
              </h1>
              <p className="mt-5 text-sm text-theme-muted font-semibold">
                We provide structured services for planning, coordination,
                reporting, and execution support.
              </p>
              <div className="mt-5">
                <h2 className="font-bold text-xl text-theme-primary">Available service tracks</h2>
                <div className="mt-5 grid grid-cols-2 gap-3 text-theme-muted">
                  <h3>Preconstruction Setup</h3>
                  <h3>Schedule Recovery</h3>
                  <h3>Full PM Oversight</h3>
                  <h3>Closeout Support</h3>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-2/5 p-8 gradient-industrial rounded-r-lg">
              <h2 className="text-xl text-white font-semibold">
                Pricing
              </h2>
              <h1 className="text-7xl text-white font-bold mt-2">Custom</h1>
              <div className="mt-5">
                <Button
                  colorClass="bg-white"
                  title="Book Consultation"
                  onClick={() => {}}
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default PricingMain
