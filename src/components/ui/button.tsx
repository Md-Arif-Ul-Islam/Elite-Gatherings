// Import everything from React
import * as React from "react"

// Slot allows rendering a different component inside (polymorphic behavior)
import { Slot } from "@radix-ui/react-slot"

// cva: utility to manage Tailwind variant classes, VariantProps: for typing the variants
import { cva, type VariantProps } from "class-variance-authority"

// Utility function to combine class names conditionally
import { cn } from "@/lib/utils"

// Create a variant-based class system for buttons
const buttonVariants = cva(
  // Base button styles
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      // Button style variants
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      // Button size variants
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    // Default variant values
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// Define props for the Button component
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, // Native <button> props
    VariantProps<typeof buttonVariants> { // Add variant and size props
  asChild?: boolean // Optional prop to use custom component instead of <button>
}

// Create the Button component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // If `asChild` is true, render custom component using Slot
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))} // Apply variant + size + custom classes
        ref={ref}
        {...props} // Spread remaining props like onClick, type, etc.
      />
    )
  }
)
Button.displayName = "Button" // For better debugging in React DevTools

// Export the Button and its variants
export { Button, buttonVariants }
