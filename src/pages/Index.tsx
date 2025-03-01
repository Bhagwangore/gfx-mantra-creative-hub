
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Career from "@/components/Career";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling to all links
    document.documentElement.classList.add('smooth-scroll');
    
    return () => {
      document.documentElement.classList.remove('smooth-scroll');
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col antialiased selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <About />
        <Career />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
