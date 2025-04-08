// Import React and necessary primitives
import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react" // Icon used when checkbox is checked

// Utility for conditional classNames
import { cn } from "@/lib/utils"

// Checkbox component using Radix UI and Lucide icon
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>, // Forward ref typing
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> // Props typing without ref
>(
  ({ className, ...props }, ref) => (
    <CheckboxPrimitive.Root
      ref={ref}
      // Combine custom className with utility styles and state-based styles
      className={cn(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        className
      )}
      {...props} // Spread any additional props
    >
      {/* Indicator shows when checkbox is checked */}
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-current")}
      >
        <Check className="h-4 w-4" /> {/* Checkmark icon */}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
)

// Set display name for better debug/dev tools experience
Checkbox.displayName = CheckboxPrimitive.Root.displayName

// Export the component
export { Checkbox }
