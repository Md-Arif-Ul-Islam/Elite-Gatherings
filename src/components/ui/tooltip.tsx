// Import React and Radix UI Tooltip primitive
import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

// Import utility function for conditional class names
import { cn } from "@/lib/utils"

// Re-export TooltipProvider from Radix
const TooltipProvider = TooltipPrimitive.Provider

// Re-export Tooltip root component
const Tooltip = TooltipPrimitive.Root

// Re-export Tooltip trigger component
const TooltipTrigger = TooltipPrimitive.Trigger

// Create TooltipContent component with custom styling and animation
const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))

TooltipContent.displayName = TooltipPrimitive.Content.displayName

// Export all custom tooltip components
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
