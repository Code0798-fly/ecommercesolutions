import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Premium Fashion Store",
    description: "A high-end Shopify store with custom theme, advanced filtering, and seamless checkout experience.",
    image: "https://images.unsplash.com/photo-1727407209320-1fa6ae60ee05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NjE5NTgxMTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Shopify", "E-Commerce", "Custom Theme"],
    category: "E-Commerce"
  },
  {
    title: "Tech Startup Website",
    description: "Modern React-based website with smooth animations, custom CMS, and optimized performance.",
    image: "https://images.unsplash.com/photo-1702468049239-49fd1cf99d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwYnVzaW5lc3MlMjB0ZWFtfGVufDF8fHx8MTc2MjAwMjU2OXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Node.js", "Brand Launch"],
    category: "Web App"
  },
  {
    title: "Restaurant WordPress Site",
    description: "Beautiful WordPress website with online ordering, reservation system, and menu management.",
    image: "https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjE5MzU1Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["WordPress", "PHP", "Custom Plugin"],
    category: "Website"
  },
  {
    title: "Mobile App Interface",
    description: "User-friendly mobile app design with React Native, offering seamless navigation and modern UI.",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYxOTkwMzEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Mobile", "UI/UX"],
    category: "App"
  },
  {
    title: "SEO Landing Page",
    description: "High-converting landing page with perfect SEO scores, fast loading, and lead capture forms.",
    image: "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW8lMjBtYXJrZXRpbmclMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYyMDAyNTcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["SEO", "Landing Page", "Conversion"],
    category: "Marketing"
  },
  {
    title: "Shopify App Integration",
    description: "Custom Shopify app for inventory management with real-time sync and advanced analytics.",
    image: "https://images.unsplash.com/photo-1646153114001-495dfb56506d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBjb2Rpbmd8ZW58MXx8fHwxNzYyMDAyNTY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Shopify Apps", "Node.js", "API"],
    category: "App Development"
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-pink-100 text-pink-700 px-4 py-2 rounded-full mb-4">
            Portfolio
          </div>
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore some of our recent work that helped businesses grow and succeed online
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-0">
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white text-gray-900">
                    {project.category}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-purple-100 text-purple-700">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button variant="ghost" className="w-full group/btn">
                  View Details
                  <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
