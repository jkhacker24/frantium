
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-agency-blue text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-display font-bold gradient-text mb-4">NOVA</div>
            <p className="text-gray-300 mb-4">
              We create digital experiences that elevate your business and connect with your audience in meaningful ways.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-agency-teal transition-colors">Brand Strategy</a></li>
              <li><a href="#" className="hover:text-agency-teal transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-agency-teal transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-agency-teal transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-agency-teal transition-colors">SEO Optimization</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-agency-teal transition-colors">About Us</a></li>
              <li><a href="#work" className="hover:text-agency-teal transition-colors">Our Work</a></li>
              <li><a href="#" className="hover:text-agency-teal transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-agency-teal transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-agency-teal transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter to receive updates and industry insights.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-agency-teal"
              />
              <button
                type="submit"
                className="w-full bg-agency-teal hover:bg-opacity-90 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Nova Creative Agency. All rights reserved.
          </p>
          <div className="flex mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm mx-3">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm mx-3">Terms of Service</a>
            <button 
              onClick={scrollToTop} 
              className="ml-4 bg-agency-teal/20 hover:bg-agency-teal/30 transition-colors p-2 rounded-full"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
