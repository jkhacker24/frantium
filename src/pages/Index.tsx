
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  // Set body background
  useEffect(() => {
    document.body.style.backgroundColor = "#0A0A14";
    document.body.classList.add("text-white");

    // Update title
    document.title = "Frantium | Premium Video Editing & Graphic Design Agency";

    return () => {
      document.body.style.backgroundColor = "";
      document.body.classList.remove("text-white");
    }
  }, []);

  // Custom cursor effect
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    cursor.style.pointerEvents = "none";
    cursor.style.width = "12px";
    cursor.style.height = "12px";
    cursor.style.borderRadius = "50%";
    cursor.style.backgroundColor = "#FF0080";
    cursor.style.position = "fixed";
    cursor.style.transform = "translate(-50%, -50%)";
    cursor.style.zIndex = "9999";
    cursor.style.mixBlendMode = "difference";
    cursor.style.transition = "transform 0.2s ease";
    document.body.appendChild(cursor);

    const updateCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const growCursor = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(2.5)";
    };

    const shrinkCursor = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
    };

    window.addEventListener("mousemove", updateCursor);

    const allLinks = document.querySelectorAll("a, button");
    allLinks.forEach(link => {
      link.addEventListener("mouseenter", growCursor);
      link.addEventListener("mouseleave", shrinkCursor);
    });

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      allLinks.forEach(link => {
        link.removeEventListener("mouseenter", growCursor);
        link.removeEventListener("mouseleave", shrinkCursor);
      });
      document.body.removeChild(cursor);
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
