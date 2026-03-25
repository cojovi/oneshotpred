import React from "react"

const Input = ({ placeholder, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      className="px-3 py-2 rounded-lg surface-card border-transparent flex-1 appearance-none text-theme-primary font-poppins placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink focus:border-transparent sm:width-full md:width-full xxs:text-sm"
    ></input>
  )
}

export default Input
