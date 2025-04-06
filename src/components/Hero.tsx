
import React, { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Array<Particle>>([]);

  // Animation class for particles
  class Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
    alpha: number;
    colorIndex: number;
    
    constructor(canvas: HTMLCanvasElement) {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 5 + 1;
      this.speedX = Math.random() * 3 - 1.5;
      this.speedY = Math.random() * 3 - 1.5;
      this.alpha = Math.random() * 0.8 + 0.2;
      
      // Enhanced brand colors for particles
      const colors = ['#7928CA', '#FF0080', '#0070F3', '#00DFD8', '#6EE7B7', '#3B82F6'];
      this.colorIndex = Math.floor(Math.random() * colors.length);
      this.color = colors[this.colorIndex];
    }
    
    update() {
      if (canvasRef.current) {
        // Update position based on speed
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x > canvasRef.current.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvasRef.current.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
        
        // Fixed pulsating size effect to prevent negative values
        const pulseFactor = Math.sin(Date.now() * 0.001) * 0.1;
        // Ensure size is always positive
        this.size = Math.max(0.5, this.size + pulseFactor);
      }
    }
    
    draw(ctx: CanvasRenderingContext2D) {
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      // Ensure radius is never negative
      const safeSize = Math.max(0.1, this.size);
      ctx.arc(this.x, this.y, safeSize, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Create particles
    const createParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 8000); // More particles
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(new Particle(canvas));
      }
    };
    createParticles();

    // Animate particles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add a subtle gradient background to canvas
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(10, 10, 20, 0.2)');
      gradient.addColorStop(1, 'rgba(31, 19, 70, 0.2)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Connect particles with lines if they're close enough
      for (let a = 0; a < particlesRef.current.length; a++) {
        for (let b = a; b < particlesRef.current.length; b++) {
          const dx = particlesRef.current[a].x - particlesRef.current[b].x;
          const dy = particlesRef.current[a].y - particlesRef.current[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.beginPath();
            
            // Create gradient lines between particles
            const gradient = ctx.createLinearGradient(
              particlesRef.current[a].x, 
              particlesRef.current[a].y, 
              particlesRef.current[b].x, 
              particlesRef.current[b].y
            );
            
            gradient.addColorStop(0, particlesRef.current[a].color);
            gradient.addColorStop(1, particlesRef.current[b].color);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.8 * (1 - distance / 120);
            ctx.moveTo(particlesRef.current[a].x, particlesRef.current[a].y);
            ctx.lineTo(particlesRef.current[b].x, particlesRef.current[b].y);
            ctx.stroke();
          }
        }
      }
      
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-[#0A0A14] to-[#1F1346]">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />
      
      <div className="container-tight relative z-10 flex flex-col items-center text-center">
        <div className="animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#7928CA]/30 to-[#FF0080]/30 text-white border border-[#7928CA]/30 text-sm font-medium mb-6 transform hover:scale-105 transition-all backdrop-blur-sm">
            Premium Video Editing & Graphic Design
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-white leading-tight animate-[fade-in_1s_ease-out]"
            style={{
              textShadow: '0 0 20px rgba(121, 40, 202, 0.6), 0 0 40px rgba(255, 0, 128, 0.4)'
            }}>
          We Create <span className="bg-gradient-to-r from-[#7928CA] via-[#FF0080] to-[#00DFD8] bg-clip-text text-transparent">Visual Magic</span> That Captivates
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-10 leading-relaxed animate-[fade-in_1s_ease-out_0.3s_both]">
          At <span className="font-bold text-white">Frantium</span>, we transform your ideas into stunning visual experiences that leave a lasting impression on your audience.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mt-4 animate-[fade-in_1s_ease-out_0.5s_both]">
          <Button size="lg" 
                  className="bg-gradient-to-r from-[#7928CA] to-[#FF0080] hover:opacity-90 transition-all text-lg px-8 py-6 font-extrabold text-white shadow-lg shadow-[#7928CA]/30 hover:shadow-xl hover:shadow-[#7928CA]/40 transform hover:translate-y-[-2px]">
            See Our Portfolio
          </Button>
          <Button variant="outline" 
                  size="lg" 
                  className="border-2 border-white/30 bg-black/20 backdrop-blur-md hover:bg-white/10 text-lg px-8 py-6 text-white transform hover:translate-y-[-2px] transition-all">
            Get Free Quote
          </Button>
        </div>
        
        <div className="mt-20 w-full max-w-3xl mx-auto animate-[fade-in_1s_ease-out_0.8s_both] relative">
          <div className="absolute -left-6 -top-6 w-20 h-20 bg-gradient-to-r from-[#7928CA] to-[#FF0080] rounded-full blur-[80px]"></div>
          <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-gradient-to-r from-[#00DFD8] to-[#0070F3] rounded-full blur-[80px]"></div>
          <div className="bg-black/30 backdrop-blur-md p-8 rounded-xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-4xl font-bold bg-gradient-to-r from-[#00DFD8] to-[#0070F3] bg-clip-text text-transparent">500+</span>
              <span className="text-white/70">Projects Completed</span>
            </div>
            <div className="h-16 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block"></div>
            <div className="flex flex-col items-center md:items-start">
              <span className="text-4xl font-bold bg-gradient-to-r from-[#7928CA] to-[#FF0080] bg-clip-text text-transparent">98%</span>
              <span className="text-white/70">Client Satisfaction</span>
            </div>
            <div className="h-16 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block"></div>
            <div className="flex flex-col items-center md:items-start">
              <span className="text-4xl font-bold bg-gradient-to-r from-[#FF0080] to-[#7928CA] bg-clip-text text-transparent">24/7</span>
              <span className="text-white/70">Customer Support</span>
            </div>
          </div>
        </div>
        
        <button 
          onClick={scrollToServices} 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20 animate-bounce mt-16 group shadow-lg shadow-purple-900/20"
          aria-label="Scroll down"
        >
          <ChevronDown className="text-white group-hover:text-[#FF0080] transition-colors" size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
