// Import React and Radix UI's Radio Group primitives
import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
// Import an icon to use as a visual indicator
import { Circle } from "lucide-react"

// Import utility for combining class names conditionally
import { cn } from "@/lib/utils"

// Create the main RadioGroup component using forwardRef for accessibility and ref support
const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>, // Ref type for the root element
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> // Props type without ref
>(({ className, ...props }, ref) => {
  return (
    // Root container for the radio group
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)} // Grid layout with gap
      {...props}
      ref={ref}
    />
  )
})
// Set a readable name for the component for React DevTools
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

// Create the RadioGroupItem component using forwardRef
const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>, // Ref type for the item
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> // Props type without ref
>(({ className, ...props }, ref) => {
  return (
    // Each individual radio item
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        // Styling for circular radio button appearance and accessibility
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {/* Visual indicator inside the selected radio item */}
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
// Set a readable name for the component for React DevTools
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

// Export both components
export { RadioGroup, RadioGroupItem }
