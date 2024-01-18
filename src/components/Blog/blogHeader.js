import React from "react"
import Fade from "react-reveal/Fade"

const BlogHeader = () => {
  return (
    <Fade bottom>
      <div className="max-w-7xl mx-auto mt-10 flex text-white xxs:flex-col sm:flex-row">
        <div className="h-full object-cover overflow-hidden rounded-xl m-5">
          <img src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"></img>
        </div>
        <div className="m-5">
          <h2 className="text-sm opacity-50">Insights from the Field</h2>
          <h1 className="text-5xl font-bold font-poppins xxs:text-lg sm:text-5xl">
            Predator Management Insights You Need to Know
          </h1>
          <p className="text-lg mt-4 opacity-50 xxs:text-sm sm:text-lg">
            Welcome to the OSPM blog, where expertise meets the art of storytelling. Our blog is more than just words; it's a dive into the heart of predator management, a field where precision, respect for nature, and cutting-edge strategies converge. Since our inception, OSPM has been setting new standards in wildlife control, combining our rich experience with innovative techniques. Join us as we share insights from the field, explore the balance between human needs and environmental stewardship, and unveil the techniques that make OSPM a leader in predator management. This is where knowledge meets action, and where you'll find everything you need to understand the nuances of effective wildlife control..
          </p>
          <div className="flex items-center mt-5">
            <div className="h-10 w-10 object-cover overflow-hidden rounded-full">
              <img
                className="h-10 w-10"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              ></img>
            </div>
            <div className="ml-2">
              <h2>Christina Solerieu</h2>
              <h4 className="text-xs opacity-50">Jan 19, 2021</h4>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default BlogHeader
