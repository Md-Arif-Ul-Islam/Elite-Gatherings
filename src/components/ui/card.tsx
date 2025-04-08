// Import React and utility for combining class names
import * as React from "react"
import { cn } from "@/lib/utils" // Class name utility function

// ------------------- Card Container -------------------
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm", // Default styles
      className // Optional custom styles
    )}
    {...props}
  />
))
Card.displayName = "Card"

// ------------------- Card Header -------------------
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)} // Vertical spacing between title & description
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

// ------------------- Card Title -------------------
const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight", // Bold & compact heading
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

// ------------------- Card Description -------------------
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)} // Muted text for subtle look
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

// ------------------- Card Content -------------------
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} /> // Padding with no top padding
))
CardContent.displayName = "CardContent"

// ------------------- Card Footer -------------------
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)} // Aligns footer content horizontally
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

// Export all components for usage
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
