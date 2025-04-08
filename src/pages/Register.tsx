// Import React
import React from 'react';
// Import Link for client-side navigation
import { Link } from 'react-router-dom';
// Import MainLayout for page structure
import MainLayout from '@/layouts/MainLayout';
// Import UI components
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
// Import toast for notifications
import { toast } from 'sonner';

// Define the Register component
const Register = () => {
  // Form submit handler
  const handleSubmit = (e: React.FormEvent) => {
    // Prevent default form submission behavior
    e.preventDefault();
    // Show success toast message
    toast.success('Registration successful!', {
      description: 'Welcome to Elite Gatherings'
    });
  };

  // JSX for the component UI
  return (
    // Wrap with main layout
    <MainLayout>
      {/* Container for the form */}
      <div className="container mx-auto px-4 py-12">
        {/* Center the form */}
        <div className="max-w-md mx-auto">
          {/* Heading section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Create an Account</h1> {/* Title */}
            <p className="text-muted-foreground mt-2">
              Join Elite Gatherings to book and manage events {/* Subtitle */}
            </p>
          </div>
          
          {/* Form card */}
          <div className="bg-white p-8 rounded-lg border shadow-sm">
            {/* Form starts */}
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* First & Last name fields side by side */}
              <div className="grid grid-cols-2 gap-4">
                {/* First Name */}
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label> {/* Label */}
                  <Input 
                    id="firstName" 
                    placeholder="Enter first name" 
                    required 
                  />
                </div>
                {/* Last Name */}
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Enter last name" 
                    required 
                  />
                </div>
              </div>
              
              {/* Email field */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Enter your email" 
                  required 
                />
              </div>
              
              {/* Password field */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Create a password" 
                  required 
                />
                {/* Password requirement note */}
                <p className="text-xs text-muted-foreground">
                  Password must be at least 8 characters with a number and special character
                </p>
              </div>
              
              {/* Confirm Password field */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input 
                  id="confirmPassword" 
                  type="password" 
                  placeholder="Confirm your password" 
                  required 
                />
              </div>
              
              {/* Terms and Conditions checkbox */}
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" className="mt-1" required /> {/* Checkbox */}
                <Label htmlFor="terms" className="text-sm">
                  I agree to the{' '}
                  <Link to="/terms" className="text-elite-purple hover:underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-elite-purple hover:underline">
                    Privacy Policy
                  </Link>
                </Label>
              </div>
              
              {/* Submit Button */}
              <Button type="submit" className="w-full">
                Create Account
              </Button>
            </form>
            
            {/* Link to login if account exists */}
            <div className="mt-6 text-center text-sm">
              <p className="text-muted-foreground">
                Already have an account?{' '}
                <Link to="/login" className="text-elite-purple hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

// Export the component
export default Register;
