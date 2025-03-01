
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Patel",
    company: "TechSolutions Inc.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    testimonial: "GFX Mantra transformed our brand identity completely. Their creative team understood exactly what we needed and delivered beyond our expectations. The social media designs they created for us increased our engagement by 200%!"
  },
  {
    id: 2,
    name: "Priya Sharma",
    company: "Elegant Boutique",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    testimonial: "Working with GFX Mantra has been a game-changer for our boutique. The website they designed is not only beautiful but also user-friendly, resulting in a significant increase in our online sales."
  },
  {
    id: 3,
    name: "Vikram Mehta",
    company: "Foodie Express",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    testimonial: "The video editing services provided by GFX Mantra helped us create engaging content for our food delivery app. Their attention to detail and quick turnaround time made them a pleasure to work with."
  },
  {
    id: 4,
    name: "Anita Desai",
    company: "Wellness Hub",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    testimonial: "I'm extremely impressed with the branding materials GFX Mantra created for our wellness center. They captured the essence of our business perfectly, and we've received countless compliments on our new logo and marketing materials."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.ceil(testimonials.length / 2) - 1;
  const slideRef = useRef<HTMLDivElement>(null);
  
  const handlePrev = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : 0));
  };
  
  const handleNext = () => {
    setCurrentIndex(prev => (prev < maxIndex ? prev + 1 : maxIndex));
  };

  return (
    <section className="py-20 bg-secondary/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 right-40 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-40 left-40 -z-10 h-96 w-96 rounded-full bg-blue-400/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Hear from our satisfied clients about their experience working with us
          </p>
        </div>
        
        <div className="relative">
          <div
            ref={slideRef}
            className="overflow-hidden"
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 50}%)` }}
            >
              {testimonials.map(testimonial => (
                <div key={testimonial.id} className="w-full md:w-1/2 px-4 flex-shrink-0">
                  <Card className="glass h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <Quote className="h-10 w-10 text-primary/20 mb-4" />
                      
                      <p className="text-muted-foreground mb-6">
                        "{testimonial.testimonial}"
                      </p>
                      
                      <div className="flex items-center">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="h-12 w-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`rounded-full ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary hover:text-white'}`}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className={`rounded-full ${currentIndex === maxIndex ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary hover:text-white'}`}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
