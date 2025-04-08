// Import React for JSX and component functionality
import React from 'react';
// Import Link component for navigation between pages
import { Link } from 'react-router-dom';
// Import MainLayout component for consistent page layout
import MainLayout from '@/layouts/MainLayout';
// Import Input UI component
import { Input } from '@/components/ui/input';
// Import Button UI component
import { Button } from '@/components/ui/button';
// Import Label UI component
import { Label } from '@/components/ui/label';
// Import Checkbox UI component
import { Checkbox } from '@/components/ui/checkbox';
// Import toast from 'sonner' for showing success messages
import { toast } from 'sonner';

// Declare the Login functional component
const Login = () => {
  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submit behavior
    toast.success('Login successful!', {
      description: 'Welcome back to Elite Gatherings' // Toast message description
    });
  };

  // Return the UI for login form
  return (
    // Use MainLayout wrapper for page consistency
    <MainLayout>
      {/* Outer container with padding */}
      <div className="container mx-auto px-4 py-12">
        {/* Center the form horizontally */}
        <div className="max-w-md mx-auto">
          {/* Heading section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Welcome Back</h1> // Page title
            <p className="text-muted-foreground mt-2">
              Log in to your Elite Gatherings account // Subtext
            </p>
          </div>
          
          {/* Form container with border and shadow */}
          <div className="bg-white p-8 rounded-lg border shadow-sm">
            {/* Login form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email input field */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label> // Label for email field
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Enter your email" 
                  required // Make field mandatory
                />
              </div>
              
              {/* Password input field */}
              <div className="space-y-2">
                {/* Password label and forgot password link */}
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label> // Label for password
                  <Link 
                    to="/forgot-password" // Link to forgot password page
                    className="text-sm text-elite-purple hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Enter your password" 
                  required // Make field mandatory
                />
              </div>
              
              {/* Remember me checkbox */}
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" /> // Checkbox input
                <Label htmlFor="remember" className="text-sm">
                  Remember me for 30 days // Label next to checkbox
                </Label>
              </div>
              
              {/* Submit button */}
              <Button type="submit" className="w-full">
                Sign In // Button text
              </Button>
            </form>
            
            {/* Link to register page */}
            <div className="mt-6 text-center text-sm">
              <p className="text-muted-foreground">
                Don't have an account?{' '}
                <Link to="/register" className="text-elite-purple hover:underline">
                  Create an account // Link to registration page
                </Link>
              </p>
            </div>
          </div>
          
          {/* Terms and privacy policy notice */}
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              By signing in, you agree to our{' '}
              <Link to="/terms" className="text-elite-purple hover:underline">
                Terms of Service // Link to terms
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-elite-purple hover:underline">
                Privacy Policy // Link to privacy policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

// Export the Login component as default export
export default Login;
