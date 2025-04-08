
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { categories } from '@/utils/mockData';

interface EventFormProps {
  isEditing?: boolean;
  onSubmit: (event: React.FormEvent) => void;
}

const EventForm: React.FC<EventFormProps> = ({ isEditing = false, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="title">Event Title</Label>
          <Input id="title" placeholder="Enter event title" required />
        </div>
        
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea 
            id="description" 
            placeholder="Describe your event" 
            className="min-h-[120px]" 
            required 
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="date">Date</Label>
            <Input id="date" type="date" required />
          </div>
          <div>
            <Label htmlFor="time">Time</Label>
            <Input id="time" type="time" required />
          </div>
        </div>
        
        <div>
          <Label htmlFor="location">Location</Label>
          <Input id="location" placeholder="Event venue or address" required />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="price">Price (₹)</Label>
            <Input id="price" type="number" min="0" step="0.01" placeholder="0.00" required />
          </div>
          <div>
            <Label htmlFor="category">Category</Label>
            <Select>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="capacity">Total Capacity</Label>
            <Input id="capacity" type="number" min="1" placeholder="100" required />
          </div>
          <div>
            <Label htmlFor="featured">Featured Event</Label>
            <Select>
              <SelectTrigger id="featured">
                <SelectValue placeholder="Is this a featured event?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div>
          <Label htmlFor="image">Event Image</Label>
          <Input id="image" type="file" className="cursor-pointer" />
          {isEditing && (
            <p className="text-sm text-muted-foreground mt-1">
              Leave empty to keep the current image
            </p>
          )}
        </div>
      </div>
      
      <div className="flex justify-end space-x-2 pt-4">
        <Button type="button" variant="outline">
          Cancel
        </Button>
        <Button type="submit">
          {isEditing ? 'Update Event' : 'Create Event'}
        </Button>
      </div>
    </form>
  );
};

export default EventForm;
