// Import utility function for conditional class names
import { cn } from "@/lib/utils"

// Skeleton component for loading placeholder
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    // Render a div with pulse animation and optional custom classes
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

// Export the Skeleton component
export { Skeleton }
