import { Badge } from "./ui/badge";

const skillCategories = [
  {
    category: "E-Commerce",
    skills: ["Shopify", "Shopify Apps", "WooCommerce", "Payment Gateways", "Inventory Management"]
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "Responsive Design"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "PHP", "REST APIs", "GraphQL", "Database Design", "Server Management"]
  },
  {
    category: "CMS & Platforms",
    skills: ["WordPress", "Custom Themes", "Plugin Development", "Headless CMS"]
  },
  {
    category: "Marketing & SEO",
    skills: ["SEO Optimization", "Google Analytics", "Landing Pages", "Conversion Optimization", "Performance Tuning"]
  },
  {
    category: "Other",
    skills: ["Git", "CI/CD", "Figma to Code", "Brand Development", "Technical Support"]
  }
];

export function Skills() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            Skills & Technologies
          </div>
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4">
            Our Tech Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We use modern technologies and proven frameworks to build scalable, secure, and high-performing applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl text-gray-900 border-l-4 border-purple-600 pl-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="bg-gray-100 text-gray-800 hover:bg-purple-100 hover:text-purple-800 transition-colors cursor-default px-4 py-2"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
