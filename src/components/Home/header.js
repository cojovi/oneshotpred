import React from "react"
import Input from "../Atoms/input"
import Button from "../Atoms/button"
import Fade from "react-reveal/Fade"
import HeroImage from "../../images/OSPM_hero_img.png"

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <Fade>
        <div className="pt-6">
          <h3 className="text-theme-muted font-poppins font-semibold tracking-widest uppercase text-xs sm:text-sm">
            One Shot Project Management
          </h3>
          <h1 className="text-theme-primary font-poppins font-semibold mt-4 text-4xl xxs:text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Construction leadership for <br></br>{" "}
            <span className="text-gradient bg-gradient-to-r from-pink to-purple">
              precision and momentum
            </span>
          </h1>
          <h2 className="text-theme-muted font-poppins mt-6 text-sm xxs:text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl leading-relaxed">
            We align scope, schedule, and trade coordination so your team can deliver
            with confidence from kickoff through closeout.
          </h2>
        </div>
      </Fade>
      <Fade bottom>
        <div className="mt-8 flex flex-col xxs:flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          <Input placeholder="email."></Input>
          <Button
            colorClass="gradient-industrial"
            title="Request Project Consultation"
            textColor="text-white"
            marginClass=""
          ></Button>
        </div>
      </Fade>
      <div className="max-w-7xl mx-auto mt-12">
        <div className="w-full overflow-hidden rounded-xl relative aspect-[16/9]">
          <img
            className="w-full h-full object-cover"
            src={HeroImage}
            alt="Construction project team planning"
          ></img>
          <div className="absolute inset-0 hero-overlay"></div>
          <div className="absolute left-6 bottom-6 sm:left-10 sm:bottom-10 max-w-xl">
            <p className="text-white text-xs sm:text-sm tracking-widest uppercase opacity-80">
              Field Coordination + Project Controls
            </p>
            <p className="text-white text-lg sm:text-2xl font-poppins font-semibold leading-tight mt-2">
              Build once, build right, and keep every milestone visible.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
