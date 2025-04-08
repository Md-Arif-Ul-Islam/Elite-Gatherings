// Importing React library
import * as React from "react"
// Importing utility to define class variants and types for those variants
import { cva, type VariantProps } from "class-variance-authority"
// Importing class name utility function to merge Tailwind classes conditionally
import { cn } from "@/lib/utils"

// Creating class variants for Alert component
const alertVariants = cva(
  // Base styles and SVG-specific styling (using advanced selectors)
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      // Variant styles
      variant: {
        default: "bg-background text-foreground", // Default alert style
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive", // Destructive alert style
      },
    },
    defaultVariants: {
      // Default variant value
      variant: "default",
    },
  }
)

// Defining the main Alert component
const Alert = React.forwardRef<
  HTMLDivElement, // HTML element type
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants> // Props accepted by Alert
>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref} // Forwarding the ref to the div
      role="alert" // Accessibility role
      className={cn(alertVariants({ variant }), className)} // Combining variant-based and custom classNames
      {...props} // Spreading other props like children
    />
  )
)
Alert.displayName = "Alert" // Setting display name for debugging/dev tools

// Defining AlertTitle component for the alert title
const AlertTitle = React.forwardRef<
  HTMLParagraphElement, // Incorrect type; should be HTMLHeadingElement
  React.HTMLAttributes<HTMLHeadingElement> // Props accepted by heading element
>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref} // Forwarding the ref
      className={cn("mb-1 font-medium leading-none tracking-tight", className)} // Styling the heading
      {...props} // Other props like children
    />
  )
)
AlertTitle.displayName = "AlertTitle" // Display name for better debugging

// Defining AlertDescription component for alert content
const AlertDescription = React.forwardRef<
  HTMLParagraphElement, // Element type
  React.HTMLAttributes<HTMLParagraphElement> // Props accepted by paragraph
>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref} // Forwarding the ref
      className={cn("text-sm [&_p]:leading-relaxed", className)} // Styling the description
      {...props} // Other props like children
    />
  )
)
AlertDescription.displayName = "AlertDescription" // Display name for debugging

// Exporting all three components for use in other parts of the app
export { Alert, AlertTitle, AlertDescription }
