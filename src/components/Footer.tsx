import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp, ArrowRight } from "lucide-react";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return <footer className="bg-[#0a0705] text-white py-16 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      
      {/* Radial gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0705] to-transparent"></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-20 left-20 w-40 h-40 rounded-full border border-[#FF5E14]/10 opacity-30"></div>
      <div className="absolute bottom-40 right-20 w-60 h-60 rounded-full border border-[#FF8F50]/10 opacity-20"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-display font-bold gradient-text mb-4 flex items-center">
              <span className="text-xs uppercase tracking-widest text-[#FF5E14] mr-2 mt-1 opacity-80">©</span>
              FRANTIUM
            </div>
            <p className="text-gray-400 mb-4">
              We create digital experiences that elevate your business and connect with your audience in meaningful ways.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/5 hover:bg-[#FF5E14]/20 transition-colors p-2 rounded-full border border-white/10 hover:border-[#FF5E14]/30">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/5 hover:bg-[#FF5E14]/20 transition-colors p-2 rounded-full border border-white/10 hover:border-[#FF5E14]/30">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-white/5 hover:bg-[#FF5E14]/20 transition-colors p-2 rounded-full border border-white/10 hover:border-[#FF5E14]/30">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white/5 hover:bg-[#FF5E14]/20 transition-colors p-2 rounded-full border border-white/10 hover:border-[#FF5E14]/30">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white/80 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-[#FF5E14] transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-[1px] bg-[#FF5E14] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Video Editing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5E14] transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-[1px] bg-[#FF5E14] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Motion Graphics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5E14] transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-[1px] bg-[#FF5E14] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Visual Effects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5E14] transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-[1px] bg-[#FF5E14] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Color Grading
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5E14] transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-[1px] bg-[#FF5E14] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Graphic Design
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            
            <ul className="space-y-3 text-gray-400">
              <li>
                
              </li>
              <li>
                
              </li>
              <li>
                
              </li>
              <li>
                
              </li>
              <li>
                
              </li>
            </ul>
          </div>
          
          <div>
            
            
            
            
            <div className="mt-6 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
              <p className="text-sm text-white/70">Looking for a custom quote?</p>
              <a href="#contact" className="text-[#FF5E14] hover:text-[#FF8F50] transition-colors flex items-center mt-1 text-sm font-medium">
                Get in touch
                <ArrowRight size={14} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Frantium Studio. All rights reserved.
          </p>
          <div className="flex mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-[#FF5E14] text-xs uppercase tracking-wider mx-3 transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-[#FF5E14] text-xs uppercase tracking-wider mx-3 transition-colors">Terms</a>
            <button onClick={scrollToTop} className="ml-4 bg-white/5 hover:bg-[#FF5E14]/20 transition-colors p-2 rounded-full border border-white/10 hover:border-[#FF5E14]/30" aria-label="Back to top">
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;