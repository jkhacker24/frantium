
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="text-2xl font-display font-bold gradient-text">
          NOVA
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-8">
            <a href="#services" className="text-agency-blue hover:text-agency-teal transition-colors">Services</a>
            <a href="#about" className="text-agency-blue hover:text-agency-teal transition-colors">About</a>
            <a href="#work" className="text-agency-blue hover:text-agency-teal transition-colors">Work</a>
            <a href="#contact" className="text-agency-blue hover:text-agency-teal transition-colors">Contact</a>
          </nav>
          <a href="#contact" className="btn-primary">Get Started</a>
        </div>
        
        <button className="md:hidden text-agency-blue" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4">
          <nav className="flex flex-col space-y-4 container">
            <a href="#services" className="text-agency-blue hover:text-agency-teal transition-colors px-4 py-2">Services</a>
            <a href="#about" className="text-agency-blue hover:text-agency-teal transition-colors px-4 py-2">About</a>
            <a href="#work" className="text-agency-blue hover:text-agency-teal transition-colors px-4 py-2">Work</a>
            <a href="#contact" className="text-agency-blue hover:text-agency-teal transition-colors px-4 py-2">Contact</a>
            <a href="#contact" className="btn-primary mx-4 text-center">Get Started</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
