
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Share2, 
  DollarSign, 
  ShoppingCart,
  Star,
  ExternalLink
} from 'lucide-react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { getEventById, getRelatedEvents } from '@/utils/mockData';
import EventCard from '@/components/EventCard';
import { toast } from 'sonner';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const EventDetails = () => {
  const { id } = useParams<{ id: string }>();
  const event = getEventById(id || '');
  const [quantity, setQuantity] = useState('1');
  
  if (!event) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Event Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The event you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/events">Browse Events</Link>
          </Button>
        </div>
      </MainLayout>
    );
  }
  
  const relatedEvents = getRelatedEvents(event.id, event.category, 3);
  
  // Format date to be more readable
  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  // Calculate remaining seats
  const remainingSeats = event.capacity - event.bookedSeats;
  
  const handleAddToCart = () => {
    toast.success(`Added ${quantity} ticket${parseInt(quantity) > 1 ? 's' : ''} to cart`, {
      description: `${event.title} - ${formattedDate}`,
      action: {
        label: "View Cart",
        onClick: () => console.log("View cart clicked")
      }
    });
  };
  
  const handleBookNow = () => {
    toast.success(`Event booked successfully!`, {
      description: `${event.title} - ${quantity} ticket${parseInt(quantity) > 1 ? 's' : ''}`,
    });
  };
  
  const handleShare = () => {
    // In a real app, this would use the Web Share API
    toast.info("Share feature", {
      description: "This would open a share dialog in a complete implementation."
    });
  };
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image */}
            <div className="relative mb-6">
              <img 
                src={event.imageUrl} 
                alt={event.title} 
                className="w-full h-80 object-cover rounded-lg"
              />
              <Badge className="absolute top-4 right-4 bg-elite-purple">{event.category}</Badge>
            </div>
            
            {/* Title and basic info */}
            <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-muted-foreground">
                <Calendar className="mr-2 h-4 w-4 text-elite-purple" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Clock className="mr-2 h-4 w-4 text-elite-purple" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="mr-2 h-4 w-4 text-elite-purple" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Users className="mr-2 h-4 w-4 text-elite-purple" />
                <span>{remainingSeats} seats available</span>
              </div>
            </div>
            
            {/* Tabs for Description, Venue, Reviews */}
            <Tabs defaultValue="description" className="mt-8">
              <TabsList className="mb-6">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="venue">Venue Information</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="text-lg leading-relaxed">
                <p>{event.description}</p>
                <p className="mt-4">
                  Join us for this unforgettable event experience. Our dedicated team ensures that every detail is carefully planned and executed to create lasting memories for all attendees.
                </p>
                <p className="mt-4">
                  Limited seats are available, so book early to avoid disappointment. All tickets include full access to the event, complementary refreshments, and exclusive event materials.
                </p>
              </TabsContent>
              
              <TabsContent value="venue">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Venue Details</h3>
                    <p className="mb-4">
                      The venue offers state-of-the-art facilities to ensure all guests have an exceptional experience.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-elite-purple mr-2">•</span>
                        <span>Wheelchair accessible</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-elite-purple mr-2">•</span>
                        <span>Free parking available</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-elite-purple mr-2">•</span>
                        <span>Climate controlled environment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-elite-purple mr-2">•</span>
                        <span>High-quality audio-visual equipment</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Location</h3>
                    <div className="bg-gray-200 rounded-lg h-40 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-8 w-8 text-elite-purple mx-auto mb-2" />
                        <p>Interactive map would be displayed here</p>
                        <Button variant="link" className="mt-2">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Open in Google Maps
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Customer Reviews</h3>
                    <div className="flex items-center">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            className={`h-5 w-5 ${star <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-muted-foreground">4.0 out of 5</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  {/* Sample reviews */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center mb-2">
                        <div className="w-10 h-10 bg-elite-purple/20 rounded-full flex items-center justify-center mr-3">
                          <span className="font-semibold text-elite-purple">JD</span>
                        </div>
                        <div>
                          <p className="font-semibold">John Doe</p>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star 
                                key={star} 
                                className={`h-4 w-4 ${star <= 5 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        Amazing event! The organization was perfect and the content exceeded my expectations. Would definitely attend again next year.
                      </p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <div className="flex items-center mb-2">
                        <div className="w-10 h-10 bg-elite-purple/20 rounded-full flex items-center justify-center mr-3">
                          <span className="font-semibold text-elite-purple">AS</span>
                        </div>
                        <div>
                          <p className="font-semibold">Alice Smith</p>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star 
                                key={star} 
                                className={`h-4 w-4 ${star <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        Great venue and excellent speakers. The networking opportunities were valuable. Only downside was the limited parking available.
                      </p>
                    </div>
                    
                    <Button variant="outline" className="w-full">
                      Load More Reviews
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            {/* Related Events */}
            {relatedEvents.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Similar Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedEvents.map((relatedEvent) => (
                    <EventCard key={relatedEvent.id} event={relatedEvent} />
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Sidebar - Booking & Details */}
          <div className="lg:col-span-1">
            <div className="bg-white border rounded-lg shadow-sm p-6 sticky top-4">
              <div className="flex items-center mb-4">
                <DollarSign className="h-6 w-6 text-elite-purple" />
                <span className="text-2xl font-bold">${event.price.toLocaleString()}</span>
                <span className="text-muted-foreground ml-2">per person</span>
              </div>
              
              <Separator className="my-4" />
              
              {/* Availability */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Availability</h3>
                <div className="flex justify-between text-sm mb-1">
                  <span>Remaining Seats</span>
                  <span className={remainingSeats < 10 ? 'text-red-500 font-semibold' : ''}>{remainingSeats} left</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-elite-purple h-2 rounded-full" 
                    style={{ width: `${(remainingSeats / event.capacity) * 100}%` }}
                  ></div>
                </div>
                {remainingSeats < 10 && (
                  <p className="text-sm text-red-500 mt-2">
                    Hurry! Only a few seats left.
                  </p>
                )}
              </div>
              
              {/* Quantity Selector */}
              <div className="mb-6">
                <label htmlFor="quantity" className="block font-semibold mb-2">
                  Number of Tickets
                </label>
                <Select
                  value={quantity}
                  onValueChange={setQuantity}
                >
                  <SelectTrigger id="quantity">
                    <SelectValue placeholder="Select quantity" />
                  </SelectTrigger>
                  <SelectContent>
                    {[...Array(Math.min(10, remainingSeats))].map((_, i) => (
                      <SelectItem key={i + 1} value={(i + 1).toString()}>
                        {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Total Price */}
              <div className="mb-6">
                <div className="flex justify-between font-semibold">
                  <span>Total Price:</span>
                  <span>${(event.price * parseInt(quantity)).toLocaleString()}</span>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-3">
                <Button className="w-full" onClick={handleBookNow}>
                  Book Now
                </Button>
                <Button variant="outline" className="w-full" onClick={handleAddToCart}>
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <Button variant="ghost" className="w-full" onClick={handleShare}>
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Event
                </Button>
              </div>
              
              <Separator className="my-6" />
              
              {/* Contact Info */}
              <div>
                <h3 className="font-semibold mb-2">Have Questions?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Contact our support team for any inquiries about this event.
                </p>
                <Button variant="link" className="p-0 h-auto text-elite-purple">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default EventDetails;
