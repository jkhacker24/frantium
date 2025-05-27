
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Quantum Branding",
    category: "Brand Design",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["branding", "design"]
  },
  {
    title: "Pulse E-commerce",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["web", "development"]
  },
  {
    title: "Nomad Travel App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["app", "mobile"]
  },
  {
    title: "Harvest Market",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["marketing", "design"]
  },
  {
    title: "Horizon Analytics",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["web", "development"]
  },
  {
    title: "Elevate Fitness",
    category: "Brand Design",
    image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["branding", "design"]
  }
];

const categories = ["All", "Brand Design", "Web Development", "Mobile App", "Digital Marketing"];

const Work = () => {
  const [filter, setFilter] = useState("All");
  const filteredProjects = filter === "All" ? projects : projects.filter(project => project.category === filter);

  return (
    <section id="work" className="section py-16 md:py-24 bg-[#0f0a08] relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full border border-[#FF5E14]/10 opacity-30 hidden lg:block"></div>
      
      <div className="container-tight relative z-10 px-4 lg:px-6">
        <div className="mb-12 md:mb-16 text-center">
          <h5 className="text-[#FF5E14] uppercase tracking-wider font-medium mb-4 animate-on-scroll text-sm lg:text-base">
            Our Portfolio
          </h5>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-on-scroll text-white">
            Featured <span className="gradient-text font-semibold">Work</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-300 max-w-2xl mx-auto mb-8 lg:mb-10 animate-on-scroll px-4">
            Browse our latest projects and see how we've helped our clients achieve their goals.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 lg:gap-3 mb-8 lg:mb-10 animate-on-scroll px-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setFilter(category)}
                className={`px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-medium transition-all ${
                  filter === category
                    ? "bg-gradient-to-r from-[#FF5E14] to-[#FF8F50] text-white"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 lg:px-0">
          {filteredProjects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-md animate-on-scroll bg-black/40 border border-white/10">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 lg:p-6">
                <span className="text-[#FF5E14] text-xs lg:text-sm font-medium">{project.category}</span>
                <h3 className="text-white text-lg lg:text-xl font-bold mb-3">{project.title}</h3>
                <a href="#" className="flex items-center text-white text-sm font-medium">
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 lg:mt-16 animate-on-scroll">
          <a href="#" className="inline-flex items-center px-6 lg:px-8 py-3 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300 text-sm lg:text-base">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
