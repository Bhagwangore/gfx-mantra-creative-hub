
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Smartphone, Globe, Video, Image, Users, PenTool, Palette, ChartBar, Search } from "lucide-react";

type Service = {
  id: number;
  name: string;
  price: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
};

const services: Service[] = [
  {
    id: 1,
    name: "Social Media Handling",
    price: "₹3,500/month",
    description: "Comprehensive social media management to boost your online presence",
    icon: <Users className="h-10 w-10 text-primary" />, 
    benefits: ["Daily content posts", "Community engagement", "Analytics reports", "Trend integration", "Strategy development"]
  },
  {
    id: 2,
    name: "Custom Post Design",
    price: "₹200/post",
    description: "Eye-catching post designs that enhance your brand identity",
    icon: <Image className="h-10 w-10 text-primary" />,
    benefits: ["Unique designs", "Brand-aligned visuals", "Quick turnaround", "Unlimited revisions", "High-resolution files"]
  },
  {
    id: 3,
    name: "Printing Material Design",
    price: "₹400",
    description: "Professional designs for all your printing needs",
    icon: <PenTool className="h-10 w-10 text-primary" />,
    benefits: ["Business cards", "Brochures", "Banners", "Flyers", "Print-ready files"]
  },
  {
    id: 4,
    name: "Web / App Development",
    price: "₹12,000",
    description: "Custom website development with stunning design and functionality",
    icon: <Globe className="h-10 w-10 text-primary" />,
    benefits: ["Responsive design", "SEO optimization", "Content management", "User-friendly interface", "Performance optimization"]
  },
  {
    id: 5,
    name: "Video Editing",
    price: "₹500",
    description: "Professional video editing to elevate your visual content",
    icon: <Video className="h-10 w-10 text-primary" />,
    benefits: ["Color grading", "Transitions", "Sound effects", "Motion graphics", "Quick delivery"]
  },
  {
    id: 6,
    name: "Reels Editing",
    price: "₹500",
    description: "Trending and engaging reels for maximum social media impact",
    icon: <Palette className="h-10 w-10 text-primary" />,
    benefits: ["Trend integration", "Music selection", "Visual effects", "Quick turnaround", "Platform optimization"]
  },
  {
    id: 7,
    name: "Digital Marketing",
    price: "₹15,000",
    description: "Strategic digital marketing campaigns to enhance your brand visibility",
    icon: <ChartBar className="h-10 w-10 text-primary" />,
    benefits: ["Targeted ads", "Email marketing", "Content strategy", "Lead generation", "Performance tracking"]
  },
  {
    id: 8,
    name: "SEO Handling",
    price: "₹15,000",
    description: "Optimized SEO strategies to improve your search engine ranking",
    icon: <Search className="h-10 w-10 text-primary" />,
    benefits: ["Keyword research", "On-page optimization", "Backlink building", "Analytics monitoring", "Technical SEO"]
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  
  const openServiceDialog = (service: Service) => {
    setSelectedService(service);
  };

  const handleContactWhatsApp = () => {
    window.open(`https://wa.me/917774015010?text=I'm interested in your ${selectedService?.name} service.`, '_blank');
  };

  const handleContactEmail = () => {
    window.open(`mailto:gfxmantra777@gmail.com?subject=Inquiry about ${selectedService?.name} service&body=Hi, I'm interested in your ${selectedService?.name} service. Please provide more information.`, '_blank');
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 left-0 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-blue-400/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We Offer a Wide Range of Creative Solutions to Elevate Your Brand
          </p>
          
          {/* Stats counter */}
          <div className="flex justify-center gap-10 mt-10 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-1">6+</div>
              <div className="text-sm text-muted-foreground">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-1">3+</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card glass hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-primary font-medium mb-3">Starting at {service.price}</p>
              <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
              <Button onClick={() => openServiceDialog(service)} className="w-full">
                Get Service
              </Button>
            </div>
          ))}
        </div>
      </div>
      
      {/* Service Dialog */}
      <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{selectedService?.name}</DialogTitle>
            <DialogDescription>
              Starting at {selectedService?.price}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <h4 className="font-medium">Service Benefits:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {selectedService?.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Contact us to get started:</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={handleContactWhatsApp} className="w-full bg-green-600 hover:bg-green-700">
                  WhatsApp
                </Button>
                <Button onClick={handleContactEmail} className="w-full">
                  Email
                </Button>
              </div>
              <p className='m-auto text-center mt-10'>gfxmantra777@gmail.com</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;
