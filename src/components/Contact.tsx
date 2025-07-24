import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import potsdamCoachLogo from "@/assets/potsdam-coach-logo.png";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic in Phase 2
    console.log("Form submitted");
  };

  return (
    <section id="kontakt" className="py-24 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Kontakt
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bereit für Ihre Reise zu mehr Lebensqualität und innerer Stärke? 
            Vereinbaren Sie jetzt Ihr kostenloses Erstgespräch.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 shadow-large bg-white">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Kontaktformular
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Vorname *</Label>
                  <Input 
                    id="firstName" 
                    type="text" 
                    required 
                    className="mt-1"
                    placeholder="Ihr Vorname"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Nachname *</Label>
                  <Input 
                    id="lastName" 
                    type="text" 
                    required 
                    className="mt-1"
                    placeholder="Ihr Nachname"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">E-Mail *</Label>
                <Input 
                  id="email" 
                  type="email" 
                  required 
                  className="mt-1"
                  placeholder="ihre.email@example.com"
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Telefon</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  className="mt-1"
                  placeholder="Ihre Telefonnummer"
                />
              </div>
              
              <div>
                <Label htmlFor="subject">Betreff</Label>
                <Input 
                  id="subject" 
                  type="text" 
                  className="mt-1"
                  placeholder="Worum geht es in Ihrer Anfrage?"
                />
              </div>
              
              <div>
                <Label htmlFor="message">Nachricht *</Label>
                <Textarea 
                  id="message" 
                  required 
                  className="mt-1 min-h-[120px]"
                  placeholder="Beschreiben Sie kurz Ihr Anliegen oder stellen Sie Ihre Fragen..."
                />
              </div>
              
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
              >
                Nachricht senden
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                * Pflichtfelder. Ihre Daten werden vertraulich behandelt.
              </p>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="p-8 shadow-large bg-white">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src={potsdamCoachLogo} 
                  alt="Potsdam Coach Logo" 
                  className="h-12 w-12"
                />
                <div>
                  <h3 className="text-xl font-semibold text-primary">Andreas Westphal</h3>
                  <p className="text-muted-foreground">Systemischer Coach & Hypnosetherapeut</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="text-blue-600 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold">Telefon</p>
                    <a 
                      href="tel:+491729125375" 
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      0172 - 91 25 375
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-600 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold">E-Mail</p>
                    <a 
                      href="mailto:info@potsdam-coach.de" 
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      info@potsdam-coach.de
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="text-blue-600 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold">Standort</p>
                    <p className="text-muted-foreground">Potsdam</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="text-blue-600 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold">Sprechzeiten</p>
                    <p className="text-muted-foreground">Mo-Fr: 9:00 - 18:00 Uhr</p>
                    <p className="text-muted-foreground">Sa: Nach Vereinbarung</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Qualifications */}
            <Card className="p-8 shadow-large bg-white">
              <h3 className="text-xl font-semibold text-primary mb-6">
                Qualifikationen
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground">Systemischer Coach</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground">Hypnosetherapeut</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground">Erlebnispädagoge</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground">Positive Psychologie</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground">GFK (Gewaltfreie Kommunikation)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground">Resilienz Coach</span>
                </div>
              </div>
            </Card>

            {/* Call to Action */}
            <Card className="p-8 shadow-large bg-gradient-primary text-white">
              <h3 className="text-xl font-semibold mb-4">
                Bereit für Veränderung?
              </h3>
              <p className="mb-6 opacity-90">
                Das erste Gespräch ist kostenfrei und unverbindlich. 
                Lassen Sie uns gemeinsam herausfinden, wie ich Ihnen helfen kann.
              </p>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full bg-white text-blue-700 border-white hover:bg-blue-50"
              >
                Jetzt anrufen: 0172 - 91 25 375
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;