// Importing custom toaster component for general notifications
import { Toaster } from "@/components/ui/toaster";

// Importing Sonner toaster for styled toast notifications
import { Toaster as Sonner } from "@/components/ui/sonner";

// Tooltip provider for managing all tooltips across the app
import { TooltipProvider } from "@/components/ui/tooltip";

// React Query imports for API state management
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// React Router imports for routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing page components
import Index from "./pages/Index";
import Events from "./pages/EventList";
import EventDetails from "./pages/EventDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

// Creating a new QueryClient instance for React Query
const queryClient = new QueryClient();

// Main App component
const App = () => (
  // Providing React Query context to the app
  <QueryClientProvider client={queryClient}>
    {/* Wrapping tooltips across the application */}
    <TooltipProvider>
      {/* Rendering both toast systems */}
      <Toaster />
      <Sonner />

      {/* Setting up browser routing */}
      <BrowserRouter>
        <Routes>
          {/* Home page route */}
          <Route path="/" element={<Index />} />

          {/* Events listing page */}
          <Route path="/events" element={<Events />} />

          {/* Dynamic event detail page */}
          <Route path="/events/:id" element={<EventDetails />} />

          {/* About page */}
          <Route path="/about" element={<About />} />

          {/* Contact page */}
          <Route path="/contact" element={<Contact />} />

          {/* Login page */}
          <Route path="/login" element={<Login />} />

          {/* Register page */}
          <Route path="/register" element={<Register />} />

          {/* Fallback route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

// Exporting the App component
export default App;
