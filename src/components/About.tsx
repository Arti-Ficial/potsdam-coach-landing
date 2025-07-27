import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import coachPortrait from "@/assets/coach-portrait.jpg";

const About = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="ueber-mich" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <Card className="overflow-hidden shadow-large">
              <img 
                src={coachPortrait} 
                alt="Andreas Westphal - Coach und Trainer"
                className="w-full h-auto object-cover"
              />
            </Card>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Über mich
            </h2>
            
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Andreas Westphal
            </h3>
            
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                Ich arbeite mit viel Leidenschaft seit fast 10 Jahren erst als Trainer 
                und seit 2017 auch als Coach.
              </p>
              
              <p>
                Mein Ziel in jedem Training und jedem Coaching ist die Weiterentwicklung 
                meiner Klienten, die ich begleite.
              </p>
              
              <p>
                In jedem Problem ist auch seine Lösung enthalten, darum arbeite ich 
                ausschließlich daran Lösungsräume zu ergründen.
              </p>
              
              <p>
                Der Ansatz meiner Arbeit ist streng werte-, stärken- und ressourcenorientiert.
              </p>
              
              <p>
                Meine Klienten können von mir ein hohes Maß an Professionalität, 
                Einfühlungsvermögen, Flexibilität und Erfolg erwarten.
              </p>
              
              <p>
                Durch die sich ergänzenden Kompetenzen als Trainer und Coach können 
                Coaching-Sessions schnell mit Methoden der Erlebnispädagogik und Trainings 
                durch Coachingtechniken erweitert werden.
              </p>
              
              <p className="font-semibold text-primary">
                So werden Outdoor-Coachings und EP Trainings in Seminarräumen möglich.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="blue" 
                size="lg"
                onClick={() => scrollToSection('kontakt')}
              >
                Mehr über mich
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('kontakt')}
              >
                Unverbindliches Kennenlernen
              </Button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;
