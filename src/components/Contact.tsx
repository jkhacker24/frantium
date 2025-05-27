
import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters."
  }),
  email: z.string().email({
    message: "Please enter a valid email address."
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters."
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters."
  })
});

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible."
    });
    form.reset();
  }

  return (
    <section id="contact" className="section py-16 md:py-24 bg-[#0f0a08] relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      
      {/* Geometric shapes */}
      <div className="absolute bottom-20 left-20 w-60 h-60 rounded-full border border-[#FF8F50]/10 opacity-20 hidden lg:block"></div>
      
      <div className="container-tight relative z-10 px-4 lg:px-6">
        <div className="mb-12 md:mb-16 text-center">
          <h5 className="text-[#FF5E14] uppercase tracking-wider font-medium mb-4 animate-on-scroll text-sm lg:text-base">
            Get In Touch
          </h5>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-on-scroll text-white">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-300 max-w-2xl mx-auto animate-on-scroll px-4">
            Ready to start your project? Reach out to us today and let's create something amazing together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="animate-on-scroll">
            <div className="bg-black/40 backdrop-filter backdrop-blur-lg rounded-lg p-6 lg:p-8 h-full border border-white/10">
              <h3 className="text-xl lg:text-2xl font-semibold mb-6 text-white">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#FF5E14]/20 p-3 rounded-full border border-[#FF5E14]/30">
                    <Mail className="h-5 w-5 text-[#FF5E14]" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-white text-sm lg:text-base">Email</h4>
                    <p className="text-gray-300 text-sm lg:text-base">frantium.universe24@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#FF5E14]/20 p-3 rounded-full border border-[#FF5E14]/30">
                    <MapPin className="h-5 w-5 text-[#FF5E14]" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-white text-sm lg:text-base">Location</h4>
                    <p className="text-gray-300 text-sm lg:text-base">123 Creative Street, Suite 101<br />New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#FF5E14]/20 p-3 rounded-full border border-[#FF5E14]/30">
                    <Clock className="h-5 w-5 text-[#FF5E14]" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-white text-sm lg:text-base">Working Hours</h4>
                    <p className="text-gray-300 text-sm lg:text-base">Monday - Friday: 9am - 6pm<br />Saturday: By appointment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <div className="bg-black/40 backdrop-blur-lg rounded-lg p-6 lg:p-8 border border-white/10">
              <h3 className="text-xl lg:text-2xl font-semibold mb-6 text-white">Send Us a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email" {...field} className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Subject" {...field} className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Your message" className="min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-gray-400" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-[#FF5E14] to-[#FF8F50] hover:opacity-90 text-white">
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
