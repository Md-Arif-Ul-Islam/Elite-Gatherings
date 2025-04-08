// Import the grip icon used for draggable handles
import { GripVertical } from "lucide-react"
// Import panel components from react-resizable-panels
import * as ResizablePrimitive from "react-resizable-panels"

// Import utility function to conditionally combine class names
import { cn } from "@/lib/utils"

// Component for the wrapper group of resizable panels
const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  // Panel group which supports both horizontal and vertical directions
  <ResizablePrimitive.PanelGroup
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col", // Switch layout on vertical
      className
    )}
    {...props}
  />
)

// Re-exporting Panel component directly
const ResizablePanel = ResizablePrimitive.Panel

// Component for the resizable handle between panels
const ResizableHandle = ({
  withHandle, // If true, shows a draggable grip icon
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) => (
  // The actual handle element that users drag to resize panels
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      // Base styles for the resize bar with different orientation support
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    )}
    {...props}
  >
    {/* Optional draggable grip icon inside the handle */}
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
)

// Export all components
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
