// Importing React and ScrollArea components from Radix UI
import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

// Utility for conditional className merging
import { cn } from "@/lib/utils"

// ScrollArea component that wraps children with scrollable container
const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  // Root wrapper for the scroll area
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)} // Container with hidden overflow
    {...props}
  >
    {/* The visible area inside the scroll container */}
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>

    {/* Scrollbar component (vertical or horizontal) */}
    <ScrollBar />

    {/* Corner element (intersection of horizontal and vertical scrollbars) */}
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

// ScrollBar component which can be vertical or horizontal
const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors", // Base scrollbar styles
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]", // Styles for vertical scrollbar
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]", // Styles for horizontal scrollbar
      className
    )}
    {...props}
  >
    {/* Scroll thumb (draggable part of the scrollbar) */}
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

// Exporting ScrollArea and ScrollBar components
export { ScrollArea, ScrollBar }
