
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const handleGetServiceClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-40 left-20 -z-10 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="pill bg-primary/10 text-primary animate-fade-down" style={{ animationDelay: '0.1s' }}>
                  Creative Design Studio
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-down" style={{ animationDelay: '0.2s' }}>
                  Unlock Your Brand's <span className="text-primary">Potential</span> with Stunning Designs
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground animate-fade-down" style={{ animationDelay: '0.3s' }}>
                  From Social Media to Web Development – We Bring Your Vision to Life!
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.5s' }}>
                <Button onClick={handleGetServiceClick} size="lg" className="btn-gradient group">
                  Get Service Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
                  View Our Work
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-8 border-t animate-fade-up" style={{ animationDelay: '0.7s' }}>
                <div className="space-y-1">
                  <p className="text-2xl md:text-3xl font-bold">100+</p>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl md:text-3xl font-bold">350+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl md:text-3xl font-bold">10+</p>
                  <p className="text-sm text-muted-foreground">Team Members</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute -top-10 -right-10 h-72 w-72 rounded-full bg-primary/10 animate-float" style={{ animationDelay: '0s' }}></div>
              <div className="absolute -bottom-10 -left-10 h-72 w-72 rounded-full bg-blue-400/10 animate-float" style={{ animationDelay: '1s' }}></div>
              
              <div className="relative animate-fade-up glass rounded-2xl shadow-xl overflow-hidden" style={{ animationDelay: '0.4s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Designer working on creative project" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
