
import React, { useState, useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import EventCard from '@/components/EventCard';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import { EventCategory, filterEvents } from '@/utils/mockData';
import { useLocation } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar, List, Loader2 } from 'lucide-react';

const EventList = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category') as EventCategory | null;
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<EventCategory | null>(categoryParam);
  const [sortBy, setSortBy] = useState<'date' | 'price-low' | 'price-high'>('date');
  const [isLoading, setIsLoading] = useState(true);
  const [filteredEvents, setFilteredEvents] = useState(filterEvents(selectedCategory, searchQuery, sortBy));

  useEffect(() => {
    // Simulate data loading
    setIsLoading(true);
    const timer = setTimeout(() => {
      setFilteredEvents(filterEvents(selectedCategory, searchQuery, sortBy));
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [selectedCategory, searchQuery, sortBy]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category: EventCategory | null) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value as 'date' | 'price-low' | 'price-high');
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Event Listings</h1>
          <p className="text-muted-foreground">
            Discover and book from our wide range of events
          </p>
        </div>
        
        {/* Filters */}
        <div className="mb-8 space-y-4">
          <SearchBar onSearch={handleSearch} />
          
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <CategoryFilter 
              selectedCategory={selectedCategory} 
              onCategoryChange={handleCategoryChange} 
            />
            
            <div className="flex items-center">
              <span className="mr-2 text-sm text-muted-foreground">Sort by:</span>
              <Select 
                value={sortBy} 
                onValueChange={handleSortChange}
              >
                <SelectTrigger className="w-44">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Date (Upcoming)
                    </div>
                  </SelectItem>
                  <SelectItem value="price-low">
                    <div className="flex items-center">
                      <List className="w-4 h-4 mr-2" />
                      Price (Low to High)
                    </div>
                  </SelectItem>
                  <SelectItem value="price-high">
                    <div className="flex items-center">
                      <List className="w-4 h-4 mr-2" />
                      Price (High to Low)
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        {/* Results Section */}
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <Loader2 className="h-8 w-8 animate-spin text-elite-purple" />
          </div>
        ) : filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <h3 className="text-2xl font-semibold mb-2">No events found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
        
        {/* Results Count */}
        {!isLoading && filteredEvents.length > 0 && (
          <div className="mt-8 text-sm text-muted-foreground text-right">
            Showing {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default EventList;
