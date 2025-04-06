
import React from "react";
import { Check } from "lucide-react";

const About = () => {
  const stats = [
    { value: "8+", label: "Years Experience" },
    { value: "100+", label: "Projects Completed" },
    { value: "96%", label: "Client Satisfaction" },
    { value: "24", label: "Team Members" },
  ];

  return (
    <section id="about" className="section bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-video bg-gradient-to-tr from-agency-blue to-agency-teal rounded-lg shadow-xl animate-on-scroll">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  {/* This is where a video or image would go */}
                  <div className="text-center p-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Agency Story</h3>
                    <p className="text-white/80">A creative team dedicated to your success</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 -right-6 transform translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg animate-on-scroll">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-agency-teal">{stat.value}</div>
                      <div className="text-sm text-agency-gray">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h5 className="text-agency-teal uppercase tracking-wider font-medium mb-4 animate-on-scroll">
              About Nova
            </h5>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
              A <span className="gradient-text">Creative Agency</span> That Delivers Results
            </h2>
            <p className="text-lg text-agency-gray mb-8 animate-on-scroll">
              We're a team of strategists, designers, developers, and marketers who are passionate about creating digital experiences that drive business growth. Our approach combines creativity with data-driven insights to deliver solutions that not only look good but perform exceptionally well.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {["Strategic Thinking", "Creative Excellence", "Technical Expertise", "Results-Driven"].map((item, index) => (
                <div key={index} className="flex items-center space-x-2 animate-on-scroll">
                  <div className="bg-agency-teal/10 p-1 rounded-full">
                    <Check className="h-5 w-5 text-agency-teal" />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <a href="#contact" className="btn-primary inline-block animate-on-scroll">
              Get to Know Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
