// Import all exported members from React under the "React" namespace
import * as React from "react"

// Import all exported members from the @radix-ui/react-hover-card package under the "HoverCardPrimitive" namespace
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

// Import the utility function 'cn' used for conditional classNames
import { cn } from "@/lib/utils"

// Assign the Radix UI HoverCard Root component to the constant HoverCard
const HoverCard = HoverCardPrimitive.Root

// Assign the Radix UI HoverCard Trigger component to the constant HoverCardTrigger
const HoverCardTrigger = HoverCardPrimitive.Trigger

// Create a forwardRef component for HoverCardContent using React.forwardRef
const HoverCardContent = React.forwardRef< // Begin typing HoverCardContent with generic type definitions
  React.ElementRef<typeof HoverCardPrimitive.Content>, // Define the type for the element reference
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content> // Define the props without ref for the component
>(
  // Define the functional component with props and ref
  ({ className, align = "center", sideOffset = 4, ...props }, ref) => (
    // Return the HoverCardPrimitive.Content element with forwarded ref and props
    <HoverCardPrimitive.Content
      ref={ref} // Forward the ref
      align={align} // Set the alignment of the content (default is "center")
      sideOffset={sideOffset} // Set the distance from the trigger (default is 4)
      className={cn( // Combine default and custom class names using cn()
        "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", // Default styling classes for transitions, colors, spacing, etc.
        className // Append any additional className passed via props
      )}
      {...props} // Spread the remaining props
    />
  )
)
// Set the display name of the component for debugging purposes
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

// Export the HoverCard, HoverCardTrigger, and HoverCardContent components for use in other files
export { HoverCard, HoverCardTrigger, HoverCardContent }
