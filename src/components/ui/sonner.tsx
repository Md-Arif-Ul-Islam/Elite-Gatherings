// Import theme hook from next-themes
import { useTheme } from "next-themes"
// Import Sonner Toaster component
import { Toaster as Sonner } from "sonner"

// Define type for Toaster props
type ToasterProps = React.ComponentProps<typeof Sonner>

// Create a Toaster component
const Toaster = ({ ...props }: ToasterProps) => {
  // Get current theme or fallback to system
  const { theme = "system" } = useTheme()

  // Return the styled Sonner component with dynamic theme and toast styles
  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

// Export the Toaster component
export { Toaster }
