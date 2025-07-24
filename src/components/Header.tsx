import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import potsdamCoachLogo from "@/assets/potsdam-coach-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src={potsdamCoachLogo} 
            alt="Potsdam Coach Logo" 
            className="h-10 w-10"
          />
          <span className="text-xl font-bold text-primary">Potsdam-Coach</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('start')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Start
          </button>
          <button 
            onClick={() => scrollToSection('coaching')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Coaching
          </button>
          <button 
            onClick={() => scrollToSection('hypnose')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Hypnose
          </button>
          <button 
            onClick={() => scrollToSection('ueber-mich')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Über mich
          </button>
          <button 
            onClick={() => scrollToSection('kontakt')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Kontakt
          </button>
          <Button variant="hero" onClick={() => scrollToSection('kontakt')}>
            Termin vereinbaren
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('start')}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Start
            </button>
            <button 
              onClick={() => scrollToSection('coaching')}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Coaching
            </button>
            <button 
              onClick={() => scrollToSection('hypnose')}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Hypnose
            </button>
            <button 
              onClick={() => scrollToSection('ueber-mich')}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Über mich
            </button>
            <button 
              onClick={() => scrollToSection('kontakt')}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Kontakt
            </button>
            <Button 
              variant="hero" 
              onClick={() => scrollToSection('kontakt')}
              className="w-full"
            >
              Termin vereinbaren
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;