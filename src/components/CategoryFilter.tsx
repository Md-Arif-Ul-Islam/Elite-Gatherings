// Import React and icons
import React from 'react';
import { Filter } from 'lucide-react';

// Import Button component
import { Button } from '@/components/ui/button';

// Import Dropdown menu components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Import category types and mock data
import { categories, EventCategory } from '@/utils/mockData';

// Define props interface
interface CategoryFilterProps {
  selectedCategory: EventCategory | null;
  onCategoryChange: (category: EventCategory | null) => void;
}

// Define and export the CategoryFilter component
const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    // Dropdown menu wrapper
    <DropdownMenu>
      {/* Trigger button */}
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center">
          <Filter className="h-4 w-4 mr-2" />
          {selectedCategory ? `Category: ${selectedCategory}` : 'Filter by Category'}
        </Button>
      </DropdownMenuTrigger>

      {/* Dropdown content */}
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Event Categories</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={selectedCategory || ''}
          onValueChange={(value) =>
            onCategoryChange(value ? (value as EventCategory) : null)
          }
        >
          {/* Option for all categories */}
          <DropdownMenuRadioItem value="">All Categories</DropdownMenuRadioItem>

          {/* Render each category option */}
          {categories.map((category) => (
            <DropdownMenuRadioItem key={category} value={category}>
              {category}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoryFilter;
