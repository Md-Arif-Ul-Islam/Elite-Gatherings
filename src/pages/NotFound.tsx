// Import useLocation hook to access current route info
import { useLocation } from "react-router-dom";
// Import useEffect hook for side effects
import { useEffect } from "react";

// Define the NotFound component
const NotFound = () => {
  // Get the current location object using useLocation
  const location = useLocation();

  // useEffect runs once on component mount or when location.pathname changes
  useEffect(() => {
    // Log the 404 error with the attempted route to console
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]); // Dependency array: rerun effect if pathname changes

  // Return the UI for 404 Not Found page
  return (
    // Full-screen container with center-aligned content and gray background
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Text content centered */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1> {/* Big 404 title */}
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p> {/* Subtitle message */}
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home {/* Link back to homepage */}
        </a>
      </div>
    </div>
  );
};

// Export NotFound as default
export default NotFound;
