// Importing everything from React library
import * as React from "react"

// Importing everything from the Radix UI Avatar component
import * as AvatarPrimitive from "@radix-ui/react-avatar"

// Importing a utility function for conditional classNames
import { cn } from "@/lib/utils"

// Creating a forwardRef component for Avatar root
const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>, // Getting the element type from AvatarPrimitive.Root
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> // Getting all props except ref for AvatarPrimitive.Root
>(
  ({ className, ...props }, ref) => ( // Destructuring className and other props, receiving ref
    <AvatarPrimitive.Root
      ref={ref} // Forwarding the ref
      className={cn( // Applying utility class and any additional className
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", // Default styling for the Avatar container
        className // Additional classNames passed from props
      )}
      {...props} // Spreading any other props
    />
  )
)

// Assigning display name for better debugging
Avatar.displayName = AvatarPrimitive.Root.displayName

// Creating a forwardRef component for Avatar image
const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>, // Getting the element type for AvatarPrimitive.Image
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> // Getting all props except ref
>(
  ({ className, ...props }, ref) => ( // Destructuring className and other props, receiving ref
    <AvatarPrimitive.Image
      ref={ref} // Forwarding the ref
      className={cn("aspect-square h-full w-full", className)} // Styling image to fit the container
      {...props} // Spreading the remaining props
    />
  )
)

// Assigning display name for better debugging
AvatarImage.displayName = AvatarPrimitive.Image.displayName

// Creating a forwardRef component for Avatar fallback (when image fails to load)
const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>, // Getting the element type
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> // Getting all props except ref
>(
  ({ className, ...props }, ref) => ( // Destructuring className and other props, receiving ref
    <AvatarPrimitive.Fallback
      ref={ref} // Forwarding the ref
      className={cn( // Applying fallback styling
        "flex h-full w-full items-center justify-center rounded-full bg-muted", // Centered, rounded fallback with background
        className // Additional classNames passed
      )}
      {...props} // Spreading the rest of the props
    />
  )
)

// Assigning display name for debugging
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

// Exporting all three components
export { Avatar, AvatarImage, AvatarFallback }
