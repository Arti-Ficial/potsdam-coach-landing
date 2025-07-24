import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import outdoorCoachingHero from "@/assets/outdoor-coaching-hero.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="start" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${outdoorCoachingHero})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Entdecke Dein
          <span className="block text-blue-200">volles Potential</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Professionelles Coaching & Hypnose in Potsdam für emotionale Freiheit, 
          Stressabbau und persönliche Weiterentwicklung
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection('kontakt')}
            className="text-lg px-8 py-4"
          >
            Kostenloses Erstgespräch
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection('coaching')}
            className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20"
          >
            Mehr erfahren
          </Button>
        </div>
        
        {/* Scroll down indicator */}
        <button 
          onClick={() => scrollToSection('schmerzpunkte')}
          className="animate-bounce text-white/80 hover:text-white transition-colors"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;