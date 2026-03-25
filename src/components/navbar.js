import React, { useState } from "react"
import { Link } from "gatsby"

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/pricing", label: "Services" },
  { to: "/blog", label: "Insights" },
  { to: "/careers", label: "Team" },
  { to: "/contact", label: "Contact" },
]

const Navbar = ({ theme, toggleTheme }) => {
  const [openMenu, setOpenMenu] = useState(false)
  const isDark = theme === "dark"

  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto px-8 py-5">
        <div className="flex items-center justify-between h-16">
          <div className="w-full justify-between flex items-center gap-6">
            <Link className="text-white flex-shrink-0 font-poppins font-semibold" to="/">
              One Shot Project Management
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                {navLinks.map(link => (
                  <Link
                    key={link.to}
                    className="text-white opacity-60 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-poppins"
                    to={link.to}
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  onClick={toggleTheme}
                  className="text-white border border-white border-opacity-30 px-3 py-2 rounded-md text-sm font-medium font-poppins hover:border-opacity-100"
                >
                  {isDark ? "Light mode" : "Dark mode"}
                </button>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="text-white hover:opacity-80 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <svg
                width="20"
                height="20"
                fill="white"
                className="h-8 w-8"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {openMenu && (
        <div className="md:hidden px-8">
          <div className="pt-2 pb-3 space-y-1 bg-lightblack rounded-xl">
            {navLinks.map(link => (
              <Link
                key={link.to}
                className="text-white block px-4 py-2 rounded-md text-base font-medium font-poppins"
                to={link.to}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="mx-4 mb-2 text-white border border-white border-opacity-30 px-3 py-2 rounded-md text-sm font-medium font-poppins"
            >
              {isDark ? "Switch to Light mode" : "Switch to Dark mode"}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
