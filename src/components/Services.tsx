import { Card } from "./ui/card";
import { ShoppingCart, Smartphone, Code, Globe, Search, Sparkles, Package, TrendingUp } from "lucide-react";

const services = [
  {
    icon: ShoppingCart,
    title: "Shopify Development",
    description: "Custom Shopify stores with stunning designs, optimized checkout flows, and seamless third-party integrations.",
    gradient: "from-green-500 to-emerald-600"
  },
  {
    icon: Package,
    title: "Shopify App Development",
    description: "Build powerful Shopify apps to extend functionality and automate your e-commerce workflows.",
    gradient: "from-green-600 to-teal-600"
  },
  {
    icon: Globe,
    title: "WordPress Solutions",
    description: "Professional WordPress websites with custom themes, plugins, and CMS that's easy to manage.",
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    icon: Code,
    title: "React Development",
    description: "Modern, fast, and interactive web applications built with React for exceptional user experiences.",
    gradient: "from-blue-600 to-indigo-600"
  },
  {
    icon: Smartphone,
    title: "Full-Stack Development",
    description: "End-to-end web applications using Node.js, PHP, and modern frameworks for robust solutions.",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    icon: Sparkles,
    title: "Landing Pages",
    description: "High-converting landing pages designed to capture leads and drive conversions for your business.",
    gradient: "from-orange-500 to-red-600"
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your search rankings with technical SEO, content optimization, and performance improvements.",
    gradient: "from-yellow-500 to-orange-600"
  },
  {
    icon: TrendingUp,
    title: "Brand Launch for Startups",
    description: "Complete digital presence from logo to website, helping startups establish their brand identity online.",
    gradient: "from-pink-500 to-rose-600"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
            Services
          </div>
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4">
            What We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive web development services tailored to grow your business and achieve your goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white group cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
