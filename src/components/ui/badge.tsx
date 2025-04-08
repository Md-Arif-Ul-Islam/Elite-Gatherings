// Importing everything from the React library
import * as React from "react"

// Importing `cva` for creating class variants and `VariantProps` for typing
import { cva, type VariantProps } from "class-variance-authority"

// Importing a utility function to merge classNames conditionally
import { cn } from "@/lib/utils"

// Defining style variants using cva (class-variance-authority)
const badgeVariants = cva(
  // Base styles for the badge component
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        // Default style
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        // Secondary style
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        // Destructive style
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        // Outline style (uses foreground text color only)
        outline: "text-foreground",
      },
    },
    // Default variant if none is provided
    defaultVariants: {
      variant: "default",
    },
  }
)

// Extending HTML div props and including the variant types from badgeVariants
export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, // Basic HTML props for a <div>
    VariantProps<typeof badgeVariants> {} // Adds the 'variant' prop type (default, secondary, etc.)

// Badge component definition
function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    // Rendering a <div> with combined styles from cva and any additional className
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

// Exporting the Badge component and badgeVariants for external use
export { Badge, badgeVariants }
