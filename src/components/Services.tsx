
import React from "react";
import { Monitor, Palette, BarChart4, Globe, Smartphone, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const serviceItems = [
  {
    icon: <Palette className="h-10 w-10 text-agency-teal" />,
    title: "Brand Strategy & Design",
    description: "We craft authentic brand identities that connect with your audience and stand out in the market."
  },
  {
    icon: <Monitor className="h-10 w-10 text-agency-teal" />,
    title: "Web Design & Development",
    description: "Custom websites that are not only visually stunning but also functional, responsive, and optimized for conversion."
  },
  {
    icon: <Smartphone className="h-10 w-10 text-agency-teal" />,
    title: "Mobile App Development",
    description: "Intuitive and engaging mobile experiences that keep users coming back and drive your business goals."
  },
  {
    icon: <BarChart4 className="h-10 w-10 text-agency-teal" />,
    title: "Digital Marketing",
    description: "Strategic campaigns that increase visibility, drive traffic, and convert visitors into loyal customers."
  },
  {
    icon: <Globe className="h-10 w-10 text-agency-teal" />,
    title: "SEO Optimization",
    description: "Boost your online presence with our data-driven SEO strategies designed to improve rankings and drive organic traffic."
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-agency-teal" />,
    title: "Content Creation",
    description: "Compelling content that tells your story, engages your audience, and establishes your expertise."
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container-tight">
        <div className="mb-16 text-center">
          <h5 className="text-agency-teal uppercase tracking-wider font-medium mb-4 animate-on-scroll">
            What We Offer
          </h5>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-on-scroll">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-agency-gray max-w-2xl mx-auto animate-on-scroll">
            We provide end-to-end solutions designed to transform your vision into reality, with a focus on results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow animate-on-scroll">
              <CardHeader className="pb-4">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-agency-gray">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
