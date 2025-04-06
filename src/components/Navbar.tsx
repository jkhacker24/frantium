
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a 
          href="#" 
          className="text-3xl font-display font-bold relative group"
        >
          <span className="bg-gradient-to-r from-[#7928CA] to-[#FF0080] bg-clip-text text-transparent">
            FRANTIUM
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7928CA] to-[#FF0080] transition-all duration-300 group-hover:w-full"></span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-10">
            <a 
              href="#services" 
              className="text-white opacity-80 hover:opacity-100 hover:text-[#FF0080] transition-colors relative group py-2"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF0080] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#about" 
              className="text-white opacity-80 hover:opacity-100 hover:text-[#FF0080] transition-colors relative group py-2"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF0080] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#work" 
              className="text-white opacity-80 hover:opacity-100 hover:text-[#FF0080] transition-colors relative group py-2"
            >
              Work
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF0080] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#contact" 
              className="text-white opacity-80 hover:opacity-100 hover:text-[#FF0080] transition-colors relative group py-2"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF0080] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          <a 
            href="#contact" 
            className="px-6 py-3 bg-gradient-to-r from-[#7928CA] to-[#FF0080] text-white rounded-md hover:shadow-lg hover:shadow-[#7928CA]/30 transition-all duration-300"
          >
            Start Project
          </a>
        </div>
        
        <button 
          className="md:hidden text-white hover:text-[#FF0080] transition-colors" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-lg shadow-lg py-6 border-t border-white/10 animate-fade-in">
          <nav className="flex flex-col space-y-6 container">
            <a 
              href="#services" 
              className="text-white hover:text-[#FF0080] transition-colors px-4 py-2 text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="text-white hover:text-[#FF0080] transition-colors px-4 py-2 text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#work" 
              className="text-white hover:text-[#FF0080] transition-colors px-4 py-2 text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Work
            </a>
            <a 
              href="#contact" 
              className="text-white hover:text-[#FF0080] transition-colors px-4 py-2 text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-[#7928CA] to-[#FF0080] text-white text-center mx-4 py-3 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start Project
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
