// Define the Event interface with all necessary properties
export interface Event {
  id: string; // Unique identifier for the event
  title: string; // Title of the event
  description: string; // Description of the event
  date: string; // Date of the event in YYYY-MM-DD format
  time: string; // Time of the event
  location: string; // Location where the event is held
  price: number; // Price of the event ticket
  imageUrl: string; // URL of the event image
  category: EventCategory; // Category of the event (wedding, concert, etc.)
  capacity: number; // Maximum number of attendees
  bookedSeats: number; // Currently booked seats
  featured: boolean; // Flag to mark featured events
}

// Define allowed event categories as a union type
export type EventCategory = 
  'Wedding' | 
  'Corporate' | 
  'Concert' | 
  'Party' | 
  'Conference' | 
  'Exhibition';

// Array of all available categories
export const categories: EventCategory[] = [
  'Wedding', 
  'Corporate', 
  'Concert', 
  'Party', 
  'Conference', 
  'Exhibition'
];

// Sample list of events used for display and logic
export const events: Event[] = [
  {
    id: '1',
    title: 'Luxury Wedding Reception',
    description: 'An exclusive wedding reception with elegant decorations, gourmet dining, and world-class entertainment.',
    date: '2023-12-15',
    time: '6:00 PM',
    location: 'Crystal Palace, New York',
    price: 5000,
    imageUrl: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop',
    category: 'Wedding',
    capacity: 200,
    bookedSeats: 120,
    featured: true
  },
  {
    id: '2',
    title: 'Annual Tech Conference',
    description: 'Connect with industry leaders and discover the latest innovations in technology.',
    date: '2023-11-10',
    time: '9:00 AM',
    location: 'Tech Hub, San Francisco',
    price: 1200,
    imageUrl: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=2073&auto=format&fit=crop',
    category: 'Conference',
    capacity: 500,
    bookedSeats: 350,
    featured: true
  },
  {
    id: '3',
    title: 'Summer Music Festival',
    description: 'Experience amazing performances from top artists across three stages in a beautiful outdoor setting.',
    date: '2023-07-22',
    time: '2:00 PM',
    location: 'Sunset Park, Los Angeles',
    price: 1500,
    imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop',
    category: 'Concert',
    capacity: 5000,
    bookedSeats: 3500,
    featured: true
  },
  {
    id: '4',
    title: 'Corporate Leadership Summit',
    description: 'An exclusive gathering for C-level executives to discuss future business trends and networking.',
    date: '2023-10-05',
    time: '10:00 AM',
    location: 'Grand Hyatt, Chicago',
    price: 2500,
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
    category: 'Corporate',
    capacity: 150,
    bookedSeats: 95,
    featured: false
  },
  {
    id: '5',
    title: 'New Year\'s Eve Gala',
    description: 'Ring in the new year with a spectacular celebration featuring live entertainment and a midnight countdown.',
    date: '2023-12-31',
    time: '8:00 PM',
    location: 'Ritz-Carlton, Miami',
    price: 30000,
    imageUrl: 'https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?q=80&w=2070&auto=format&fit=crop',
    category: 'Party',
    capacity: 400,
    bookedSeats: 280,
    featured: true
  },
  {
    id: '6',
    title: 'Art & Design Exhibition',
    description: 'Explore creative works from renowned artists and designers from around the world.',
    date: '2023-09-15',
    time: '11:00 AM',
    location: 'Modern Art Gallery, Seattle',
    price: 50,
    imageUrl: 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=2070&auto=format&fit=crop',
    category: 'Exhibition',
    capacity: 300,
    bookedSeats: 150,
    featured: false
  },
  {
    id: '7',
    title: 'Charity Fundraising Dinner',
    description: 'Support a good cause while enjoying fine dining and entertainment at this annual charity event.',
    date: '2023-11-18',
    time: '7:00 PM',
    location: 'Four Seasons Hotel, Boston',
    price: 200,
    imageUrl: 'https://images.unsplash.com/photo-1621258387478-d1d2b0026e30?q=80&w=2071&auto=format&fit=crop',
    category: 'Corporate',
    capacity: 250,
    bookedSeats: 180,
    featured: false
  },
  {
    id: '8',
    title: 'Destination Wedding Package',
    description: 'A complete beach wedding package with all arrangements and accommodations for your special day.',
    date: '2024-02-14',
    time: '4:00 PM',
    location: 'Beachfront Resort, Malibu',
    price: 8000,
    imageUrl: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d35ac?q=80&w=2069&auto=format&fit=crop',
    category: 'Wedding',
    capacity: 100,
    bookedSeats: 45,
    featured: true
  }
];

// Get a single event by its ID
export const getEventById = (id: string): Event | undefined => {
  return events.find(event => event.id === id);
};

// Get related events based on the same category, excluding current event
export const getRelatedEvents = (
  eventId: string, 
  category: EventCategory, 
  limit: number = 3
): Event[] => {
  return events
    .filter(event => event.id !== eventId && event.category === category)
    .slice(0, limit);
};

// Get a list of featured events, limited by count
export const getFeaturedEvents = (limit: number = 4): Event[] => {
  return events
    .filter(event => event.featured)
    .slice(0, limit);
};

// Filter events based on category, search query, and sorting preference
export const filterEvents = (
  categoryFilter: EventCategory | null,
  searchQuery: string,
  sortBy: 'date' | 'price-low' | 'price-high' = 'date'
): Event[] => {
  // Create a copy of the events array
  let filtered = [...events];
  
  // Filter by category if provided
  if (categoryFilter) {
    filtered = filtered.filter(event => event.category === categoryFilter);
  }

  // Filter by search query in title, description, or location
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(event => 
      event.title.toLowerCase().includes(query) || 
      event.description.toLowerCase().includes(query) ||
      event.location.toLowerCase().includes(query)
    );
  }

  // Sort based on selected option
  if (sortBy === 'date') {
    filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  } else if (sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  }

  // Return final filtered list
  return filtered;
};
