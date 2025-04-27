
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Calendar } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import axios from 'axios';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 

  return (
    <header className="w-full border-b sticky top-0 bg-background z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Calendar className="h-6 w-6 text-elite-purple mr-2" />
          <h1 className="text-2xl font-bold text-elite-purple">Elite Gatherings</h1>
        </Link>
        
        {/* Desktop Navigation with Hover Effects */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/events" 
            className="text-foreground hover:text-elite-purple transition-colors relative py-2 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-elite-purple after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
          >
            Events
          </Link>
          <Link 
            to="/about" 
            className="text-foreground hover:text-elite-purple transition-colors relative py-2 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-elite-purple after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="text-foreground hover:text-elite-purple transition-colors relative py-2 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-elite-purple after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
          >
            Contact
          </Link>
          <div className="flex items-center space-x-2">
            <Button variant="outline" asChild className="hover:bg-elite-purple hover:text-white transition-colors">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild className="bg-elite-purple hover:bg-elite-darkPurple transition-colors">
              <Link to="/register">Register</Link>
            </Button>
          
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-foreground p-2"
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/events" 
              className="text-foreground hover:text-elite-purple transition-colors py-2"
              onClick={toggleMenu}
            >
              Events
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-elite-purple transition-colors py-2"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground hover:text-elite-purple transition-colors py-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" asChild className="w-full hover:bg-elite-purple hover:text-white transition-colors">
                <Link to="/login" onClick={toggleMenu}>Login</Link>
              </Button>
              <Button asChild className="w-full bg-elite-purple hover:bg-elite-darkPurple transition-colors">
                <Link to="/register" onClick={toggleMenu}>Register</Link>
                Register
              </Button>
              
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
