import { Link } from "gatsby"
import React from "react"

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto p-20 mt-10 bg-lightblack rounded-xl">
      <div className="grid grid-cols-2 xxs:grid-cols-1 lg:grid-cols-2">
        <div>
          <h1 className="text-white text-4xl text-bold">One Shot Project Management</h1>
          <p className="text-white text-sm mt-5 opacity-50">
            Construction project planning, execution, and delivery leadership.
          </p>
          <h1 className="text-white text-lg mt-20 ">
            © copyright{" "}
            <a href="https://www.cojovi.com">cojovi web solutions @ cojovi.com</a>
          </h1>
        </div>
        <div className="place-self-end self-center xxs:hidden lg:block">
          <ul className="text-xl font-poppins font-bold">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/pricing">Services</Link>
            </li>
            <li>
              <Link to="/blog">Insights</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
