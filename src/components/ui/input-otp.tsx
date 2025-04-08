// Import all exports from React under the namespace "React"
import * as React from "react"

// Import OTPInput component and OTPInputContext from the "input-otp" library
import { OTPInput, OTPInputContext } from "input-otp"

// Import the Dot icon from lucide-react
import { Dot } from "lucide-react"

// Import the utility function for merging class names
import { cn } from "@/lib/utils"

// Create a custom InputOTP component with forwarded ref
const InputOTP = React.forwardRef< // Start of component definition using forwardRef
  React.ElementRef<typeof OTPInput>, // Type the ref to match the OTPInput element
  React.ComponentPropsWithoutRef<typeof OTPInput> // Props without the ref
>(
  // Destructure props and set up the component
  ({ className, containerClassName, ...props }, ref) => (
    // Render the OTPInput component
    <OTPInput
      ref={ref} // Forwarded ref
      containerClassName={cn( // Merge default and custom container class names
        "flex items-center gap-2 has-[:disabled]:opacity-50",
        containerClassName
      )}
      className={cn("disabled:cursor-not-allowed", className)} // Merge input-specific class names
      {...props} // Spread remaining props
    />
  )
)
// Set a display name for easier debugging
InputOTP.displayName = "InputOTP"

// Create a wrapper group component for the OTP inputs
const InputOTPGroup = React.forwardRef< // Start of component definition
  React.ElementRef<"div">, // Ref type set to div
  React.ComponentPropsWithoutRef<"div"> // Props type for div
>(
  // Component definition using forwardRef
  ({ className, ...props }, ref) => (
    // Render a div wrapping input slots
    <div ref={ref} className={cn("flex items-center", className)} {...props} />
  )
)
// Set display name for InputOTPGroup
InputOTPGroup.displayName = "InputOTPGroup"

// Define a slot for each OTP digit
const InputOTPSlot = React.forwardRef< // Start of component definition
  React.ElementRef<"div">, // Ref type is div
  React.ComponentPropsWithoutRef<"div"> & { index: number } // Props include index to access slot data
>(
  // Component definition using forwardRef
  ({ index, className, ...props }, ref) => {
    // Get slot context from OTPInputContext
    const inputOTPContext = React.useContext(OTPInputContext)
    // Destructure current slot info from the context using the index
    const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

    // Render the individual OTP slot
    return (
      <div
        ref={ref} // Forward the ref
        className={cn( // Combine default and conditional styles
          "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
          isActive && "z-10 ring-2 ring-ring ring-offset-background",
          className
        )}
        {...props} // Spread remaining props
      >
        {char} {/* Render the character if present */}
        {hasFakeCaret && ( // If the fake caret should be shown
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" /> {/* Blinking caret */}
          </div>
        )}
      </div>
    )
  }
)
// Set display name for InputOTPSlot
InputOTPSlot.displayName = "InputOTPSlot"

// Define the separator used between OTP input groups
const InputOTPSeparator = React.forwardRef< // Start of component definition
  React.ElementRef<"div">, // Ref type is div
  React.ComponentPropsWithoutRef<"div"> // Props for a div
>(
  // Component definition using forwardRef
  ({ ...props }, ref) => (
    // Render a div with role=separator and Dot icon
    <div ref={ref} role="separator" {...props}>
      <Dot /> {/* Icon representing the separator */}
    </div>
  )
)
// Set display name for InputOTPSeparator
InputOTPSeparator.displayName = "InputOTPSeparator"

// Export all custom OTP components
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
