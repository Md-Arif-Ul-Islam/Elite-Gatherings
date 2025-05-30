
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Event } from '@/utils/mockData';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, IndianRupee } from 'lucide-react';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const { id, title, date, time, location, price, imageUrl, category } = event;
  
  // Format date to be more readable
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  // Calculate availability percentage
  const availabilityPercentage = ((event.capacity - event.bookedSeats) / event.capacity) * 100;
  
  return (
    <Card className="overflow-hidden event-card h-full flex flex-col">
      <div className="relative">
        <Link to={`/events/${id}`}>
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          />
        </Link>
        <Badge className="absolute top-4 right-4 bg-elite-purple">{category}</Badge>
      </div>
      <CardContent className="pt-6 flex-grow">
        <Link to={`/events/${id}`}>
          <h3 className="text-xl font-semibold mb-2 line-clamp-1 hover:text-elite-purple transition-colors">{title}</h3>
        </Link>
        
        <div className="space-y-3 text-sm text-muted-foreground mt-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-elite-purple" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-elite-purple" />
            <span>{time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-elite-purple" />
            <span className="line-clamp-1">{location}</span>
          </div>
        </div>
        
        {/* Availability Indicator */}
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-1">
            <span>Availability</span>
            <span>{event.capacity - event.bookedSeats} seats left</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-elite-purple h-2 rounded-full" 
              style={{ width: `${availabilityPercentage}%` }}
            ></div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="border-t pt-4 flex justify-between items-center">
        <div className="flex items-center">
          <IndianRupee className="h-4 w-4 text-elite-purple" />
          <span className="font-bold">{price.toLocaleString()}</span>
        </div>
        <Button 
          asChild 
          size="sm" 
          className="bg-elite-purple hover:bg-elite-darkPurple transition-colors"
        >
          <Link to={`/events/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;