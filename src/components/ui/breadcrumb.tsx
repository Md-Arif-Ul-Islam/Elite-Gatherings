// Importing everything from React
import * as React from "react"

// Importing Slot component from Radix UI (used for polymorphic behavior)
import { Slot } from "@radix-ui/react-slot"

// Importing icons from lucide-react
import { ChevronRight, MoreHorizontal } from "lucide-react"

// Utility for conditionally joining classNames
import { cn } from "@/lib/utils"

// Root breadcrumb navigation container
const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode // Optional custom separator
  }
>(
  ({ ...props }, ref) => (
    <nav ref={ref} aria-label="breadcrumb" {...props} /> // Adds ARIA label for accessibility
  )
)
Breadcrumb.displayName = "Breadcrumb" // For React DevTools

// List container for breadcrumb items
const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        // Default list styling: flex, wrap items, spacing, text styling
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        className // Allow additional className
      )}
      {...props}
    />
  )
)
BreadcrumbList.displayName = "BreadcrumbList"

// Single breadcrumb item wrapper
const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(
  ({ className, ...props }, ref) => (
    <li
      ref={ref}
      className={cn("inline-flex items-center gap-1.5", className)} // Flex with spacing
      {...props}
    />
  )
)
BreadcrumbItem.displayName = "BreadcrumbItem"

// Breadcrumb link component (can render as different component if `asChild` is true)
const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean
  }
>(
  ({ asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "a" // Use Slot if asChild, else use anchor tag

    return (
      <Comp
        ref={ref}
        className={cn("transition-colors hover:text-foreground", className)} // Style with hover
        {...props}
      />
    )
  }
)
BreadcrumbLink.displayName = "BreadcrumbLink"

// Current page text (not a link)
const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      role="link" // For screen readers
      aria-disabled="true" // Disabled for interaction
      aria-current="page" // Indicates it's the current page
      className={cn("font-normal text-foreground", className)} // Styling
      {...props}
    />
  )
)
BreadcrumbPage.displayName = "BreadcrumbPage"

// Separator between breadcrumb items (e.g., >)
const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    role="presentation" // Not announced by screen readers
    aria-hidden="true"
    className={cn("[&>svg]:size-3.5", className)} // Style for the icon size
    {...props}
  >
    {children ?? <ChevronRight />} // Use custom separator or default ChevronRight
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

// Ellipsis for collapsed items (e.g., when items overflow)
const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)} // Centered flex box
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" /> // Icon inside
    <span className="sr-only">More</span> // Screen reader-only label
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis" // (typo: should be BreadcrumbEllipsis)

// Exporting all components
export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
