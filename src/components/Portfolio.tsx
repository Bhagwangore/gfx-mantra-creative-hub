import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import p1 from "@/assets/project/p1.jpg";
import p2 from "@/assets/project/p2.jpg";
import p3 from "@/assets/project/p3.jpg";
import p4 from "@/assets/project/p4.jpg";
import p5 from "@/assets/project/p5.jpg";
import p6 from "@/assets/project/p6.jpg";
import p7 from "@/assets/project/p7.jpg";
import p8 from "@/assets/project/p8.jpg";
import v2 from "@/assets/project/v2.mp4";
import v3 from "@/assets/project/v3.mp4";
import v5 from "@/assets/project/v5.mp4";
import v6 from "@/assets/project/v6.mp4";
import v7 from "@/assets/project/v7.mp4";
import v8 from "@/assets/project/v8.mp4";
import v9 from "@/assets/project/v9.mp4";

// Sample portfolio data
type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  image: string;
  type: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Social Media Campaign",
    category: "printing",
    image: p1,
    type: "image",
  },
  {
    id: 2,
    title: "Brand Identity Design",
    category: "printing",
    image: p2,
    type: "image",
  },
  {
    id: 3,
    title: "E-commerce Website",
    category: "printing",
    image: p3,
    type: "image",
  },
  {
    id: 4,
    title: "Product Showcase Video",
    category: "printing",
    image: p4,
    type: "image",
  },
  {
    id: 5,
    title: "Marketing Brochure",
    category: "printing",
    image: p5,
    type: "image",
  },
  {
    id: 6,
    title: "Instagram Stories",
    category: "printing",
    image: p6,
    type: "image",
  },
  {
    id: 7,
    title: "Mobile App UI Design",
    category: "printing",
    image: p7,
    type: "image",
  },
  {
    id: 8,
    title: "Product Promo Video",
    category: "printing",
    image: p8,
    type: "image",
  },
  {
    id: 10,
    title: "Product Promo Video",
    category: "video-editing",
    image: v2,
    type: "video",
  },
  {
    id: 11,
    title: "Product Promo Video",
    category: "video-editing",
    image: v3,
    type: "video",
  },

  {
    id: 13,
    title: "Product Promo Video",
    category: "video-editing",
    image: v5,
    type: "video",
  },
  {
    id: 14,
    title: "Product Promo Video",
    category: "video-editing",
    image: v6,
    type: "video",
  },
  {
    id: 15,
    title: "Product Promo Video",
    category: "video-editing",
    image: v7,
    type: "video",
  },
  {
    id: 16,
    title: "Product Promo Video",
    category: "video-editing",
    image: v8,
    type: "video",
  },
  {
    id: 17,
    title: "Product Promo Video",
    category: "video-editing",
    image: v9,
    type: "video",
  },
];

// Categories
const categories = [
  { id: "all", label: "All" },
  { id: "social-media", label: "Social Media" },
  { id: "printing", label: "Printing" },
  { id: "web-design", label: "Web Design" },
  { id: "video-editing", label: "Video Editing" },
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

        <Tabs
          defaultValue="all"
          value={currentTab}
          onValueChange={setCurrentTab}
          className="w-full mb-10"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="glass">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                {portfolioItems
                  .filter(
                    (item) =>
                      category.id === "all" || item.category === category.id
                  )
                  .map((item) => (
                    <div
                      key={item.id}
                      className="break-inside-avoid rounded-xl overflow-hidden shadow-lg"
                    >
                      {item?.type != "image" ? (
                       
                        <video autoPlay loop muted >
                          <source  src={item.image} type="video/mp4" />
                        </video>
                      ) : (
                        <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto object-cover rounded-xl"
                      />
                      )}
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
            onClick={() => window.open("/portfolio", "_blank")}
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
