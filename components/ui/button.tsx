import type * as React from "react"
import { Slot } from "@radix-ui/react-slot"

const buttonVariants = (props: { variant?: string; size?: string; className?: string }) => {
  const { variant = "default", size = "default", className = "" } = props

  let baseClasses =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-ring"

  // Variant classes
  if (variant === "destructive") {
    baseClasses += " bg-destructive text-white shadow-sm hover:bg-destructive/90"
  } else if (variant === "outline") {
    baseClasses += " border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
  } else if (variant === "secondary") {
    baseClasses += " bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80"
  } else if (variant === "ghost") {
    baseClasses += " hover:bg-accent hover:text-accent-foreground"
  } else if (variant === "link") {
    baseClasses += " text-primary underline-offset-4 hover:underline"
  } else {
    baseClasses += " bg-primary text-primary-foreground shadow hover:bg-primary/90"
  }

  // Size classes
  if (size === "sm") {
    baseClasses += " h-8 rounded-md px-3 text-xs"
  } else if (size === "lg") {
    baseClasses += " h-10 rounded-md px-8"
  } else if (size === "icon") {
    baseClasses += " h-9 w-9"
  } else {
    baseClasses += " h-9 px-4 py-2"
  }

  return `${baseClasses} ${className}`.trim()
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "button"

  return <Comp className={buttonVariants({ variant, size, className })} {...props} />
}

export { Button }
