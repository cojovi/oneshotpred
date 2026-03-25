/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import Footer from "./footer"
import Navbar from "./navbar"

const Layout = ({ children }) => {
  const [theme, setTheme] = React.useState("light")

  React.useEffect(() => {
    const storedTheme =
      typeof window !== "undefined" ? window.localStorage.getItem("theme") : null
    const initialTheme = storedTheme === "dark" ? "dark" : "light"
    setTheme(initialTheme)
    document.documentElement.classList.toggle("dark", initialTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark"
    setTheme(nextTheme)
    document.documentElement.classList.toggle("dark", nextTheme === "dark")
    window.localStorage.setItem("theme", nextTheme)
  }

  return (
    <div>
      <Navbar theme={theme} toggleTheme={toggleTheme}></Navbar>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default Layout
