import React from "react"

const Button = ({ title, colorClass, textColor, onClick, marginClass }) => {
  const resolvedTextColor = textColor || "text-white"
  const resolvedColorClass = colorClass || "gradient-industrial"

  return (
    <button
      onClick={onClick}
      className={`${resolvedColorClass} ${resolvedTextColor} ${marginClass} px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transform scale-100 transition hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2 focus:ring-offset-transparent sm:width-full md:width-full lg:width-full`}
    >
      {title}
    </button>
  )
}

export default Button
