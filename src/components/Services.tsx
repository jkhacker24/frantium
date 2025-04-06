
import React, { useState } from "react";
import { 
  Video, 
  Palette, 
  Layers, 
  Camera, 
  Film, 
  Globe
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const serviceItems = [
  {
    icon: <Video className="h-10 w-10 text-[#FF0080]" />,
    title: "Video Editing",
    description: "Professional video editing with stunning visual effects, color correction, and seamless transitions that captivate your audience.",
    gradient: "from-[#7928CA] to-[#FF0080]"
  },
  {
    icon: <Palette className="h-10 w-10 text-[#00DFD8]" />,
    title: "Graphic Design",
    description: "Eye-catching graphics that communicate your message effectively and establish your brand's visual identity.",
    gradient: "from-[#0070F3] to-[#00DFD8]"
  },
  {
    icon: <Layers className="h-10 w-10 text-[#0070F3]" />,
    title: "Motion Graphics",
    description: "Dynamic animations that bring your ideas to life and add a professional edge to your videos and presentations.",
    gradient: "from-[#7928CA] to-[#0070F3]"
  },
  {
    icon: <Camera className="h-10 w-10 text-[#7928CA]" />,
    title: "Visual Effects",
    description: "Cutting-edge VFX that transform ordinary footage into extraordinary visual experiences that leave audiences amazed.",
    gradient: "from-[#FF0080] to-[#7928CA]"
  },
  {
    icon: <Film className="h-10 w-10 text-[#00DFD8]" />,
    title: "3D Animation",
    description: "Immersive 3D animations and visualizations that add depth and perspective to your creative projects.",
    gradient: "from-[#00DFD8] to-[#0070F3]"
  },
  {
    icon: <Globe className="h-10 w-10 text-[#FF0080]" />,
    title: "Social Media Content",
    description: "Engaging and shareable content optimized for social media platforms to boost your digital presence.",
    gradient: "from-[#FF0080] to-[#00DFD8]"
  }
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="section py-24 bg-[#0A0A14]">
      <div className="container-tight">
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#7928CA]/20 text-white border border-[#7928CA]/30 text-sm font-medium mb-6">
              Our Creative Services
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transform Your <span className="bg-gradient-to-r from-[#7928CA] to-[#FF0080] bg-clip-text text-transparent">Ideas</span> Into Reality
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We deliver cutting-edge creative solutions that help you stand out in today's competitive digital landscape.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card 
                className={`relative overflow-hidden bg-[#151528] border-0 h-full group transition-all duration-500 hover:shadow-xl hover:shadow-[#7928CA]/20 ${
                  hoveredIndex === index ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`absolute top-0 left-0 h-1 w-0 bg-gradient-to-r ${service.gradient} group-hover:w-full transition-all duration-500`}></div>
                <div className={`absolute bottom-0 right-0 h-1 w-0 bg-gradient-to-l ${service.gradient} group-hover:w-full transition-all duration-500`}></div>
                
                <CardContent className="p-8">
                  <div className="mb-6 relative">
                    <div className="p-3 rounded-lg inline-block bg-white/5 backdrop-blur-sm border border-white/10">
                      {service.icon}
                    </div>
                    <div className={`absolute -inset-3 bg-gradient-to-r ${service.gradient} opacity-0 blur-xl group-hover:opacity-20 transition-opacity duration-500`}></div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-white/90">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">
                    {service.description}
                  </p>
                  
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <a 
                      href="#"
                      className={`inline-flex items-center text-sm font-medium bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group-hover:opacity-90`}
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
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
