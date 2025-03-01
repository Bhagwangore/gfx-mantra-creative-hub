
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Sample portfolio data
const portfolioItems = [
  {
    id: 1,
    title: "Social Media Campaign",
    category: "social-media",
    image: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 2,
    title: "Brand Identity Design",
    category: "printing",
    image: "https://images.unsplash.com/photo-1634942536970-29311d2584c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 3,
    title: "E-commerce Website",
    category: "web-design",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 4,
    title: "Product Showcase Video",
    category: "video-editing",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 5,
    title: "Marketing Brochure",
    category: "printing",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 6,
    title: "Instagram Stories",
    category: "social-media",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 7,
    title: "Mobile App UI Design",
    category: "web-design",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 8,
    title: "Product Promo Video",
    category: "video-editing",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
  }
];

// Categories
const categories = [
  { id: "all", label: "All" },
  { id: "social-media", label: "Social Media" },
  { id: "printing", label: "Printing" },
  { id: "web-design", label: "Web Design" },
  { id: "video-editing", label: "Video Editing" }
];

const Portfolio = () => {
  const [currentTab, setCurrentTab] = useState("all");

  const handleDownloadPortfolio = () => {
    // In a real implementation, this would download a PDF
    alert("This would download the PDF portfolio in a real implementation");
  };

  return (
    <section id="portfolio" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="section-title">Our Work</h2>
          <p className="section-subtitle">
            Explore Our Creative Projects and Success Stories
          </p>
        </div>
        
        <Tabs defaultValue="all" value={currentTab} onValueChange={setCurrentTab} className="w-full mb-10">
          <div className="flex justify-center mb-8">
            <TabsList className="glass">
              {categories.map(category => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {categories.map(category => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {portfolioItems
                  .filter(item => category.id === "all" || item.category === category.id)
                  .map(item => (
                    <div key={item.id} className="portfolio-item animate-fade-up">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover rounded-xl"
                      />
                      <div className="portfolio-item-overlay">
                        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                        <p className="mb-4 text-sm text-white/80">{categories.find(c => c.id === item.category)?.label}</p>
                        <Button variant="outline" size="sm" className="bg-white/10 hover:bg-white/20 border-white/20">
                          <ExternalLink className="h-4 w-4 mr-2" /> View Details
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('/portfolio', '_blank')}
          >
            View More
          </Button>
          <Button 
            size="lg" 
            className="btn-gradient"
            onClick={handleDownloadPortfolio}
          >
            <Download className="mr-2 h-4 w-4" /> Download Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
