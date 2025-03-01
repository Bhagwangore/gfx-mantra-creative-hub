
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would send this data to a backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind? Let's bring your vision to life!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="glass hover:-translate-y-1 transition-transform duration-300">
            <CardContent className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">We're just a call away</p>
              <a href="tel:+917774015010" className="text-primary hover:underline">
                +91 7774015010
              </a>
            </CardContent>
          </Card>
          
          <Card className="glass hover:-translate-y-1 transition-transform duration-300">
            <CardContent className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">We'll respond promptly</p>
              <a href="mailto:gfxmantra777@gmail.com" className="text-primary hover:underline">
                gfxmantra777@gmail.com
              </a>
            </CardContent>
          </Card>
          
          <Card className="glass hover:-translate-y-1 transition-transform duration-300">
            <CardContent className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-muted-foreground mb-4">Our office location</p>
              <address className="not-italic text-primary">
                Mumbai, Maharashtra, India
              </address>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 glass p-8 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Send Us a Message</h3>
              <p className="text-muted-foreground mb-6">
                Fill out the form and we'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/50"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/50"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-32 bg-white/50"
                  />
                </div>
                <Button type="submit" className="btn-gradient" size="lg">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div className="relative overflow-hidden rounded-xl h-96 md:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160984904!2d72.73539312257816!3d19.08204760285764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1651490320582!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                title="GFX Mantra Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
