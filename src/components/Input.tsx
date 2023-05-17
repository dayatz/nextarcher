import React from "react"

type InputProps = {} & React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(({
  className, ...props
}, ref) => {
  return (
    <input
      className={`flex h-10 border border-slate-300 w-full rounded-md bg-transparent px-3 py-2 text-sm disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 ${className}`}
      ref={ref}
      {...props}
    />
  )
})

export default Input
