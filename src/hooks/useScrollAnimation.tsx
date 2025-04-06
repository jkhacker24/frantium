
import { useEffect } from "react";

const useScrollAnimation = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementHeight = element.getBoundingClientRect().height;
        const windowHeight = window.innerHeight;
        
        // Add class when element is 15% in view
        if (elementTop < windowHeight - elementHeight * 0.15) {
          element.classList.add("is-visible");
        }
      });
    };
    
    // Initial check
    animateOnScroll();
    
    // Add event listener
    window.addEventListener("scroll", animateOnScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener("scroll", animateOnScroll);
    };
  }, []);
};

export default useScrollAnimation;
