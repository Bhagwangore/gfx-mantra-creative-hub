
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Linkedin, Twitter, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary pt-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="text-lg font-bold mb-4">GFX Mantra</h3>
            <p className="text-muted-foreground mb-6">
              A creative design agency dedicated to helping businesses stand out with stunning visuals and innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Instagram className="h-5 w-5 text-primary" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Facebook className="h-5 w-5 text-primary" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Twitter className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
              </li>
              <li>
                <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Our Work</a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#career" className="text-muted-foreground hover:text-primary transition-colors">Career</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Social Media Handling</a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Custom Post Design</a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Web Development</a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">App Development</a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Video Editing</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <span className="text-primary">Email:</span>
                <a href="mailto:gfxmantra777@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">gfxmantra777@gmail.com</a>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary">Phone:</span>
                <a href="tel:+917774015010" className="text-muted-foreground hover:text-primary transition-colors">+91 7774015010</a>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary">Address:</span>
                <span className="text-muted-foreground">Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between py-8 border-t">
          <p className="text-muted-foreground text-sm">
            © {currentYear} GFX Mantra. All Rights Reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-primary hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Whatsapp button */}
      <a
        href="https://wa.me/917774015010"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
