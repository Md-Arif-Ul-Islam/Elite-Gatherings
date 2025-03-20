
import React from 'react';
import { Link } from 'react-router-dom';
import EventCard from './EventCard';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { getFeaturedEvents } from '@/utils/mockData';

const FeaturedEvents: React.FC = () => {
  const featuredEvents = getFeaturedEvents(4);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Events</h2>
            <p className="text-muted-foreground">Discover our handpicked selection of premium events</p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link to="/events" className="flex items-center">
              View All Events <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

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
