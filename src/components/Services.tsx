
import React, { useState } from "react";
import { Video, Palette, Layers, Camera, Film, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const serviceItems = [
  {
    icon: <Video className="h-8 w-8 text-[#FF5E14]" />,
    title: "Video Editing",
    description: "Professional video editing with stunning visual effects, color correction, and seamless transitions that captivate your audience.",
    gradient: "from-[#FF5E14] to-[#FF8F50]"
  },
  {
    icon: <Palette className="h-8 w-8 text-[#FF8F50]" />,
    title: "Graphic Design",
    description: "Eye-catching graphics that communicate your message effectively and establish your brand's visual identity.",
    gradient: "from-[#FF8F50] to-[#FF5E14]"
  },
  {
    icon: <Layers className="h-8 w-8 text-[#FF5E14]" />,
    title: "Motion Graphics",
    description: "Dynamic animations that bring your ideas to life and add a professional edge to your videos and presentations.",
    gradient: "from-[#FF5E14] to-[#FF8F50]"
  },
  {
    icon: <Camera className="h-8 w-8 text-[#FF8F50]" />,
    title: "Visual Effects",
    description: "Cutting-edge VFX that transform ordinary footage into extraordinary visual experiences that leave audiences amazed.",
    gradient: "from-[#FF8F50] to-[#FF5E14]"
  },
  {
    icon: <Film className="h-8 w-8 text-[#FF5E14]" />,
    title: "3D Animation",
    description: "Immersive 3D animations and visualizations that add depth and perspective to your creative projects.",
    gradient: "from-[#FF5E14] to-[#FF8F50]"
  },
  {
    icon: <Globe className="h-8 w-8 text-[#FF8F50]" />,
    title: "Social Media Content",
    description: "Engaging and shareable content optimized for social media platforms to boost your digital presence.",
    gradient: "from-[#FF8F50] to-[#FF5E14]"
  }
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="section py-16 md:py-24 bg-[#0f0a08] relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full border border-[#FF5E14]/10 opacity-30 hidden lg:block"></div>
      <div className="absolute bottom-40 right-10 w-40 h-40 rounded-full border border-[#FF8F50]/10 opacity-20 hidden lg:block"></div>
      
      <div className="container-tight relative z-10">
        <div className="mb-12 md:mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/5 text-white border border-white/10 text-sm font-medium mb-6 backdrop-blur-sm">
              Our Creative Services
            </span>
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transform Your <span className="bg-gradient-to-r from-[#FF5E14] to-[#FF8F50] bg-clip-text text-transparent">Ideas</span> Into Reality
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We deliver cutting-edge creative solutions that help you stand out in today's competitive digital landscape.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 lg:px-0">
          {serviceItems.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card
                className={`relative overflow-hidden bg-black/40 border border-white/10 h-full group transition-all duration-500 hover:shadow-xl hover:shadow-[#FF5E14]/20 backdrop-blur-sm ${
                  hoveredIndex === index ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`absolute top-0 left-0 h-1 w-0 bg-gradient-to-r ${service.gradient} group-hover:w-full transition-all duration-500`}></div>
                
                <CardContent className="p-6 lg:p-8">
                  <div className="mb-6 relative">
                    <div className="p-3 rounded-lg inline-block bg-white/5 backdrop-blur-sm border border-white/10">
                      {service.icon}
                    </div>
                    <div className={`absolute -inset-3 bg-gradient-to-r ${service.gradient} opacity-0 blur-xl group-hover:opacity-20 transition-opacity duration-500`}></div>
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-white group-hover:text-white/90">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 text-sm lg:text-base">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
