// Import React module and hooks
import * as React from "react";

// Define the mobile screen width threshold
const MOBILE_BREAKPOINT = 768;

// Custom hook to detect if the viewport is mobile-sized
export function useIsMobile() {
  
  // State to track whether it's mobile view
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  // Effect to set initial value and handle screen resize changes
  React.useEffect(() => {

    // Media query for mobile screen
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    // Handler to update state on media query change
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Add event listener and set initial value
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    // Cleanup event listener on unmount
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Return a boolean indicating mobile status
  return !!isMobile;
}
