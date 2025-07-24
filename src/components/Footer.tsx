import potsdamCoachLogo from "@/assets/potsdam-coach-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={potsdamCoachLogo} alt="Logo" className="h-8 w-8" />
              <span className="text-xl font-bold">Potsdam-Coach</span>
            </div>
            <p className="text-sm opacity-80">
              Professionelles Coaching & Hypnose für emotionale Freiheit und persönliche Entwicklung.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2 text-sm opacity-80">
              <p>Andreas Westphal</p>
              <p>Tel: 0172 - 91 25 375</p>
              <p>Email: info@potsdam-coach.de</p>
              <p>Potsdam</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <div className="space-y-2 text-sm opacity-80">
              <p>• Individual Coaching</p>
              <p>• Hypnosetherapie</p>
              <p>• Gruppencoaching</p>
              <p>• Resilienz Training</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-60">
          <p>&copy; 2024 Potsdam-Coach. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;