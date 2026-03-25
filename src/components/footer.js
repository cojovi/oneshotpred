import { Link } from "gatsby"
import React from "react"

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto p-12 mt-16 surface-card rounded-xl">
      <div className="grid grid-cols-2 xxs:grid-cols-1 lg:grid-cols-2">
        <div>
          <h1 className="text-theme-primary text-4xl text-bold font-poppins">One Shot Project Management</h1>
          <p className="text-theme-muted text-sm mt-5">
            Construction project planning, execution, and delivery leadership.
          </p>
          <h1 className="text-theme-muted text-sm mt-16 ">
            © copyright{" "}
            <a className="text-theme-primary underline" href="https://www.cojovi.com">cojovi web solutions @ cojovi.com</a>
          </h1>
        </div>
        <div className="place-self-end self-center xxs:hidden lg:block">
          <ul className="text-xl font-poppins font-bold text-theme-primary">
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
