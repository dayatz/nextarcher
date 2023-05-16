import React from "react"

type Variant = "default" | "primary"

type ButtonProps = {
  variant?: Variant 
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const variantClasses: {[k in Variant]: string} = {
  "default": "",
  "primary": "bg-[var(--color-primary)] text-gray-200 hover:bg-[var(--color-primary-h)]"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 disabled:opacity-50 py-2 px-4 shadow-sm
        ${variantClasses[variant]}
        ${className}
        `}
        {...props}
      />
    )
  })

export default Button
