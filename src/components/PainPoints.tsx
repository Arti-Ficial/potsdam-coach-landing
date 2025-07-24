import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

const PainPoints = () => {
  const painPoints = [
    "Du fühlst Dich gestresst!",
    "Du fühlst dich ständig getrieben!",
    "Dich belasten Probleme!",
    "Du hast Selbstzweifel!",
    "Du fühlst Dich überfordert!",
    "Du fühlst Dich blockiert!",
    "Du hast Ängste!",
    "Du bist unglücklich in Deiner Partnerschaft!",
    "Du kannst nicht 'nein' sagen!",
    "Deine Vergangenheit belastet Dich!",
    "Es fehlt Dir der Sinn im Leben!"
  ];

  const solutions = [
    "Du möchtest gelassen und entspannt sein!",
    "Du möchtest emotional frei sein!",
    "Du möchtest selbstbewusst und selbstsicher sein!",
    "Du möchtest erfolgreich sein und Deine Ziele erreichen!",
    "Du möchtest angstfrei sein!",
    "Du möchtest glücklich in Deiner Partnerschaft sein!",
    "Du möchtest mehr Zeit für Dich und Dein Leben haben!",
    "Du möchtest zufrieden sein!"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="schmerzpunkte" className="py-24 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Pain Points */}
          <div>
            <h2 className="text-4xl font-bold text-primary mb-8">
              Deine Schmerzpunkte
            </h2>
            <div className="space-y-4">
              {painPoints.map((point, index) => (
                <Card key={index} className="p-4 bg-white shadow-soft border-l-4 border-l-red-400">
                  <div className="flex items-center space-x-3">
                    <XCircle className="text-red-500 flex-shrink-0" size={20} />
                    <span className="text-foreground font-medium">
                      {String(index + 1).padStart(2, '0')}. {point}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h2 className="text-4xl font-bold text-primary mb-8">
              Was möchtest Du stattdessen?
            </h2>
            <div className="space-y-4 mb-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="p-4 bg-white shadow-soft border-l-4 border-l-green-400">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-foreground font-medium">
                      {index + 1}. {solution}
                    </span>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-700 mb-6">
                # Free yourself and live a fulfilling life
              </h3>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('kontakt')}
                className="px-8 py-4"
              >
                Unverbindliches Kennenlernen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;