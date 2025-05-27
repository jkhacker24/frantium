
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, ArrowRight, X, Circle, Boxes } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle parallax mouse effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { clientX, clientY } = e;
        const { width, height } = heroRef.current.getBoundingClientRect();
        const x = (clientX / width) - 0.5;
        const y = (clientY / height) - 0.5;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation sequence
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Split text animation helper
  const SplitText = ({ text, className = "", baseDelay = 0, step = 0.05 }) => {
    return (
      <span className={className}>
        {text.split('').map((char, i) => (
          <span
            key={i}
            className="char-animation inline-block"
            style={{
              animationDelay: `${baseDelay + (i * step)}s`,
              display: char === ' ' ? 'inline' : 'inline-block'
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    );
  };

  // Geometric decoration shapes that will move with parallax effect
  const decorations = [
    { type: 'circle', top: '15%', left: '10%', size: '120px', rotation: 0 },
    { type: 'square', top: '25%', right: '8%', size: '100px', rotation: 15 },
    { type: 'triangle', bottom: '20%', left: '15%', size: '80px', rotation: 45 },
    { type: 'cross', bottom: '30%', right: '12%', size: '70px', rotation: 30 }
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0f0a08] z-10"
      style={{
        backgroundImage: `radial-gradient(circle at ${50 + mousePosition.x * 5}% ${50 + mousePosition.y * 5}%, rgba(255,94,20,0.15) 0%, transparent 70%)`
      }}
    >
      {/* Geometric decoration elements */}
      {decorations.map((item, index) => {
        const translateX = mousePosition.x * (15 + index * 5);
        const translateY = mousePosition.y * (15 + index * 5);
        return (
          <div
            key={index}
            className="absolute geometric-shape opacity-20"
            style={{
              top: item.top || 'auto',
              left: item.left || 'auto',
              right: item.right || 'auto',
              bottom: item.bottom || 'auto',
              width: item.size,
              height: item.size,
              transform: `translate(${translateX}px, ${translateY}px) rotate(${item.rotation}deg)`,
              transition: 'transform 0.1s ease-out',
              border: item.type === 'circle' ? `2px solid rgba(255,94,20,0.5)` :
                     item.type === 'square' ? `2px solid rgba(255,143,80,0.5)` :
                     item.type === 'triangle' ? `2px solid rgba(255,94,20,0.5)` :
                     `2px solid rgba(255,143,80,0.5)`,
              borderRadius: item.type === 'circle' ? '50%' : '0%'
            }}
          />
        );
      })}
      
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30 z-[-1]"></div>
      
      {/* Vertical line with creative tag */}
      <div className="absolute top-1/4 left-8 md:left-16 hidden lg:flex flex-col items-center">
        <div className="h-32 w-px bg-gradient-to-b from-transparent via-[#FF5E14] to-transparent"></div>
        <div className="mt-4 rotate-90 origin-center transform -translate-x-10">
          <span className="tracking-widest text-xs uppercase text-[#FF5E14]/70 font-mono">Digital Artistry</span>
        </div>
      </div>
      
      {/* Abstract elements */}
      <div
        className="absolute top-20 right-20 hidden lg:block"
        style={{
          transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <Circle className="text-[#FF5E14] opacity-20" size={80} />
      </div>
      
      <div
        className="absolute bottom-40 left-40 hidden lg:block"
        style={{
          transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <Boxes className="text-[#FF8F50] opacity-20" size={100} />
      </div>
      
      <div className="container-tight relative z-10 rounded-lg px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left Content Section */}
          <div className="flex-1 text-left">
            {/* Creative branding */}
            <h3 className="text-sm uppercase tracking-[0.3em] mb-4 text-[#FF5E14]/80 relative">
              <span className={`block transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <SplitText text="DIGITAL DESIGN + MOTION" baseDelay={0.5} />
              </span>
              <span className="block h-[1px] w-20 bg-[#FF5E14]/50 mt-2"></span>
            </h3>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 lg:mb-8 leading-none reveal-text"
              style={{ textShadow: '0 0 40px rgba(255,94,20,0.3)' }}
            >
              <span className={`block transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Visual
              </span>
              <span className="block gradient-text">
                <span className={`transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  Storytelling
                </span>
              </span>
              <span className={`block transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Studio
              </span>
            </h1>

            <p className="text-base lg:text-lg text-white/70 max-w-xl mb-6 lg:mb-8 leading-relaxed">
              <span className={`block transition-all duration-1000 delay-1100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                We transform concepts into captivating visual experiences through premium video editing and graphic design. Our work tells your story and connects with your audience.
              </span>
            </p>

            <div className={`flex flex-wrap gap-4 transition-all duration-1000 delay-1300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Button size="lg" className="bg-gradient-to-r from-[#FF5E14] to-[#FF8F50] hover:opacity-90 transition-all text-sm lg:text-base px-6 lg:px-8 py-3 lg:py-6 font-bold text-white shadow-lg shadow-[#FF5E14]/20 hover:shadow-xl hover:shadow-[#FF5E14]/30 group">
                View Our Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="border-2 border-white/20 bg-black/10 backdrop-blur-md hover:bg-white/5 text-sm lg:text-base px-6 lg:px-8 py-3 lg:py-6 text-white transform hover:-translate-y-1 transition-all">
                Get in Touch
              </Button>
            </div>
          </div>
          
          {/* Right image section - semi-transparent portrait */}
          <div className={`relative flex-1 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div
              className="relative h-[400px] lg:h-[500px] w-full lg:w-[500px]"
              style={{
                transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
                transition: 'transform 0.2s ease-out'
              }}
            >
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <img
                  src="/lovable-uploads/e30ce2fe-36f1-4197-b7aa-df696134172b.png"
                  alt="Creative portrait"
                  className="w-full h-full object-cover image-reveal"
                  style={{
                    animationDelay: '0.8s',
                    filter: 'contrast(1.1) brightness(0.85)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a08] via-transparent to-transparent opacity-90"></div>
                <div className="absolute inset-0 video-lines-effect"></div>
              </div>
              
              {/* Creative elements overlaid on the image */}
              <div className="absolute top-10 right-10 bg-white/10 backdrop-blur-md p-3 rounded-full">
                
              </div>
              
              <div className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-md p-4 rounded-lg">
                <div className="text-xs uppercase tracking-widest text-white/70">Design by</div>
                <div className="text-sm font-bold text-white">FRANTIUM</div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 p-4">
                <div className="w-20 h-20 border-2 border-dashed border-[#FF5E14]/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats with animation */}
        <div className={`mt-12 lg:mt-20 w-full max-w-3xl mx-auto relative transition-all duration-1000 delay-1500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="absolute -left-6 -top-6 w-20 h-20 bg-gradient-to-r from-[#FF5E14] to-[#FF8F50] rounded-full blur-[80px]"></div>
          <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-gradient-to-r from-[#FF5E14] to-[#FF8F50] rounded-full blur-[80px]"></div>
          <div className="bg-black/30 backdrop-blur-md p-6 lg:p-8 rounded-xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#FF5E14] to-[#FF8F50] bg-clip-text text-transparent">500+</span>
              <span className="text-white/70 text-sm lg:text-base">Projects Completed</span>
            </div>
            <div className="h-16 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block"></div>
            <div className="flex flex-col items-center md:items-start">
              <span className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#FF5E14] to-[#FF8F50] bg-clip-text text-transparent">98%</span>
              <span className="text-white/70 text-sm lg:text-base">Client Satisfaction</span>
            </div>
            <div className="h-16 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block"></div>
            <div className="flex flex-col items-center md:items-start">
              <span className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#FF5E14] to-[#FF8F50] bg-clip-text text-transparent">24/7</span>
              <span className="text-white/70 text-sm lg:text-base">Customer Support</span>
            </div>
          </div>
        </div>
        
        <button
          onClick={scrollToServices}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white/5 backdrop-blur-sm p-3 rounded-full border border-white/10 animate-bounce mt-16 group"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} className="text-white group-hover:text-[#FF5E14] transition-colors px-0 py-54 mx-0 my-0" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
