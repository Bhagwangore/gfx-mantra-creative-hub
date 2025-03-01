
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Mail } from "lucide-react";

const jobs = [
  {
    title: "Graphic Designer",
    type: "Full-time",
    description: "We're looking for a creative graphic designer with expertise in digital and print design."
  },
  {
    title: "Web Developer",
    type: "Full-time",
    description: "Seeking a skilled web developer with experience in modern frameworks and responsive design."
  },
  {
    title: "Video Editor",
    type: "Freelance",
    description: "Join our team as a freelance video editor to create engaging content for various platforms."
  }
];

const Career = () => {
  const handleApply = () => {
    window.open('mailto:gfxmantra777@gmail.com?subject=Job Application', '_blank');
  };

  return (
    <section id="career" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="section-title">Join Our Team</h2>
          <p className="section-subtitle">
            We're Always Looking for Creative Minds!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Collaborate with our team" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-primary/10 rounded-2xl -z-10 -translate-x-4 -translate-y-4"></div>
          </div>
          
          <div className="space-y-6">
            <div className="pill bg-primary/10 text-primary">Career Opportunities</div>
            <h3 className="text-2xl font-bold mb-4">Grow With Us</h3>
            <p className="text-muted-foreground mb-6">
              At GFX Mantra, we believe in nurturing talent and fostering growth. Join our dynamic team and be part of an exciting journey where creativity knows no bounds and innovation is a way of life.
            </p>
            <p className="text-muted-foreground">
              We offer a collaborative environment where your ideas are valued, your skills are honed, and your career aspirations are supported.
            </p>
            
            <Button onClick={handleApply} className="btn-gradient mt-4" size="lg">
              <Mail className="mr-2 h-4 w-4" /> Send Your Resume
            </Button>
          </div>
        </div>
        
        {/* Open positions */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-2">Open Positions</h3>
            <p className="text-muted-foreground">Current job opportunities at GFX Mantra</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <Card key={index} className="glass hover:-translate-y-1 transition-transform duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{job.title}</CardTitle>
                      <CardDescription>{job.type}</CardDescription>
                    </div>
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  <Button onClick={handleApply} variant="outline" className="w-full">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see a position that matches your skills? Send your resume and portfolio to
              <span className="font-medium"> gfxmantra777@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
