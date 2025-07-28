import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import QuoteBottom from "@/components/QuoteBottom";
import Possibilities from "@/components/Possibilities";
import About from "@/components/About";
import Coaching from "@/components/Coaching";
import Hypnosis from "@/components/Hypnosis";
import FamilyCoaching from "@/components/FamilyCoaching";
import GroupCoaching from "@/components/GroupCoaching";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Quote />
      <About />
      <Coaching />
      <Possibilities />
      <QuoteBottom />
      <Hypnosis />
      <FamilyCoaching />
      <GroupCoaching />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
