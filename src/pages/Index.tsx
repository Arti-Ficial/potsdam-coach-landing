import Header from "@/components/Header";
import Hero from "@/components/Hero";


import Possibilities from "@/components/Possibilities";
import About from "@/components/About";
import Coaching from "@/components/Coaching";
import Hypnosis from "@/components/Hypnosis";
import GroupCoaching from "@/components/GroupCoaching";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Coaching />
      <Possibilities />
      <Hypnosis />
      <GroupCoaching />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
