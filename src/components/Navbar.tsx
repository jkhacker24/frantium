
import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Animation sequence
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
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
      <div 
        className="container flex items-center justify-between"
        style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 1s ease-out' }}
      >
        <a 
          href="#" 
          className="text-2xl font-display font-bold relative group flex items-center"
        >
          <span className="text-xs uppercase tracking-widest text-[#FF5E14] mr-2 mt-1 opacity-80">©</span>
          <span className="bg-gradient-to-r from-[#FF5E14] to-[#FF8F50] bg-clip-text text-transparent">
            FRANTIUM
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#FF5E14] to-[#FF8F50] transition-all duration-300 group-hover:w-full"></span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-10">
            <a 
              href="#services" 
              className="text-white opacity-80 hover:opacity-100 hover:text-[#FF5E14] transition-colors relative group py-2 text-sm uppercase tracking-wider"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF5E14] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#about" 
              className="text-white opacity-80 hover:opacity-100 hover:text-[#FF5E14] transition-colors relative group py-2 text-sm uppercase tracking-wider"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF5E14] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#work" 
              className="text-white opacity-80 hover:opacity-100 hover:text-[#FF5E14] transition-colors relative group py-2 text-sm uppercase tracking-wider"
            >
              Work
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF5E14] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#contact" 
              className="text-white opacity-80 hover:opacity-100 hover:text-[#FF5E14] transition-colors relative group py-2 text-sm uppercase tracking-wider"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF5E14] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          <a 
            href="#contact" 
            className="px-5 py-2 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full hover:bg-[#FF5E14]/20 hover:border-[#FF5E14]/30 transition-all duration-300 group text-sm flex items-center"
          >
            Start Project
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        
        <button 
          className="md:hidden text-white hover:text-[#FF5E14] transition-colors" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-lg shadow-lg py-6 border-t border-[#FF5E14]/20 animate-fade-in">
          <nav className="flex flex-col space-y-6 container">
            <a 
              href="#services" 
              className="text-white hover:text-[#FF5E14] transition-colors px-4 py-2 text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="text-white hover:text-[#FF5E14] transition-colors px-4 py-2 text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#work" 
              className="text-white hover:text-[#FF5E14] transition-colors px-4 py-2 text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Work
            </a>
            <a 
              href="#contact" 
              className="text-white hover:text-[#FF5E14] transition-colors px-4 py-2 text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-[#FF5E14] to-[#FF8F50] text-white text-center mx-4 py-3 rounded-md flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start Project
              <ArrowRight size={18} className="ml-2" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
