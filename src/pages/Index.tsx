import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import About from "@/components/About";
import Coaching from "@/components/Coaching";
import Hypnosis from "@/components/Hypnosis";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PainPoints />
      <About />
      <Coaching />
      <Hypnosis />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
