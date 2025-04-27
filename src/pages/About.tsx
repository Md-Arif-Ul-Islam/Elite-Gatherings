
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Check, Users, Calendar, Award, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Elite Gatherings</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Creating unforgettable experiences through exceptional event management services for over a decade.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Elite Gatherings was founded in 2010 with a simple mission: to transform ordinary events into extraordinary experiences. What began as a small team of passionate event planners has grown into a full-service event management company with a reputation for excellence.
              </p>
              <p className="text-muted-foreground mb-4">
                Our journey has been marked by creativity, innovation, and a relentless commitment to exceeding client expectations. We've had the privilege of organizing over 1,000 successful events across diverse categories, from intimate weddings to large-scale corporate conferences.
              </p>
              <p className="text-muted-foreground">
                Today, Elite Gatherings stands as a leader in the event management industry, known for our attention to detail, personalized approach, and ability to bring creative visions to life.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                alt="Team working together" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-elite-purple/10 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-elite-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in every aspect of our service, from the initial consultation to the final execution of your event.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-elite-purple/10 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-elite-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Creativity</h3>
              <p className="text-muted-foreground">
                We bring innovative ideas and creative solutions to make your event unique and memorable.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-elite-purple/10 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-elite-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                We operate with transparency, honesty, and ethical practices in all our business dealings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Meet Our Team</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Our talented team of event professionals brings diverse skills and experience to create exceptional events.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Dr. Aniruddha Deka", role: "Founder & CEO", image: "https://media.licdn.com/dms/image/v2/D4D03AQGPTVXIdqiuZw/profile-displayphoto-shrink_800_800/B4DZXymHkWHIAg-/0/1743531837651?e=1749686400&v=beta&t=i1jM0hzpXhYF5jwGvpdbqSCeqI26gVEnRkIvcej3iC8" },
              { name: "S M Zafor Abbasi", role: "Creative Director", image: "https://media.licdn.com/dms/image/v2/D5603AQFVGzSFf9HYpw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719895637791?e=1749686400&v=beta&t=ZT7h3Rx21LOUZWXbSlwyat09PAG-W4kEnjzCThwQcuM" },
              { name: "Sneha Saha", role: "Event Coordinator", image: "https://media.licdn.com/dms/image/v2/D4D03AQHvfbjxpELtkg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721504061651?e=1749686400&v=beta&t=z9CE6z7oodiPjCzuLTgeIvuw8Rvz2Fbj6R5ZjVAD700" },
              { name: "Md Arif Ul Islam", role: "Technical Director", image: "https://media.licdn.com/dms/image/v2/D4D03AQHiE8sz8hf4SQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1707549556441?e=1749686400&v=beta&t=JKfgYI-hHTg-I0nDi777OypYWTitTEPOP_OXGBDnZL0" }
            ].map((member, index) => (
              <div key={index} className="text-center hover-scale">
                <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-elite-purple text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <p>Events Organized</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p>Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <p>Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <p>Industry Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Next Event?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Get in touch with our team and let us help you create an unforgettable experience.
          </p>
          <Button asChild size="lg">
            <Link to="/contact" className="flex items-center">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
