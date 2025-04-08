// Import React
import React from 'react';

// Import routing and UI components
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

// Import event card and mock data utility
import EventCard from './EventCard';
import { getFeaturedEvents } from '@/utils/mockData';

// Define and export the FeaturedEvents component
const FeaturedEvents: React.FC = () => {
  // Get an array of featured events
  const featuredEvents = getFeaturedEvents(4);

  return (
    // Section wrapper
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Header with title and view all button */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Events</h2>
            <p className="text-muted-foreground">
              Discover our handpicked selection of premium events
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link to="/events" className="flex items-center">
              View All Events <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Grid of featured event cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
