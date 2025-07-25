import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const GroupCoaching = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="gruppen-coaching" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-primary mb-8 text-center">
          Coaching für Gruppen / Teams
        </h3>
        
        <Card className="p-8 shadow-medium">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              Ich biete auch sehr gern Coaching für Gruppen und Teams an.
            </p>
            
            <p className="text-muted-foreground mb-6">
              Coaching in Gruppen bietet eine unterstützende Umgebung, in der Teilnehmer 
              mentale Stärke und Selbstbewusstsein entwickeln können.
            </p>
            
            <p className="text-muted-foreground mb-6">
              Durch gezielte Coaching Techniken werden Themen wie Stressbewältigung, 
              Kommunikation und Teamdynamik behandelt. Die Kraft der Gruppe verstärkt 
              dabei die positiven Effekte des Coachings.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h4 className="text-xl font-semibold text-primary mb-4">Vorteile von Gruppencoaching:</h4>
              <ul className="text-left text-muted-foreground space-y-2">
                <li>• Voneinander lernen und sich inspirieren lassen</li>
                <li>• Kostengünstigere Alternative zum Einzelcoaching</li>
                <li>• Gemeinsame Motivation und Unterstützung</li>
                <li>• Verschiedene Perspektiven und Lösungsansätze</li>
                <li>• Stärkung der Teamdynamik und des Zusammenhalts</li>
              </ul>
            </div>
            
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('kontakt')}
            >
              Gruppencoaching anfragen
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default GroupCoaching;