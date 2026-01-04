import { Card } from "../ui/card";
import { CheckCircle2, Users, Target, Award, Zap, Heart } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to delivering exceptional digital solutions that drive real business growth."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our success. We work closely with you throughout the entire journey."
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "We stay ahead of technology trends to provide cutting-edge solutions."
    },
    {
      icon: Heart,
      title: "Passionate Team",
      description: "Our team loves what they do, and it shows in every project we deliver."
    }
  ];

  const achievements = [
    { number: "50+", label: "Projects Completed" },
    { number: "40+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Full-Stack Developer & Founder",
      expertise: "React, Node.js, Shopify"
    },
    {
      name: "Priya Sharma",
      role: "UI/UX Designer",
      expertise: "Design Systems, Figma"
    },
    {
      name: "Amit Patel",
      role: "WordPress Specialist",
      expertise: "Custom Themes, Plugins"
    },
    {
      name: "Sneha Gupta",
      role: "SEO Expert",
      expertise: "Technical SEO, Analytics"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-slate-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full mb-6 border border-purple-400/30">
              About Us
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              Building Digital Dreams Into Reality
            </h1>
            <p className="text-xl text-gray-300">
              We're a passionate team of developers, designers, and digital strategists dedicated to helping businesses thrive in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl sm:text-4xl text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2025, EcommerceSolutions started with a simple mission: to help businesses succeed online through exceptional web development and digital solutions.
                </p>
                <p>
                  What began as a small freelance operation has grown into a full-service digital agency, serving clients from startups to established businesses across various industries.
                </p>
                <p>
                  We specialize in creating custom Shopify stores, WordPress websites, React applications, and comprehensive digital marketing strategies that deliver results.
                </p>
                <p>
                  Our team brings together diverse expertise in web development, design, SEO, and e-commerce to provide holistic solutions that address all your digital needs.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-purple-600 to-pink-600 text-white p-8 rounded-2xl shadow-xl">
                <div className="text-4xl mb-2">5+</div>
                <div>Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow border-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-slate-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {achievement.number}
                </div>
                <div className="text-gray-300">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Talented professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow border-0">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mx-auto mb-4 text-white text-3xl">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-purple-600 mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600">
                  {member.expertise}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
                Why Choose Us?
              </h2>
            </div>

            <div className="space-y-4">
              {[
                "Proven track record with 50+ successful projects",
                "Expert team with 5+ years of combined experience",
                "Custom solutions tailored to your specific needs",
                "Transparent communication throughout the project",
                "Ongoing support and maintenance after launch",
                "Competitive pricing without compromising quality",
                "Latest technologies and best practices",
                "100% client satisfaction guarantee"
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
