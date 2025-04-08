// Import React and Dialog primitive elements from Radix UI
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react" // Importing the close icon

// Import the utility function for combining conditional class names
import { cn } from "@/lib/utils"

// ---------------------------------------------------------------------
// Base Dialog and its trigger, portal, and close button are re-exported
// from Radix without custom modifications.
// ---------------------------------------------------------------------

// The main Dialog component from Radix UI
const Dialog = DialogPrimitive.Root

// Element to open the dialog
const DialogTrigger = DialogPrimitive.Trigger

// Portal for rendering dialog content outside of main DOM hierarchy
const DialogPortal = DialogPrimitive.Portal

// Element to close the dialog
const DialogClose = DialogPrimitive.Close

// ---------------------------------------------------------------------
// Custom DialogOverlay with animation and styling
// ---------------------------------------------------------------------

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      // Fixed full-screen overlay with semi-transparent black background
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

// ---------------------------------------------------------------------
// Custom DialogContent wraps children with layout, animation, and close button.
// ---------------------------------------------------------------------

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  // Render DialogContent inside a portal for proper positioning
  <DialogPortal>
    {/* Render the overlay behind the content */}
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        // Center the dialog with a fixed position, responsive width, border, padding, etc.
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      {/* Close button in the top-right corner of the dialog */}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span> {/* Accessible label for screen readers */}
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

// ---------------------------------------------------------------------
// Layout subcomponents for Dialog Header, Footer, Title, and Description
// ---------------------------------------------------------------------

// DialogHeader: Container for dialog title and optional subtext.
// Uses vertical spacing and responsive text alignment.
const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

// DialogFooter: Container for actions (e.g., buttons) at the bottom of the dialog.
// It positions items in reverse order on small screens and justifies them to the right on larger screens.
const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

// DialogTitle: The dialog's title with prominent styling.
const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

// DialogDescription: Secondary text for the dialog, styled subtly.
const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

// ---------------------------------------------------------------------
// Exporting all Dialog components for use in your application.
// ---------------------------------------------------------------------

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
