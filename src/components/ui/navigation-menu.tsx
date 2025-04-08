// Importing React and necessary types
import * as React from "react"

// Importing components from radix-ui for navigation menu
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"

// Importing utility for class variance
import { cva } from "class-variance-authority"

// Importing icon component
import { ChevronDown } from "lucide-react"

// Importing utility function for conditional classNames
import { cn } from "@/lib/utils"

// Creating NavigationMenu component with forwarded ref
const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(
  ({ className, children, ...props }, ref) => (
    // Root element of the navigation menu
    <NavigationMenuPrimitive.Root
      ref={ref}
      className={cn(
        "relative z-10 flex max-w-max flex-1 items-center justify-center", // Default styling
        className // Allowing override via props
      )}
      {...props}
    >
      {children}
      <NavigationMenuViewport /> {/* Viewport displayed for menu items */}
    </NavigationMenuPrimitive.Root>
  )
)
// Set display name for debugging
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

// Creating wrapper for list of navigation items
const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(
  ({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.List
      ref={ref}
      className={cn(
        "group flex flex-1 list-none items-center justify-center space-x-1", // Default layout for menu list
        className
      )}
      {...props}
    />
  )
)
// Set display name
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

// Shortcut alias for NavigationMenuPrimitive.Item
const NavigationMenuItem = NavigationMenuPrimitive.Item

// Base style for triggers in navigation menu using cva
const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
)

// Navigation menu trigger component with ChevronDown icon
const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(
  ({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Trigger
      ref={ref}
      className={cn(navigationMenuTriggerStyle(), "group", className)} // Merge base style with optional class
      {...props}
    >
      {children}{" "}
      <ChevronDown
        className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" // Rotate on open
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
)
// Set display name
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

// Navigation menu content shown when trigger is active
const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(
  ({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Content
      ref={ref}
      className={cn(
        "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto", // Responsive animation classes
        className
      )}
      {...props}
    />
  )
)
// Set display name
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

// Shortcut alias for navigation link
const NavigationMenuLink = NavigationMenuPrimitive.Link

// Viewport to display submenu panels
const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(
  ({ className, ...props }, ref) => (
    <div className={cn("absolute left-0 top-full flex justify-center")}>
      <NavigationMenuPrimitive.Viewport
        className={cn(
          "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]", // Responsive viewport container
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  )
)
// Set display name
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName

// Indicator shown below trigger when open
const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(
  ({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Indicator
      ref={ref}
      className={cn(
        "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in", // Styling for indicator animation
        className
      )}
      {...props}
    >
      <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" /> {/* Arrow shape */}
    </NavigationMenuPrimitive.Indicator>
  )
)
// Set display name
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName

// Export all components and styles for use
export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}
