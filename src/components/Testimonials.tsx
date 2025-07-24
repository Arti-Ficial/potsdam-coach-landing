import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sophie",
      text: "Andreas hat mir sehr mit meinen persönlichen Themen geholfen. Auch war ich überrascht, wie schnell man in solch einem Coaching Vertrauen zu ihm aufbaut. Durch seine herzliche und einfühlsame Art findet er schnell einen Zugang. Den online-Terminen gegenüber war ich anfangs eher skeptisch eingestellt und konnte mir nicht vorstellen, dass die Energie trotzdem so rüber kommt. Dieses war aber gar kein Problem. Auch ein tolles Learning für mich.",
      rating: 5
    },
    {
      name: "Ariane K.",
      text: "Ich bin froh Andreas kennengelernt zu haben, er hat eine wirklich wundervolle Art auf Menschen einzugehen😍. Ich hab in den 6 Sitzungen wirklich viel aufgearbeitet und dieses doofe Gefühl in meiner Brust ist verschwunden. Sollte es jemals wieder kommen, komme ich wieder 🤗. Ich kann ihn zu 100 Prozent weiter empfehlen, für mich ist Hypnose der richtige Weg.",
      rating: 5
    },
    {
      name: "Linda",
      text: "Andreas besitzt viel Fingerspitzengefühl und holte mich mit seiner empathischen Art, oft auch über Umwege ab. Wenn man Kopfmensch ist, dann fällt es einem oft schwer sich zu öffnen, zuzulassen und zu vertrauen. Er hat es jedoch geschafft, trotz meiner Skepsis, dass ich mich öffnen konnte und einige Grundprobleme etwas anders betrachte, ja vielleicht bin ich auch etwas leichter und besser im Umgang mit bestimmten Situationen.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={20}
        className={index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Das sagen meine Klienten
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Echte Erfahrungen von Menschen, die durch Coaching und Hypnose 
            positive Veränderungen in ihrem Leben erreicht haben.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 shadow-medium hover:shadow-large transition-shadow">
              <div className="flex items-center space-x-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <blockquote className="text-muted-foreground italic mb-4 leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              
              <cite className="text-primary font-semibold">
                — {testimonial.name}
              </cite>
            </Card>
          ))}
        </div>

        {/* Stats or additional info */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto p-8 bg-gradient-secondary shadow-medium">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Zufriedenheitsrate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Jahre Erfahrung</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Erfolgreiche Sitzungen</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;