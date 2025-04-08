// Import React and Radix UI Progress primitives
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

// Import utility for conditional class names
import { cn } from "@/lib/utils"

// Define the Progress component using forwardRef for better accessibility and ref support
const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>, // Type for the root element
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> // Props excluding ref
>(
  ({ className, value, ...props }, ref) => (
    // Root of the progress bar
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full bg-secondary", // Styling for the outer track
        className
      )}
      {...props}
    >
      {/* Inner indicator that fills based on value */}
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 bg-primary transition-all" // Styling and animation
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }} // Dynamic width based on value
      />
    </ProgressPrimitive.Root>
  )
)

// Set display name for better debugging in React DevTools
Progress.displayName = ProgressPrimitive.Root.displayName

// Export the component
export { Progress }
