// Import React and hooks
import React, { useState, useEffect } from 'react';
// Import main layout wrapper
import MainLayout from '@/layouts/MainLayout';
// Import individual components
import EventCard from '@/components/EventCard';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
// Import utility functions and types
import { EventCategory, filterEvents } from '@/utils/mockData';
// Import routing hook
import { useLocation } from 'react-router-dom';
// Import UI components
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
// Import icons
import { Calendar, List, Loader2 } from 'lucide-react';

const EventList = () => {
  // Get URL query params
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category') as EventCategory | null;
  
  // Define state variables
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<EventCategory | null>(categoryParam);
  const [sortBy, setSortBy] = useState<'date' | 'price-low' | 'price-high'>('date');
  const [isLoading, setIsLoading] = useState(true);
  const [filteredEvents, setFilteredEvents] = useState(filterEvents(selectedCategory, searchQuery, sortBy));

  // Update events on filter/search/sort change
  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    const timer = setTimeout(() => {
      // Filter events based on current criteria
      setFilteredEvents(filterEvents(selectedCategory, searchQuery, sortBy));
      setIsLoading(false);
    }, 500);
    
    // Clear timer on unmount
    return () => clearTimeout(timer);
  }, [selectedCategory, searchQuery, sortBy]);

  // Handle search input
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Handle category change
  const handleCategoryChange = (category: EventCategory | null) => {
    setSelectedCategory(category);
  };

  // Handle sort option change
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
        
        {/* Filters Section */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <SearchBar onSearch={handleSearch} />
          
          {/* Category and Sort Filters */}
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {/* Category Filter */}
            <CategoryFilter 
              selectedCategory={selectedCategory} 
              onCategoryChange={handleCategoryChange} 
            />
            
            {/* Sort Dropdown */}
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
                  {/* Sort by Date */}
                  <SelectItem value="date">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Date (Upcoming)
                    </div>
                  </SelectItem>
                  {/* Sort by Price Low to High */}
                  <SelectItem value="price-low">
                    <div className="flex items-center">
                      <List className="w-4 h-4 mr-2" />
                      Price (Low to High)
                    </div>
                  </SelectItem>
                  {/* Sort by Price High to Low */}
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
        
        {/* Events Section */}
        {isLoading ? (
          // Show loader while fetching events
          <div className="flex justify-center items-center min-h-[400px]">
            <Loader2 className="h-8 w-8 animate-spin text-elite-purple" />
          </div>
        ) : filteredEvents.length > 0 ? (
          // Display event cards
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          // Show no results message
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

// Export component
export default EventList;
