import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const FamilyCoaching = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="familien-coaching" className="py-24 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8">
            Hypnose und Coaching für Kinder mit Eltern
          </h2>
          
          <p className="text-xl text-white/90 leading-relaxed mb-8">
            Spezielle Coaching- und Hypnoseangebote für Kinder und Jugendliche in Begleitung 
            ihrer Eltern. Gemeinsam stärken wir das Familienverständnis und lösen 
            Herausforderungen im Familienalltag.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('kontakt')}
            >
              Familien-Termin buchen
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('kontakt')}
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Kostenlose Erstberatung
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilyCoaching;