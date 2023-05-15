import React from "react"

const Card = React.forwardRef<HTMLDivElement, React.HtmlHTMLAttributes<HTMLDivElement>>(({
  className, ...props
}, ref) => (
  <div ref={ref} className={`rounded-lg border shadow-sm p-6 bg-white ${className}`} {...props} />
))

export default Card
