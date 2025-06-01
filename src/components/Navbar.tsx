import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Mission", href: "#mission" },
  { name: "Themes", href: "#themes" },
  { name: "Tickets", href: "#tickets" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Trailer", href: "#trailer" },
  { name: "Speakers", href: "#speakers" },
  { name: "Partners", href: "#sponsors" },
];

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-haqqathon-dark/90 backdrop-blur-md py-2 shadow-md" : "py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img 
            src="/logos/stemmTrans.png" 
            alt="STEMM Logo" 
            className="h-12 w-auto"
          />
          <h1 className="neon-text text-xl font-loubag tracking-tight">Haqqathon</h1>
        </div>

        {isMobile ? (
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-haqqathon-green"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        ) : (
          <div className="flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm rounded-md hover:text-haqqathon-green transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="absolute w-full bg-haqqathon-dark/95 backdrop-blur-md shadow-lg border-t border-haqqathon-green/20">
          <div className="container mx-auto py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 px-4 text-center hover:bg-haqqathon-green/10 hover:text-haqqathon-green"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
