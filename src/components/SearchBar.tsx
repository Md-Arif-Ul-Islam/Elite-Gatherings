// Import React and useState hook
import React, { useState } from 'react';

// Import custom Input and Button components
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Import Search icon
import { Search } from 'lucide-react';

// Define interface for SearchBar props
interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

// Define and export the SearchBar component
const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  placeholder = "Search for events..." 
}) => {
  
  // State to hold search input value
  const [searchQuery, setSearchQuery] = useState("");

  // Handle form submit and trigger onSearch
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    // Form container with flex layout
    <form onSubmit={handleSearch} className="w-full flex">
      
      {/* Input field for search */}
      <div className="relative flex-grow">
        <Input
          type="text"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pr-10"
        />
      </div>

      {/* Submit button with icon */}
      <Button type="submit" className="ml-2">
        <Search className="h-4 w-4 mr-2" />
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
