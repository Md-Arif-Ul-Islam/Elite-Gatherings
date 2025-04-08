// Import React and required Popover primitives from Radix UI
import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

// Utility function for conditional class names
import { cn } from "@/lib/utils"

// Popover Root - used to wrap the entire popover structure
const Popover = PopoverPrimitive.Root

// Popover Trigger - the element that opens the popover when interacted with
const PopoverTrigger = PopoverPrimitive.Trigger

// Popover Content - the actual popover panel that shows content
const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(
  (
    { className, align = "center", sideOffset = 4, ...props }, // Default alignment and offset
    ref
  ) => (
    <PopoverPrimitive.Portal>
      {/* Popover content is rendered inside a portal to ensure it's not clipped by parent containers */}
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          // Base styling and animation classes
          "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[side=bottom]:slide-in-from-top-2",
          "data-[side=left]:slide-in-from-right-2",
          "data-[side=right]:slide-in-from-left-2",
          "data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
)
// Display name for debugging and React DevTools
PopoverContent.displayName = PopoverPrimitive.Content.displayName

// Export all parts of the popover
export { Popover, PopoverTrigger, PopoverContent }
