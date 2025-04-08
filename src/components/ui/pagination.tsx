// Import React and required icons from lucide-react
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

// Import utility function for class merging
import { cn } from "@/lib/utils"
// Import button props and styles
import { ButtonProps, buttonVariants } from "@/components/ui/button"

// Pagination root component
const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  // Navigation element with accessible role and label
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)} // Centered layout
    {...props}
  />
)
// Set display name for debugging
Pagination.displayName = "Pagination"

// Wrapper for the pagination items list
const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)} // Horizontal layout with gap
    {...props}
  />
))
// Set display name
PaginationContent.displayName = "PaginationContent"

// Single pagination item (list item wrapper)
const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} /> // Allow custom styling
))
// Set display name
PaginationItem.displayName = "PaginationItem"

// Define props for PaginationLink component
type PaginationLinkProps = {
  isActive?: boolean // If true, marks link as active
} & Pick<ButtonProps, "size"> & // Include button sizing
  React.ComponentProps<"a"> // Extend anchor element props

// Pagination link component used for page numbers
const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined} // ARIA current if active
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost", // Active gets outlined
        size,
      }),
      className
    )}
    {...props}
  />
)
// Set display name
PaginationLink.displayName = "PaginationLink"

// Component for "Previous" page link
const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)} // Add spacing and left padding
    {...props}
  >
    <ChevronLeft className="h-4 w-4" /> {/* Left arrow icon */}
    <span>Previous</span> {/* Label */}
  </PaginationLink>
)
// Set display name
PaginationPrevious.displayName = "PaginationPrevious"

// Component for "Next" page link
const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)} // Add spacing and right padding
    {...props}
  >
    <span>Next</span> {/* Label */}
    <ChevronRight className="h-4 w-4" /> {/* Right arrow icon */}
  </PaginationLink>
)
// Set display name
PaginationNext.displayName = "PaginationNext"

// Component to render ellipsis icon when pages are skipped
const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)} // Centered ellipsis icon
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" /> {/* Ellipsis icon */}
    <span className="sr-only">More pages</span> {/* Screen reader text */}
  </span>
)
// Set display name
PaginationEllipsis.displayName = "PaginationEllipsis"

// Export all pagination components
export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
