"use client";
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground border-primary rounded-md hover:bg-primary-pink-dark hover:shadow-[4px_4px_0_0_#000] hover:border-primary hover:border-[1px]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        secondary:
        "bg-transparent text-black border-[1px] border-primary rounded-md hover:bg-transparent hover:shadow-[4px_4px_0_0_#000] hover:border-primary",
        filled: "bg-primary-foreground text-black border-[1px] border-primary rounded-md hover:bg-primary-foreground hover:shadow-[4px_4px_0_0_#000] hover:border-primary",
        accent: "bg-primary-pink-dark text-primary border-[1px] border-primary rounded-md hover:bg-primary-pink-dark/90 hover:shadow-[4px_4px_0_0_#000] hover:border-primary hover:border-[1px]",
        'destroy-outline': "bg-transparent text-black border-[1px] border-primary rounded-md hover:bg-primary-red-dark hover:shadow-[4px_4px_0_0_#000] hover:border-primary hover:text-primary-foreground",
        destroy: "bg-primary-red-dark text-primary-foreground border-[1px] border-primary rounded-md hover:bg-primary-red-dark hover:shadow-[4px_4px_0_0_#000] hover:border-primary",

      },
      size: {
        regular: "h-12 px-4 py-2",  // 48px height
        small: "h-7 px-3 rounded-md",  // 30px height
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "regular",
    },
  }
)





export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
