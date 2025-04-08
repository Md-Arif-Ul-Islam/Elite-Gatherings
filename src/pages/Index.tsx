
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import HeroSection from '@/components/HeroSection';
import FeaturedEvents from '@/components/FeaturedEvents';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, CalendarRange, Clock, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '@/utils/mockData';

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured Events */}
      <FeaturedEvents />
      
      {/* Categories Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Event Categories</h2>
            <p className="text-muted-foreground">Discover events tailored to your interests</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link 
                key={category} 
                to={`/events?category=${category}`}
                className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow hover-scale"
              >
                <div className="w-16 h-16 bg-elite-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-elite-purple text-xl font-bold">{category.charAt(0)}</span>
                </div>
                <h3 className="font-semibold">{category}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {category === 'Wedding' && 'Elegant ceremonies'}
                  {category === 'Corporate' && 'Business events'}
                  {category === 'Concert' && 'Live music shows'}
                  {category === 'Party' && 'Celebrations'}
                  {category === 'Conference' && 'Professional meets'}
                  {category === 'Exhibition' && 'Showcase events'}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Why Choose Elite Gatherings?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We provide exceptional event management services that ensure your special moments are memorable, stress-free, and perfectly executed.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 text-elite-purple mt-1">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Professional Management</h3>
                    <p className="text-muted-foreground">Our experienced team handles all aspects of event planning and execution.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-elite-purple mt-1">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Attention to Detail</h3>
                    <p className="text-muted-foreground">We focus on the small details that make your event special and unique.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-elite-purple mt-1">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Premium Venues</h3>
                    <p className="text-muted-foreground">Access to exclusive locations that elevate your event experience.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button asChild>
                  <Link to="/contact" className="flex items-center">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-elite-purple text-white p-6 rounded-lg">
                  <Users className="h-8 w-8 mb-2" />
                  <h3 className="text-2xl font-bold">500+</h3>
                  <p>Happy Clients</p>
                </div>
                <div className="bg-white border p-6 rounded-lg">
                  <CalendarRange className="h-8 w-8 mb-2 text-elite-purple" />
                  <h3 className="text-2xl font-bold">1200+</h3>
                  <p>Events Organized</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white border p-6 rounded-lg">
                  <Clock className="h-8 w-8 mb-2 text-elite-purple" />
                  <h3 className="text-2xl font-bold">10+ Years</h3>
                  <p>Experience</p>
                </div>
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
      
      {/* Call To Action */}
      <section className="py-16 bg-elite-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Dream Event?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let our expert team help you plan and execute the perfect event that exceeds your expectations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="outline" className="border-white text-elite-purple hover:bg-white/20">
              <Link to="/events">Browse Events</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-elite-purple hover:bg-white/20">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
