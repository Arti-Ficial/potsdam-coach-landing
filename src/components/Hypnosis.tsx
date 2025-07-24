import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Heart, Shield, Target } from "lucide-react";
import hypnosisSession from "@/assets/hypnosis-session.jpg";

const Hypnosis = () => {
  const benefits = [
    {
      icon: <Brain className="text-blue-600" size={32} />,
      title: "Mentale Stärke",
      description: "Entwicklung von mentaler Widerstandsfähigkeit und innerer Ruhe durch gezielte Hypnosetechniken."
    },
    {
      icon: <Heart className="text-blue-600" size={32} />,
      title: "Emotionale Heilung",
      description: "Auflösung von emotionalen Blockaden und Traumata für mehr Lebensfreude und Zufriedenheit."
    },
    {
      icon: <Target className="text-blue-600" size={32} />,
      title: "Zielerreichung",
      description: "Programmierung des Unterbewusstseins für nachhaltigen Erfolg bei persönlichen und beruflichen Zielen."
    },
    {
      icon: <Shield className="text-blue-600" size={32} />,
      title: "Stressabbau",
      description: "Effektive Entspannungstechniken für dauerhaften Schutz vor Stress und Überforderung."
    }
  ];

  const hypnosisAreas = [
    "Raucherentwöhnung",
    "Gewichtsreduktion",
    "Angstauflösung",
    "Selbstbewusstsein stärken",
    "Schlafstörungen",
    "Schmerztherapie",
    "Traumabearbeitung",
    "Leistungssteigerung",
    "Entspannung & Stressabbau"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hypnose" className="py-24 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Professionelle Hypnosetherapie
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hypnose ist ein wissenschaftlich anerkanntes Verfahren, das Ihnen hilft, 
            Ihr Unterbewusstsein positiv zu programmieren und nachhaltige Veränderungen zu erreichen.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h3 className="text-3xl font-semibold text-primary mb-6">
              Wie funktioniert Hypnose?
            </h3>
            
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                Hypnose ist ein natürlicher Bewusstseinszustand zwischen Wachen und Schlafen. 
                In diesem entspannten Zustand ist Ihr Unterbewusstsein besonders aufnahmefähig 
                für positive Suggestionen und Veränderungen.
              </p>
              
              <p>
                Anders als oft dargestellt, behalten Sie während der Hypnose die volle Kontrolle 
                über sich selbst. Sie können jederzeit selbst entscheiden, was Sie annehmen oder 
                ablehnen möchten.
              </p>
              
              <p>
                Durch die direkte Kommunikation mit dem Unterbewusstsein können wir hinderliche 
                Glaubenssätze und Verhaltensweisen auflösen und durch förderliche ersetzen.
              </p>
              
              <p className="font-semibold text-primary">
                Das Ergebnis: Nachhaltige Veränderungen, die von innen heraus entstehen und 
                dauerhaft bestehen bleiben.
              </p>
            </div>

            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('kontakt')}
              className="mr-4"
            >
              Hypnose-Termin buchen
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('kontakt')}
            >
              Kostenlose Beratung
            </Button>
          </div>

          <div>
            <Card className="overflow-hidden shadow-large">
              <img 
                src={hypnosisSession} 
                alt="Professionelle Hypnosesitzung"
                className="w-full h-auto object-cover"
              />
            </Card>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-primary mb-12 text-center">
            Vorteile der Hypnosetherapie
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center shadow-soft hover:shadow-medium transition-shadow bg-white">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-semibold text-primary mb-3">{benefit.title}</h4>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Treatment Areas */}
        <div className="bg-white rounded-lg p-8 shadow-medium">
          <h3 className="text-3xl font-bold text-primary mb-8 text-center">
            Anwendungsbereiche der Hypnose
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {hypnosisAreas.map((area, index) => (
              <Card key={index} className="p-4 border-l-4 border-l-blue-500 shadow-soft">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-foreground font-medium">{area}</span>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Sie haben ein anderes Anliegen? Sprechen Sie mich gerne an. 
              Hypnose kann bei vielen weiteren Themen unterstützend wirken.
            </p>
            
            <Button 
              variant="blue" 
              size="lg"
              onClick={() => scrollToSection('kontakt')}
            >
              Persönliche Beratung vereinbaren
            </Button>
          </div>
        </div>

        {/* Resilienz Coaching Section */}
        <div className="mt-24">
          <Card className="p-8 shadow-medium bg-white">
            <h3 className="text-3xl font-bold text-primary mb-6 text-center">
              Resilienz Coaching / Training
            </h3>
            
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Durch meine Ausbildung zum Resilienz Coach, weiß ich, wie wertvoll dieses Thema 
                für die Menschen und die Gesellschaft geworden ist.
              </p>
              
              <p className="text-muted-foreground mb-6">
                Resiliente Menschen sind einfach zufriedener und können mit Herausforderungen 
                viel besser umgehen.
              </p>
              
              <p className="text-muted-foreground mb-6">
                Das Resilienz Coaching/Training in 1:1 Coachings oder Gruppen zielt darauf ab, 
                die psychische Widerstandsfähigkeit zu stärken.
              </p>
              
              <p className="text-muted-foreground mb-8">
                Durch Techniken und gezielte Übungen werden Menschen befähigt, besser mit Stress, 
                Herausforderungen und Veränderungen umzugehen. Dies kann die emotionale Stabilität 
                und die Fähigkeit zur Anpassung verbessern.
              </p>
              
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('kontakt')}
              >
                Resilienz Training anfragen
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hypnosis;