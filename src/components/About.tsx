
import { Users, Trophy, Target } from "lucide-react";

const teamMembers = [
  {
    name: "Creative Director",
    role: "Design Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Web Developer",
    role: "Frontend Specialist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Marketing Lead",
    role: "Strategy Expert",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 -z-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 -z-10 h-80 w-80 rounded-full bg-blue-400/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle">
            Who We Are & What We Do
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="pill bg-primary/10 text-primary">Our Story</div>
            <h3 className="text-2xl font-bold mb-4">We Turn Ideas Into Beautiful Experiences</h3>
            <p className="text-muted-foreground mb-6">
              GFX Mantra is a creative design agency dedicated to helping businesses stand out with stunning visuals and innovative solutions. From social media management to web development, we bring your ideas to life with passion and expertise.
            </p>
            <p className="text-muted-foreground">
              Our mission is to deliver high-quality, affordable design solutions that drive results and exceed expectations. With a team of dedicated professionals, we work tirelessly to ensure your brand stands out in today's competitive digital landscape.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center">
                <Users className="h-6 w-6 text-primary mr-2" />
                <span className="font-medium">Expert Team</span>
              </div>
              <div className="flex items-center">
                <Trophy className="h-6 w-6 text-primary mr-2" />
                <span className="font-medium">Award Winning</span>
              </div>
              <div className="flex items-center">
                <Target className="h-6 w-6 text-primary mr-2" />
                <span className="font-medium">Client Focused</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Our team collaborating" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-0 right-0 w-5/6 h-full bg-primary/10 rounded-2xl -z-10 translate-x-4 translate-y-4"></div>
          </div>
        </div>
        
        {/* Team section */}
        {/* <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-2">Meet Our Team</h3>
            <p className="text-muted-foreground">The creative minds behind our success</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="glass hover:-translate-y-1 transition-transform duration-300 rounded-xl overflow-hidden">
                <div className="aspect-w-3 aspect-h-4 relative h-60">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold">{member.name}</h4>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
