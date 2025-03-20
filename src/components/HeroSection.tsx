
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Search } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-elite-dark text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2669&auto=format&fit=crop)', 
          opacity: '0.5' 
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Create Unforgettable Events
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            From elegant weddings to corporate conferences, we make every moment special.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="text-md">
              <Link to="/events">
                <Search className="mr-2 h-5 w-5" />
                Explore Events
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-md bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20">
              <Link to="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Plan Your Event
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Wave Shape Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto fill-background">
          <path d="M0,96L60,80C120,64,240,32,360,32C480,32,600,64,720,69.3C840,75,960,53,1080,42.7C1200,32,1320,32,1380,32L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
