// Importing React for JSX support
import React from 'react';
// Importing the main layout component for consistent page structure
import MainLayout from '@/layouts/MainLayout';
// Importing icon components from lucide-react for UI visuals
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
// Importing a styled Button component
import { Button } from '@/components/ui/button';
// Importing a styled Input component
import { Input } from '@/components/ui/input';
// Importing a styled Textarea component
import { Textarea } from '@/components/ui/textarea';
// Importing a styled Label component
import { Label } from '@/components/ui/label';
// Importing Card and CardContent components for section layout
import { Card, CardContent } from '@/components/ui/card';
// Importing toast notification from 'sonner' library
import { toast } from 'sonner';

// Defining the Contact component
const Contact = () => {
  // Handler function for form submission
  const handleSubmit = (e: React.FormEvent) => {
    // Preventing default form submission behavior
    e.preventDefault();
    // Showing a success toast message
    toast.success('Your message has been sent! We will get back to you soon.');
  };
  
  // Returning the JSX to render the Contact page
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1> {/* Main heading */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {/* Subheading text */}
              Have questions or ready to plan your event? Get in touch with our team.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information and Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information Section */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2> {/* Section heading */}
              <p className="text-muted-foreground mb-8">
                {/* Description text */}
                Whether you're looking to organize a corporate event, plan your dream wedding, or host a concert, our team is here to help. Reach out to us through the form or using the contact details below.
              </p>
              
              {/* Contact details cards */}
              <div className="space-y-6">
                {/* Office Address Card */}
                <Card>
                  <CardContent className="flex items-start p-6">
                    <MapPin className="h-5 w-5 text-elite-purple mr-4 mt-0.5" /> {/* Icon */}
                    <div>
                      <h3 className="font-semibold mb-1">Our Office</h3>
                      <p className="text-muted-foreground">123 Event Plaza, New York, NY 10001</p>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Phone Number Card */}
                <Card>
                  <CardContent className="flex items-start p-6">
                    <Phone className="h-5 w-5 text-elite-purple mr-4 mt-0.5" /> {/* Icon */}
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Email Address Card */}
                <Card>
                  <CardContent className="flex items-start p-6">
                    <Mail className="h-5 w-5 text-elite-purple mr-4 mt-0.5" /> {/* Icon */}
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@elitegatherings.com</p>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Business Hours Card */}
                <Card>
                  <CardContent className="flex items-start p-6">
                    <Clock className="h-5 w-5 text-elite-purple mr-4 mt-0.5" /> {/* Icon */}
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 9am - 6pm</p>
                      <p className="text-muted-foreground">Saturday: 10am - 4pm</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Contact Form Section */}
            <div>
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2> {/* Form heading */}
                  
                  {/* Form starts */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name fields in 2-column grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label> {/* First name label */}
                        <Input id="firstName" placeholder="John" required /> {/* First name input */}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label> {/* Last name label */}
                        <Input id="lastName" placeholder="Doe" required /> {/* Last name input */}
                      </div>
                    </div>
                    
                    {/* Email input */}
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" required />
                    </div>
                    
                    {/* Phone input */}
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" placeholder="+1 (___) ___-____" />
                    </div>
                    
                    {/* Subject input */}
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Event Inquiry" required />
                    </div>
                    
                    {/* Message input area */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your event or inquiry..." 
                        rows={5}
                        required
                      />
                    </div>
                    
                    {/* Submit button */}
                    <Button type="submit" className="w-full flex items-center justify-center gap-2">
                      Send Message
                      <Send className="h-4 w-4" /> {/* Send icon */}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Embedded Google Map Section */}
      <section className="py-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="rounded-lg overflow-hidden h-96 shadow-md">
            <iframe
              // Google Maps embed URL
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830936557!2d-74.11976383964463!3d40.69766374865766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1683659303612!5m2!1sen!2sin"
              className="w-full h-full" // Full width and height
              style={{ border: 0 }} // No border
              allowFullScreen // Allow fullscreen mode
              loading="lazy" // Lazy loading for performance
              referrerPolicy="no-referrer-when-downgrade" // Referrer policy setting
            ></iframe>
          </div>
        </div>
      </section>
    </MainLayout> // Wrapping all content inside MainLayout
  );
};

// Exporting the Contact component as default
export default Contact;
