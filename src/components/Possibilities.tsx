import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const Possibilities = () => {
  const possibilities = [
    "Ich möchte gelassen und entspannt sein!",
    "Ich möchte emotional frei sein!",
    "Ich möchte selbstbewusst und selbstsicher sein!",
    "Ich möchte erfolgreich sein und meine Ziele erreichen!",
    "Ich möchte angstfrei sein!",
    "Ich möchte glücklich in meiner Partnerschaft sein!",
    "Ich möchte mehr Zeit für mich und mein Leben haben!",
    "Ich möchte zufrieden sein!"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="moeglichkeiten" className="py-24 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-secondary rounded-lg p-8">
          <h3 className="text-3xl font-bold text-primary mb-8 text-center">Was ist für mich möglich</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {possibilities.map((possibility, index) => (
              <Card key={index} className="p-4 bg-white shadow-soft">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-foreground">{possibility}</span>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
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
    </section>
  );
};

export default Possibilities;