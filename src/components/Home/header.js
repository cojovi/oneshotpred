import React from "react"
import Input from "../Atoms/input"
import Button from "../Atoms/button"
import Fade from "react-reveal/Fade"

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <Fade>
        <div>
          <h3 className="text-white font-poppins font-semibold text-2xl xxs:text-2xl xs:text-2xl sm:text-lg md:text-2xl lg:text-4xl xl:text-7xl 2xl:text-8xl">
            OneShotProjectMgmt.com
          </h3>
          <h2 className="text-white font-poppins opacity-50 font-semibold mt-20 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-xl">
            Construction projects coordinated with clear timelines and accountable execution.
          </h2>

          <h1 className="text-white font-poppins font-semibold text-2xl xxs:text-2xl xs:text-2xl sm:text-lg md:text-2xl lg:text-4xl xl:text-7xl 2xl:text-8xl">
            Building projects with <br></br>{" "}
            <span className="text-gradient bg-gradient-to-r from-pink to-purple">
              precision and momentum.
            </span>
          </h1>
        </div>
      </Fade>
      <Fade bottom>
        <div className="mt-10 xxs:flex xxs:flex-row sm:block">
          <Input placeholder="email."></Input>
          <Button
            colorClass="bg-gradient-to-r from-pink to-purple "
            title="Request Project Consultation"
            textColor="text-white"
            marginClass="ml-5"
          ></Button>
        </div>
      </Fade>
      <div className="max-w-7xl mx-auto mt-10">
        <div className="w-full h-auto overflow-hidden rounded-xl">
          <img
            className="w-full h-full"
            src="https://image.pollinations.ai/prompt/professional%20construction%20project%20manager%20reviewing%20blueprints%20with%20crew%20at%20modern%20commercial%20jobsite%20realistic%20photo?width=1600&height=900&seed=31&model=flux"
            alt="Construction project team planning"
          ></img>
        </div>
      </div>
    </div>
  )
}

export default Header
