
import React from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-white to-gray-100">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-64 h-64 bg-agency-teal/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-agency-coral/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-tight relative z-10 flex flex-col items-center text-center">
        <h5 className="text-agency-teal uppercase tracking-wider font-medium mb-4 animate-fade-in">
          Welcome to Nova Creative Agency
        </h5>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          We Create <span className="gradient-text">Digital Experiences</span> That Matter
        </h1>
        <p className="text-lg md:text-xl text-agency-gray max-w-2xl mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          A full-service creative agency specializing in branding, web design, development, and digital marketing strategies tailored to elevate your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a href="#contact" className="btn-primary">
            Start Your Project
          </a>
          <a href="#work" className="btn-outline">
            View Our Work
          </a>
        </div>
        
        <button 
          onClick={scrollToServices}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-lg animate-bounce mt-16"
          aria-label="Scroll down"
        >
          <ChevronDown className="text-agency-teal" size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
