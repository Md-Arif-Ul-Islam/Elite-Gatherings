// Import React and Radix UI's Separator primitive
import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

// Import utility function to combine class names conditionally
import { cn } from "@/lib/utils"

// Define the Separator component using forwardRef for ref forwarding
const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    // Destructure props with default values for orientation and decorative
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    // Render the Radix SeparatorPrimitive.Root component
    <SeparatorPrimitive.Root
      ref={ref} // Pass the forwarded ref
      decorative={decorative} // Set whether the separator is decorative
      orientation={orientation} // Set the orientation: "horizontal" or "vertical"
      className={cn(
        // Apply styling based on orientation and merge additional classes
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props} // Spread any additional props
    />
  )
)

// Set the display name for the Separator component for debugging
Separator.displayName = SeparatorPrimitive.Root.displayName

// Export the Separator component for use in other parts of the application
export { Separator }
