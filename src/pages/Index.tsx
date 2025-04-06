
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Index = () => {
  // Initialize scroll animations
  useScrollAnimation();

  // Update title
  useEffect(() => {
    document.title = "Nova Agency - Digital Experiences That Matter";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
