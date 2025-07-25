import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Users, Shield, User, Eye } from "lucide-react";
import teamCoaching from "@/assets/team-coaching.jpg";

const Coaching = () => {
  const coachingSteps = [
    {
      number: "1",
      title: "Ursachen analysieren",
      description: "Woher kommt der Stress, die inneren Unruhen, Ängste und der Selbstzweifel. Wir untersuchen gemeinsam die Ursachen!"
    },
    {
      number: "2", 
      title: "Ziele definieren",
      description: "Wir definieren gemeinsam Deine persönlichen Ziele und welche Gefühle Du dauerhaft verspüren möchtest!"
    },
    {
      number: "3",
      title: "An der Ursache arbeiten", 
      description: "Wir gehen an die Ursache und bekämpfen nicht nur die Symptome. So verändern sich Deine Gefühle und Dein Leben nicht nur temporär, sondern für immer!"
    },
    {
      number: "4",
      title: "Neues Lebensgefühl",
      description: "Du genießt ein neues Lebensgefühl, welches Dein dauerhafter Begleiter sein wird, Dir zu mehr Erfolg sowie Erfüllung im Business und privaten Bereich verhelfen wird!"
    }
  ];

  const features = [
    {
      icon: <User className="text-blue-600" size={24} />,
      title: "Individuelles 1:1 Coaching",
      description: "Du bist nicht einer von vielen. Ich begleite Dich individuell und 1:1! Online oder vor Ort!"
    },
    {
      icon: <Shield className="text-blue-600" size={24} />,
      title: "Garantie",
      description: "Ich begleite Dich so lange, bis Du Dein Ziel erreicht hast! Ich bin an Deiner Seite!"
    },
    {
      icon: <Users className="text-blue-600" size={24} />,
      title: "Persönlicher Begleiter",
      description: "Ich nehme nur einen kleinen Kreis von Klienten an, daher bin ich tagsüber und wochentags für Dich erreichbar, auch außerhalb unserer Coaching Termine!"
    },
    {
      icon: <Eye className="text-blue-600" size={24} />,
      title: "Diskretion",
      description: "Ich behandle Deine Themen sehr diskret und bewerte Dich nicht. Du stehst im Fokus und wir arbeiten zusammen an Deinem Ziel!"
    },
    {
      icon: <CheckCircle className="text-blue-600" size={24} />,
      title: "Transparenz", 
      description: "Du darfst mich alles fragen. Du erhältst von mir volle Transparenz und Ehrlichkeit!"
    }
  ];

  const themenschwerpunkte = [
    "Stress/Druck/Burnout",
    "Ängste (u.a. Flugangst, Prüfungsangst, Angst vor dem Tod/vor Krankheiten, Höhenangst)",
    "Vergangenheit",
    "Partnerschaft", 
    "Unerfüllter Kinderwunsch",
    "Krankheiten/Schmerzen",
    "Migräne",
    "Negative Glaubensätze/Blockaden",
    "Selbstzweifel/Selbstbewusstsein/Selbstwert/Selbstliebe",
    "Raucherentwöhnung",
    "Abnehmen",
    "Süchte",
    "Schlafstörungen"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="coaching" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Coaching Method */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Hypnose und Coaching
            </h2>
            <h3 className="text-2xl font-semibold text-blue-700 mb-6">Die Methode</h3>
            
            <p className="text-lg text-muted-foreground mb-8">
              Ein individuelles Hypnose- und Coaching-Programm verspricht eine hohe Erfolgsgarantie.
              Binnen kurzer Zeit entstehen ungeahnte Ergebnisse durch die Kombination beider Methoden.
            </p>

            <h4 className="text-xl font-semibold text-primary mb-6">Vorgehensweise:</h4>
            
            <div className="space-y-6">
              {coachingSteps.map((step, index) => (
                <Card key={index} className="p-6 shadow-soft border-l-4 border-l-blue-500">
                  <div className="flex space-x-4">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h5 className="font-semibold text-primary mb-2">{step.title}</h5>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <Card className="overflow-hidden shadow-large">
              <img 
                src={teamCoaching} 
                alt="Team Coaching Session"
                className="w-full h-auto object-cover"
              />
            </Card>
          </div>
        </div>

        {/* Features */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center shadow-soft hover:shadow-medium transition-shadow">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Themenschwerpunkte */}
        <div className="bg-gradient-secondary rounded-lg p-8">
          <h3 className="text-3xl font-bold text-primary mb-8 text-center">Themenschwerpunkte</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {themenschwerpunkte.map((thema, index) => (
              <Card key={index} className="p-4 bg-white shadow-soft">
                <div className="flex items-center space-x-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-foreground">{thema}</span>
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

        {/* Group Coaching Section */}
        <div className="mt-24">
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
                Zielfokussierung und emotionale Intelligenz angesprochen.
              </p>
              
              <p className="text-muted-foreground mb-8">
                Die Gruppendynamik ermöglicht den Austausch von Erfahrungen und gegenseitiger 
                Unterstützung. Coaching in Gruppen kann dazu beitragen, die individuelle 
                Resilienz zu steigern und positive Veränderungen im Denken und Handeln zu fördern.
              </p>
              
              <Button 
                variant="blue" 
                size="lg"
                onClick={() => scrollToSection('kontakt')}
              >
                Gruppencoaching anfragen
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Coaching;