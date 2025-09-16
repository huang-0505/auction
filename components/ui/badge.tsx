import type * as React from "react"
import { Slot } from "@radix-ui/react-slot"

const badgeVariants = (props: { variant?: string; className?: string }) => {
  const { variant = "default", className = "" } = props

  let baseClasses =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"

  if (variant === "secondary") {
    baseClasses += " border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
  } else if (variant === "destructive") {
    baseClasses += " border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80"
  } else if (variant === "outline") {
    baseClasses += " text-foreground"
  } else {
    baseClasses += " border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
  }

  return `${baseClasses} ${className}`.trim()
}

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  variant?: "default" | "secondary" | "destructive" | "outline"
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "div"

  return <Comp className={badgeVariants({ variant, className })} {...props} />
}

export { Badge }
