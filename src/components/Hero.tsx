
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
    
    constructor(canvas: HTMLCanvasElement) {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 3 + 1;
      this.speedX = Math.random() * 3 - 1.5;
      this.speedY = Math.random() * 3 - 1.5;
      
      // Brand colors for particles
      const colors = ['#7928CA', '#FF0080', '#0070F3', '#00DFD8'];
      this.color = colors[Math.floor(Math.random() * colors.length)];
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
      }
    }
    
    draw(ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
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
      const particleCount = Math.floor((canvas.width * canvas.height) / 10000);
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(new Particle(canvas));
      }
    };
    
    createParticles();
    
    // Animate particles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Connect particles with lines if they're close enough
      for (let a = 0; a < particlesRef.current.length; a++) {
        for (let b = a; b < particlesRef.current.length; b++) {
          const dx = particlesRef.current[a].x - particlesRef.current[b].x;
          const dy = particlesRef.current[a].y - particlesRef.current[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(121, 40, 202, ${1 - distance/100})`;
            ctx.lineWidth = 0.5;
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
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-[#0A0A14] to-[#1F1346]">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />
      
      <div className="container-tight relative z-10 flex flex-col items-center text-center">
        <div className="animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-[#7928CA]/20 text-white border border-[#7928CA]/30 text-sm font-medium mb-6">
            Welcome to Frantium Creative Agency
          </span>
        </div>

        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-white leading-tight"
          style={{
            animation: 'fade-in 0.8s ease-out',
            textShadow: '0 0 15px rgba(121, 40, 202, 0.5)'
          }}
        >
          We Create <span className="bg-gradient-to-r from-[#7928CA] to-[#FF0080] bg-clip-text text-transparent">Visual Magic</span> That Captivates
        </h1>

        <p 
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-10 leading-relaxed"
          style={{ animation: 'fade-in 0.8s ease-out 0.3s both' }}
        >
          Premium video editing and graphic design services that transform your ideas into stunning visual experiences that leave a lasting impression.
        </p>

        <div 
          className="flex flex-col sm:flex-row gap-6 mt-4"
          style={{ animation: 'fade-in 0.8s ease-out 0.5s both' }}
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#7928CA] to-[#FF0080] hover:opacity-90 transition-all text-white text-lg px-8 py-6"
          >
            See Our Portfolio
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6"
          >
            Get Free Quote
          </Button>
        </div>
        
        <button 
          onClick={scrollToServices}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20 animate-bounce mt-16 group"
          aria-label="Scroll down"
        >
          <ChevronDown className="text-white group-hover:text-[#FF0080] transition-colors" size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
