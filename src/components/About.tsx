
import React from "react";
import { Check } from "lucide-react";

const About = () => {
  const stats = [
    { value: "8+", label: "Years Experience" },
    { value: "100+", label: "Projects Completed" },
    { value: "96%", label: "Client Satisfaction" },
    { value: "24", label: "Team Members" }
  ];

  return (
    <section id="about" className="section py-16 md:py-24 bg-[#0f0a08] relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-40 right-20 w-60 h-60 rounded-full border border-[#FF8F50]/10 opacity-20 hidden lg:block"></div>
      
      <div className="container relative z-10 px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-video bg-gradient-to-tr from-[#FF5E14] to-[#FF8F50] rounded-lg shadow-xl animate-on-scroll relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center p-4 lg:p-8">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Our Creative Story</h3>
                    <p className="text-white/80 text-sm lg:text-base">A creative team dedicated to your success</p>
                  </div>
                </div>
                {/* Video lines effect */}
                <div className="absolute inset-0 video-lines-effect"></div>
              </div>
              
              <div className="absolute top-1/2 -right-4 lg:-right-6 transform translate-x-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm border border-white/10 p-4 lg:p-6 rounded-lg shadow-lg animate-on-scroll">
                <div className="grid grid-cols-2 gap-3 lg:gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-lg md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#FF5E14] to-[#FF8F50] bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-xs lg:text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 px-2 lg:px-0">
            <h5 className="text-[#FF5E14] uppercase tracking-wider font-medium mb-4 animate-on-scroll text-sm lg:text-base">
              ABOUT US
            </h5>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 animate-on-scroll text-white">
              A <span className="gradient-text">Creative Agency</span> That Delivers Results
            </h2>
            <p className="text-base lg:text-lg text-gray-300 mb-8 animate-on-scroll leading-relaxed">
              We're a team of strategists, designers, developers, and marketers who are passionate about creating digital experiences that drive business growth. Our approach combines creativity with data-driven insights to deliver solutions that not only look good but perform exceptionally well.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {["Strategic Thinking", "Creative Excellence", "Technical Expertise", "Results-Driven"].map((item, index) => (
                <div key={index} className="flex items-center space-x-2 animate-on-scroll">
                  <div className="bg-[#FF5E14]/20 p-1 rounded-full border border-[#FF5E14]/30">
                    <Check className="h-4 w-4 lg:h-5 lg:w-5 text-[#FF5E14]" />
                  </div>
                  <span className="font-medium text-white text-sm lg:text-base">{item}</span>
                </div>
              ))}
            </div>
            
            <a href="#contact" className="btn-primary inline-block animate-on-scroll text-sm lg:text-base px-6 lg:px-8 py-3">
              Get to Know Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
