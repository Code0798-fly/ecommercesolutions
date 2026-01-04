import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"; // Loader icon add kiya
import { useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser"; // Step 2 waali library

export function Contact() {
  const [isSending, setIsSending] = useState(false); // Loading state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // EmailJS config - Inhe apne dashboard se replace karein
    const serviceID = "service_6m9rgeh";
    const templateID = "template_hjo5llh";
    const publicKey = "lyPM2d-zpXaQCHZuM";

    const dataArray = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Service: ${formData.service}`,
      `Message: ${formData.message}`
    ];

    const messageString = dataArray.join("\n");
    try {
      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message:messageString,
          to_name: "Admin", // Aapka naam
        },
        publicKey
      );

      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (error) {
      console.error("Email Error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 via-slate-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-10">

        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-purple-500 rounded-full blur-3xl"></div>

        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-blue-500 rounded-full blur-3xl"></div>

      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full mb-4 border border-purple-400/30">
            Get In Touch
          </div>
          <h2 className="text-4xl sm:text-5xl text-white mb-4">

                      Let's Work Together

                    </h2>

                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">

                      Ready to start your project? Get in touch and let's create something amazing together

                    </p>   
                         </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Info Cards (Same as before) */}
          <div className="space-y-6">
               <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-colors">

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center flex-shrink-0">

                  <Mail className="w-6 h-6 text-white" />

                </div>

                <div>

                  <h3 className="text-white mb-2">Email</h3>

                  <p className="text-gray-300">knowledgeangel01@gmail.com</p>

                  <p className="text-gray-300">simrankhanna0798@gmail.com</p>

                </div>

              </div>

            </Card>



            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-colors">

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">

                  <Phone className="w-6 h-6 text-white" />

                </div>

                <div>

                  <h3 className="text-white mb-2">Phone</h3>

                  <p className="text-gray-300">+91 9015322160</p>

                  {/* <p className="text-gray-300">+1 (555) 987-6543</p> */}

                </div>

              </div>

            </Card>



            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-colors">

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-lg bg-pink-600 flex items-center justify-center flex-shrink-0">

                  <MapPin className="w-6 h-6 text-white" />

                </div>

                <div>

                  <h3 className="text-white mb-2">Location</h3>

                  <p className="text-gray-300">Remote & Available</p>

                  <p className="text-gray-300">Worldwide</p>

                </div>

              </div>

            </Card>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name *" required className="bg-white/10 text-white" />
                  <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email Address *" required className="bg-white/10 text-white" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="bg-white/10 text-white" />
                  <Input name="service" value={formData.service} onChange={handleChange} placeholder="Service Interested In" className="bg-white/10 text-white" />
                </div>
                <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Project Details *" required rows={6} className="bg-white/10 text-white resize-none" />
                
                <Button 
                  type="submit" 
                  disabled={isSending} 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                >
                  {isSending ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="mr-2 h-4 w-4" /> Send Message</>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}