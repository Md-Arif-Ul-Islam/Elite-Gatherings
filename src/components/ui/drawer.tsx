// Importing React and its types
import * as React from "react"
// Importing all Dialog primitives from Radix UI
import * as DialogPrimitive from "@radix-ui/react-dialog"
// Importing the close icon from Lucide Icons
import { X } from "lucide-react"

// Importing a utility function to merge class names conditionally
import { cn } from "@/lib/utils"

// Creating a Dialog component using Radix's Root component
const Dialog = DialogPrimitive.Root

// Creating a Trigger component to open the dialog
const DialogTrigger = DialogPrimitive.Trigger

// Creating a Portal component to render dialog outside the DOM tree
const DialogPortal = DialogPrimitive.Portal

// Creating a Close component to close the dialog
const DialogClose = DialogPrimitive.Close

// Creating a custom DialogOverlay component with forwarded ref and animations
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>, // Define the ref type
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> // Define props type
>(
  // Functional component definition
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
      ref={ref} // Forwarded ref to Radix's Overlay
      className={cn(
        // Merging predefined styles with user-passed className
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
      {...props} // Spread additional props
    />
  )
)
// Setting display name for easier debugging
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

// Creating a custom DialogContent component with styling, overlay, and close button
const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>, // Define the ref type
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> // Define props type
>(
  // Functional component definition
  ({ className, children, ...props }, ref) => (
    // Rendering content inside a portal
    <DialogPortal>
      {/* Rendering background overlay */}
      <DialogOverlay />
      {/* Main content of the dialog */}
      <DialogPrimitive.Content
        ref={ref} // Forwarded ref
        className={cn(
          // Styling for dialog layout, animation, and responsiveness
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          className
        )}
        {...props} // Spread additional props
      >
        {children} {/* Render dialog content children */}
        {/* Close button positioned at top-right */}
        <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" /> {/* Close icon */}
          <span className="sr-only">Close</span> {/* Accessible label */}
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  )
)
// Setting display name for easier debugging
DialogContent.displayName = DialogPrimitive.Content.displayName

// Creating a DialogHeader component with optional class names and props
const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      // Styling for vertical spacing and alignment
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props} // Spread additional props
  />
)
// Setting display name
DialogHeader.displayName = "DialogHeader"

// Creating a DialogFooter component to layout buttons at the bottom
const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      // Reverse stacking on small screens, horizontal layout on larger
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props} // Spread additional props
  />
)
// Setting display name
DialogFooter.displayName = "DialogFooter"

// Creating a styled DialogTitle component
const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>, // Define the ref type
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title> // Define props type
>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Title
      ref={ref} // Forwarded ref
      className={cn(
        // Styling for bold heading
        "text-lg font-semibold leading-none tracking-tight",
        className
      )}
      {...props} // Spread additional props
    />
  )
)
// Setting display name
DialogTitle.displayName = DialogPrimitive.Title.displayName

// Creating a styled DialogDescription component
const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>, // Define the ref type
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description> // Define props type
>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Description
      ref={ref} // Forwarded ref
      className={cn(
        // Styling for subtle descriptive text
        "text-sm text-muted-foreground",
        className
      )}
      {...props} // Spread additional props
    />
  )
)
// Setting display name
DialogDescription.displayName = DialogPrimitive.Description.displayName

// Exporting all custom dialog components for external use
export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
