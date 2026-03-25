import React from "react"

const FeaturedBlog = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 mt-16">
      <h1 className="text-theme-primary font-poppins font-bold text-6xl xxs:text-2xl xs:text-3xl sm:text-4xl lg:text-6xl">
        Why Teams Choose Us <br></br> For Construction Delivery
      </h1>
      <p className="text-theme-muted text-lg mt-5 w-3/4 xxs:w-full lg:w-3/4 leading-relaxed">
        We are not a generic consultancy. One Shot Project Management is built
        for real-world field execution with clear accountability at every phase.
      </p>
      <div className="grid grid-cols-3 mt-10 gap-4 xxs:grid-cols-1 lg:grid-cols-3">
        <div className="rounded-xl overflow-hidden relative group surface-card">
          <img
            className="relative w-full h-72 object-cover"
            alt="Silent Night"
            src="https://image.pollinations.ai/prompt/construction%20preconstruction%20planning%20meeting%20blueprints%20and%20laptops%20realistic%20photo?width=1200&height=900&seed=41&model=flux"
          ></img>
          <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-0 z-10 text-2xl text-white font-bold p-5 hero-overlay flex items-end">
            Clear pre-construction planning before boots hit the ground.
          </div>
        </div>
        <div className="rounded-xl overflow-hidden relative group surface-card">
          <img
            className="relative w-full h-72 object-cover"
            alt="Jobs Get Done"
            src="https://image.pollinations.ai/prompt/construction%20site%20coordination%20team%20walking%20jobsite%20with%20hard%20hats%20realistic%20photo?width=1200&height=900&seed=42&model=flux"
          ></img>
          <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-0 z-10 text-2xl text-white font-bold p-5 hero-overlay flex items-end">
            Proactive risk and change-order control through every milestone.
          </div>
        </div>
        <div className="rounded-xl overflow-hidden relative group surface-card">
          <img
            className="relative w-full h-72 object-cover"
            alt="blog"
            src="https://image.pollinations.ai/prompt/construction%20quality%20and%20safety%20inspection%20checklist%20on%20active%20build%20realistic%20photo?width=1200&height=900&seed=43&model=flux"
          ></img>
          <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-0 z-10 text-2xl text-white font-bold p-5 hero-overlay flex items-end">
            Safety, quality, and schedule performance tracked in one system.
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedBlog
