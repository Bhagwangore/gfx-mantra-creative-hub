import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import gfxMantraLogo from "../assets/gfxMantraLogo.png";
import { useNavigate } from "react-router-dom";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "Our Work", id: "portfolio" },
  { label: "About Us", id: "about" },
  { label: "Career", id: "career" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });

      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 glass shadow-md" : "py-5 bg-transparent"
      }`}
    >
      <div className="container lg:px-8 mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            {/* <h1 className="text-primary text-xl font-bold">GFX Mantra</h1> */}
            <img src={gfxMantraLogo} alt="logo" className="w-[30%]" />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={
                      activeSection === item.id
                        ? "navbar-item-active"
                        : "navbar-item"
                    }
                  >
                    {item.label}
                  </button>
                </li>
              ))}

              {/* <li >
                <button
                  onClick={() => navigate("/dashboard")}
                 
                >
                  dashboard
                </button>
              </li> */}
            </ul>
          </nav>

          <div className="hidden md:block">
            <Button
              onClick={() => handleNavClick("contact")}
              className="btn-gradient"
            >
              Get Service Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="animate-fade-in glass md:hidden">
          <nav className="container mx-auto px-4 py-6">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={
                      activeSection === item.id
                        ? "navbar-item-active"
                        : "navbar-item"
                    }
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <Button
                  onClick={() => {
                    handleNavClick("contact");
                    setMobileMenuOpen(false);
                  }}
                  className="btn-gradient w-full"
                >
                  Get Service Now
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
