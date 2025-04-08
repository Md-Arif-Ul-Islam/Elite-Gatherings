// Import React for using JSX
import React from 'react';
// Import main layout wrapper
import MainLayout from '@/layouts/MainLayout';
// Import hero section component
import HeroSection from '@/components/HeroSection';
// Import featured events component
import FeaturedEvents from '@/components/FeaturedEvents';
// Import reusable button UI component
import { Button } from '@/components/ui/button';
// Import icons from lucide-react library
import { CheckCircle, Users, CalendarRange, Clock, Award, ArrowRight } from 'lucide-react';
// Import Link for navigation
import { Link } from 'react-router-dom';
// Import event categories data
import { categories } from '@/utils/mockData';

// Declare the Index functional component
const Index = () => {
  // Return the UI structure of the homepage
  return (
    // Wrap everything inside the main layout
    <MainLayout>
      {/* Render hero section at the top */}
      <HeroSection />
      
      {/* Render featured events section */}
      <FeaturedEvents />
      
      {/* Start of event categories section */}
      <section className="py-16 bg-slate-50">
        {/* Container for central alignment and padding */}
        <div className="container mx-auto px-4">
          {/* Section heading and subtext */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Event Categories</h2> // Main heading
            <p className="text-muted-foreground">Discover events tailored to your interests</p> // Subtext
          </div>
          
          {/* Grid layout for categories */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {/* Map through each category to render a box */}
            {categories.map((category) => (
              // Link to category-specific event list
              <Link 
                key={category} // Unique key for each item
                to={`/events?category=${category}`} // Navigation URL
                className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow hover-scale" // Styling and hover effects
              >
                {/* Category icon box with first letter */}
                <div className="w-16 h-16 bg-elite-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-elite-purple text-xl font-bold">{category.charAt(0)}</span> // First letter of category
                </div>
                {/* Category title */}
                <h3 className="font-semibold">{category}</h3>
                {/* Category description based on name */}
                <p className="text-sm text-muted-foreground mt-1">
                  {category === 'Wedding' && 'Elegant ceremonies'} // Description for Wedding
                  {category === 'Corporate' && 'Business events'} // Description for Corporate
                  {category === 'Concert' && 'Live music shows'} // Description for Concert
                  {category === 'Party' && 'Celebrations'} // Description for Party
                  {category === 'Conference' && 'Professional meets'} // Description for Conference
                  {category === 'Exhibition' && 'Showcase events'} // Description for Exhibition
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Start of Why Choose Us section */}
      <section className="py-16">
        {/* Container for alignment */}
        <div className="container mx-auto px-4">
          {/* Two-column grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side with text content */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Why Choose Elite Gatherings?</h2> // Heading
              <p className="text-lg text-muted-foreground mb-8">
                We provide exceptional event management services that ensure your special moments are memorable, stress-free, and perfectly executed.
              </p> // Description
              
              {/* List of benefits */}
              <div className="space-y-6">
                {/* Benefit item 1 */}
                <div className="flex items-start">
                  <div className="mr-4 text-elite-purple mt-1">
                    <CheckCircle className="h-6 w-6" /> // Check icon
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Professional Management</h3> // Title
                    <p className="text-muted-foreground">Our experienced team handles all aspects of event planning and execution.</p> // Description
                  </div>
                </div>
                
                {/* Benefit item 2 */}
                <div className="flex items-start">
                  <div className="mr-4 text-elite-purple mt-1">
                    <CheckCircle className="h-6 w-6" /> // Check icon
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Attention to Detail</h3>
                    <p className="text-muted-foreground">We focus on the small details that make your event special and unique.</p>
                  </div>
                </div>
                
                {/* Benefit item 3 */}
                <div className="flex items-start">
                  <div className="mr-4 text-elite-purple mt-1">
                    <CheckCircle className="h-6 w-6" /> // Check icon
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Premium Venues</h3>
                    <p className="text-muted-foreground">Access to exclusive locations that elevate your event experience.</p>
                  </div>
                </div>
              </div>
              
              {/* Contact us button */}
              <div className="mt-8">
                <Button asChild>
                  <Link to="/contact" className="flex items-center">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" /> // Arrow icon
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Right side with statistic cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {/* Card 1: Happy Clients */}
                <div className="bg-elite-purple text-white p-6 rounded-lg">
                  <Users className="h-8 w-8 mb-2" /> // Icon
                  <h3 className="text-2xl font-bold">500+</h3> // Number
                  <p>Happy Clients</p> // Label
                </div>
                {/* Card 2: Events Organized */}
                <div className="bg-white border p-6 rounded-lg">
                  <CalendarRange className="h-8 w-8 mb-2 text-elite-purple" />
                  <h3 className="text-2xl font-bold">1200+</h3>
                  <p>Events Organized</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                {/* Card 3: Experience */}
                <div className="bg-white border p-6 rounded-lg">
                  <Clock className="h-8 w-8 mb-2 text-elite-purple" />
                  <h3 className="text-2xl font-bold">10+ Years</h3>
                  <p>Experience</p>
                </div>
                {/* Card 4: Awards */}
                <div className="bg-elite-dark text-white p-6 rounded-lg">
                  <Award className="h-8 w-8 mb-2" />
                  <h3 className="text-2xl font-bold">25+</h3>
                  <p>Industry Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 bg-elite-purple text-white">
        {/* Container and centered text */}
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Dream Event?</h2> // CTA heading
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let our expert team help you plan and execute the perfect event that exceeds your expectations.
          </p> // CTA description
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="outline" className="border-white text-elite-purple hover:bg-white/20">
              <Link to="/events">Browse Events</Link> // Browse events button
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-elite-purple hover:bg-white/20">
              <Link to="/contact">Get Started</Link> // Get started button
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

// Export the Index component as default
export default Index;
