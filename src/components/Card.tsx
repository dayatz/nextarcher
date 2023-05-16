import React from "react"

const Card = React.forwardRef<HTMLDivElement, React.HtmlHTMLAttributes<HTMLDivElement>>(({
  className, ...props
}, ref) => (
  <div ref={ref} className={`rounded-lg border shadow-sm bg-white ${className} ${!className?.includes('p-') ? 'p-6':''}`} {...props} />
))

export default Card
