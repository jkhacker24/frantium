
import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="section bg-gradient-to-br from-agency-blue to-black text-white">
      <div className="container-tight">
        <div className="mb-16 text-center">
          <h5 className="text-agency-teal uppercase tracking-wider font-medium mb-4 animate-on-scroll">
            Get In Touch
          </h5>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-on-scroll">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto animate-on-scroll">
            Ready to start your project? Reach out to us today and let's create something amazing together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-on-scroll">
            <div className="bg-white/10 backdrop-filter backdrop-blur-lg rounded-lg p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-agency-teal/20 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-agency-teal" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-gray-300">+1 (234) 567-8901</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-agency-teal/20 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-agency-teal" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-gray-300">hello@novaagency.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-agency-teal/20 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-agency-teal" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-gray-300">123 Creative Street, Suite 101<br />New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-agency-teal/20 p-3 rounded-full">
                    <Clock className="h-5 w-5 text-agency-teal" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Working Hours</h4>
                    <p className="text-gray-300">Monday - Friday: 9am - 6pm<br />Saturday: By appointment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-agency-blue">Send Us a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
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
                          <FormLabel className="text-gray-700">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email" {...field} />
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
                        <FormLabel className="text-gray-700">Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Subject" {...field} />
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
                        <FormLabel className="text-gray-700">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message" 
                            className="min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-agency-teal hover:bg-opacity-90 text-white"
                  >
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
