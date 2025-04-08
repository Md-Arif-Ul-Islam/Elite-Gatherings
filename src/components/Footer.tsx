
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  // Function to handle smooth navigation and scroll to top
  const handleNavigation = (path: string) => {
    // Navigate to the desired path
    navigate(path);
    // Scroll to top with smooth behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-elite-dark text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Elite Gatherings</h3>
            <p className="text-gray-300 mb-4">Creating unforgettable moments through exceptional event management.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavigation('/events')} 
                  className="text-gray-300 hover:text-white transition-colors text-left w-full"
                >
                  All Events
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/about')} 
                  className="text-gray-300 hover:text-white transition-colors text-left w-full"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/contact')} 
                  className="text-gray-300 hover:text-white transition-colors text-left w-full"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/register')} 
                  className="text-gray-300 hover:text-white transition-colors text-left w-full"
                >
                  Register
                </button>
              </li>
            </ul>
          </div>

          {/* Event Categories */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Event Categories</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavigation('/events?category=Wedding')} 
                  className="text-gray-300 hover:text-white transition-colors text-left w-full"
                >
                  Weddings
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/events?category=Corporate')} 
                  className="text-gray-300 hover:text-white transition-colors text-left w-full"
                >
                  Corporate Events
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/events?category=Concert')} 
                  className="text-gray-300 hover:text-white transition-colors text-left w-full"
                >
                  Concerts
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/events?category=Party')} 
                  className="text-gray-300 hover:text-white transition-colors text-left w-full"
                >
                  Parties
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/events?category=Conference')} 
                  className="text-gray-300 hover:text-white transition-colors text-left w-full"
                >
                  Conferences
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/events?category=Exhibition')} 
                  className="text-gray-300 hover:text-white transition-colors text-left w-full"
                >
                  Exhibitions
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-300">Hatsingimari,783135</p>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <p className="text-gray-300">+91 6002507274, 9957428261</p>
               
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <p className="text-gray-300">elitegatherings@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-700">
          <p className="text-center text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} Elite Gatherings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
