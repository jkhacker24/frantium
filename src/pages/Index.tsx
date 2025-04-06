
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  // Set body background and title
  useEffect(() => {
    document.body.style.backgroundColor = "#0f0a08";
    document.body.classList.add("text-white");

    // Update title and meta description
    document.title = "Frantium Studio | Premium Video Editing & Design";
    
    // Add meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Frantium Studio delivers premium video editing, motion graphics, and visual design services that captivate audiences and elevate brands.');
    
    return () => {
      document.body.style.backgroundColor = "";
      document.body.classList.remove("text-white");
    }
  }, []);

  // Custom cursor effect with improved physics and interaction
  useEffect(() => {
    // Main cursor
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    cursor.style.pointerEvents = "none";
    cursor.style.width = "8px";
    cursor.style.height = "8px";
    cursor.style.borderRadius = "50%";
    cursor.style.backgroundColor = "#FF5E14";
    cursor.style.position = "fixed";
    cursor.style.transform = "translate(-50%, -50%)";
    cursor.style.zIndex = "9999";
    cursor.style.mixBlendMode = "difference";
    cursor.style.transition = "background-color 0.3s ease";
    document.body.appendChild(cursor);
    
    // Cursor outline/halo
    const cursorOutline = document.createElement("div");
    cursorOutline.classList.add("cursor-outline");
    cursorOutline.style.pointerEvents = "none";
    cursorOutline.style.width = "40px";
    cursorOutline.style.height = "40px";
    cursorOutline.style.borderRadius = "50%";
    cursorOutline.style.border = "1px solid rgba(255, 94, 20, 0.5)";
    cursorOutline.style.position = "fixed";
    cursorOutline.style.transform = "translate(-50%, -50%)";
    cursorOutline.style.zIndex = "9998";
    cursorOutline.style.transition = "width 0.2s, height 0.2s, border-color 0.2s";
    document.body.appendChild(cursorOutline);
    
    // Smooth cursor following
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let cursorOutlineX = 0;
    let cursorOutlineY = 0;
    
    // Cursor speed factors - adjust for smoother or more responsive following
    const cursorSpeed = 1;
    const cursorOutlineSpeed = 0.2;
    
    const updateCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    const animateCursor = () => {
      // Calculate distance to target
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;
      const dxOutline = mouseX - cursorOutlineX;
      const dyOutline = mouseY - cursorOutlineY;
      
      // Move cursor with easing
      cursorX += dx * cursorSpeed;
      cursorY += dy * cursorSpeed;
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      
      // Move outline with more lag
      cursorOutlineX += dxOutline * cursorOutlineSpeed;
      cursorOutlineY += dyOutline * cursorOutlineSpeed;
      cursorOutline.style.left = `${cursorOutlineX}px`;
      cursorOutline.style.top = `${cursorOutlineY}px`;
      
      requestAnimationFrame(animateCursor);
    };
    
    // Start animation loop
    animateCursor();

    // Handle cursor effects for interactive elements
    const growCursor = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
      cursor.style.backgroundColor = "#FF8F50";
      cursorOutline.style.width = "60px";
      cursorOutline.style.height = "60px";
      cursorOutline.style.borderColor = "rgba(255, 143, 80, 0.5)";
    };

    const shrinkCursor = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
      cursor.style.backgroundColor = "#FF5E14";
      cursorOutline.style.width = "40px";
      cursorOutline.style.height = "40px";
      cursorOutline.style.borderColor = "rgba(255, 94, 20, 0.5)";
    };
    
    // Handle cursor click effect
    const handleMouseDown = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(0.8)";
      cursorOutline.style.width = "30px";
      cursorOutline.style.height = "30px";
    };
    
    const handleMouseUp = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
      cursorOutline.style.width = "40px";
      cursorOutline.style.height = "40px";
    };

    window.addEventListener("mousemove", updateCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Handle interactive elements
    const addInteractiveListeners = () => {
      const allInteractive = document.querySelectorAll("a, button, input, textarea, select, [role='button']");
      allInteractive.forEach(el => {
        el.addEventListener("mouseenter", growCursor);
        el.addEventListener("mouseleave", shrinkCursor);
      });
    };
    
    // Initial setup
    addInteractiveListeners();
    
    // Set up mutation observer to handle dynamically added elements
    const observer = new MutationObserver(() => {
      addInteractiveListeners();
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.removeChild(cursor);
      document.body.removeChild(cursorOutline);
      observer.disconnect();
    };
  }, []);
  
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      threshold: 0.1
    });
    
    // Observe all elements with the animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
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
