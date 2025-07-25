import { Card } from "@/components/ui/card";

const Quote = () => {
  return (
    <section className="py-16 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-8 text-center shadow-large bg-white/90 backdrop-blur-sm">
          <blockquote className="text-2xl md:text-3xl font-light text-primary italic leading-relaxed mb-6">
            "Auch der weiteste Weg beginnt mit einem ersten Schritt."
          </blockquote>
          <cite className="text-lg text-muted-foreground">
            — Laozi (auch Lao-Tse)
          </cite>
        </Card>
      </div>
    </section>
  );
};

export default Quote;