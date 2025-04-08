// Import necessary React tools
import * as React from "react"

// Import utility for conditional class names
import { cn } from "@/lib/utils"

// Define props for the Textarea component extending default textarea props
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

// Create the Textarea component with forwarded ref
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

// Set display name for better debugging
Textarea.displayName = "Textarea"

// Export the Textarea component
export { Textarea }
