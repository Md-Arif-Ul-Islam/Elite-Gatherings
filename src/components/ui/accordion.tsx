import * as React from "react" // Importing React library
import * as AccordionPrimitive from "@radix-ui/react-accordion" // Importing Radix UI's accordion components
import { ChevronDown } from "lucide-react" // Importing ChevronDown icon from Lucide React library

import { cn } from "@/lib/utils" // Importing a utility function for conditional class names

// Creating an alias for the root Accordion component from Radix UI
const Accordion = AccordionPrimitive.Root

// Defining the AccordionItem component with forwarded ref
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>, // Getting the element reference type
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> // Getting component props type excluding ref
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref} // Forwarding the ref
    className={cn("border-b", className)} // Applying default and additional class names
    {...props} // Spreading additional props
  />
))
AccordionItem.displayName = "AccordionItem" // Setting a display name for debugging

// Defining the AccordionTrigger component with forwarded ref
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>, // Getting the element reference type
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> // Getting component props type excluding ref
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex"> {/* Accordion header wrapper */}
    <AccordionPrimitive.Trigger
      ref={ref} // Forwarding the ref
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", // Default styles with animation
        className
      )}
      {...props} // Spreading additional props
    >
      {children} {/* Render trigger content (label) */}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" /> {/* Chevron icon with transition */}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName // Assigning display name for debugging

// Defining the AccordionContent component with forwarded ref
const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>, // Getting the element reference type
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> // Getting component props type excluding ref
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref} // Forwarding the ref
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" // Default styles with animations
    {...props} // Spreading additional props
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div> {/* Wrapper div for content spacing */}
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName // Assigning display name for debugging

// Exporting all components for use in other files
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
