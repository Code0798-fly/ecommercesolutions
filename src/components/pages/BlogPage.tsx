import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Input } from "../ui/input";
import { useState } from "react";

const blogPosts = [
  {
    title: "10 Essential Shopify Apps Every Store Owner Needs in 2025",
    excerpt: "Discover the must-have Shopify apps that can boost your store's functionality, increase conversions, and streamline your operations.",
    image: "https://images.unsplash.com/photo-1727407209320-1fa6ae60ee05?w=800&auto=format&fit=crop",
    category: "E-Commerce",
    date: "October 28, 2025",
    readTime: "5 min read",
    author: "Rajesh Kumar"
  },
  {
    title: "React Performance Optimization: Best Practices for 2025",
    excerpt: "Learn advanced techniques to optimize your React applications for better performance and user experience.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop",
    category: "Web Development",
    date: "October 25, 2025",
    readTime: "8 min read",
    author: "Priya Sharma"
  },
  {
    title: "SEO Trends You Can't Ignore: Complete Guide for Startups",
    excerpt: "Stay ahead of the competition with these crucial SEO strategies that every startup should implement.",
    image: "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?w=800&auto=format&fit=crop",
    category: "SEO",
    date: "October 22, 2025",
    readTime: "6 min read",
    author: "Sneha Gupta"
  },
  {
    title: "WordPress vs Custom Development: Which is Right for You?",
    excerpt: "An in-depth comparison to help you make the right choice for your next web project.",
    image: "https://images.unsplash.com/photo-1603985585179-3d71c35a537c?w=800&auto=format&fit=crop",
    category: "Web Development",
    date: "October 20, 2025",
    readTime: "7 min read",
    author: "Amit Patel"
  },
  {
    title: "Building Your Brand: A Complete Guide for Startups",
    excerpt: "Everything you need to know about establishing a strong brand identity from day one.",
    image: "https://images.unsplash.com/photo-1702468049239-49fd1cf99d20?w=800&auto=format&fit=crop",
    category: "Branding",
    date: "October 18, 2025",
    readTime: "10 min read",
    author: "Rajesh Kumar"
  },
  {
    title: "Node.js Best Practices: Scalable Backend Architecture",
    excerpt: "Learn how to build robust and scalable backend systems using Node.js and modern frameworks.",
    image: "https://images.unsplash.com/photo-1646153114001-495dfb56506d?w=800&auto=format&fit=crop",
    category: "Backend",
    date: "October 15, 2025",
    readTime: "9 min read",
    author: "Rajesh Kumar"
  },
  {
    title: "Landing Page Design: 15 Elements That Convert",
    excerpt: "Discover the key elements that make landing pages convert visitors into customers.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    category: "Design",
    date: "October 12, 2025",
    readTime: "6 min read",
    author: "Priya Sharma"
  },
  {
    title: "Shopify App Development: Getting Started Guide",
    excerpt: "A comprehensive guide to building your first Shopify app with practical examples.",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&auto=format&fit=crop",
    category: "E-Commerce",
    date: "October 10, 2025",
    readTime: "12 min read",
    author: "Rajesh Kumar"
  },
  {
    title: "Mobile-First Design: Why It Matters More Than Ever",
    excerpt: "Understanding the importance of mobile-first approach in modern web development.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop",
    category: "Design",
    date: "October 8, 2025",
    readTime: "5 min read",
    author: "Priya Sharma"
  }
];

const categories = ["All", "E-Commerce", "Web Development", "SEO", "Branding", "Backend", "Design"];

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-slate-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full mb-6 border border-purple-400/30">
              Our Blog
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              Insights & Resources
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Stay updated with the latest trends, tips, and best practices in web development, e-commerce, and digital marketing
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:bg-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category 
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" 
                  : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No articles found matching your criteria.</p>
            </div>
          ) : (
            <>
              {/* Featured Post */}
              <div className="mb-16">
                <Card className="overflow-hidden hover:shadow-2xl transition-shadow border-0 grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-96 lg:h-auto">
                    <ImageWithFallback
                      src={filteredPosts[0].image}
                      alt={filteredPosts[0].title}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-purple-600">
                      Featured
                    </Badge>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <Badge variant="secondary" className="w-fit mb-4 bg-purple-100 text-purple-700">
                      {filteredPosts[0].category}
                    </Badge>
                    <h2 className="text-3xl text-gray-900 mb-4">
                      {filteredPosts[0].title}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {filteredPosts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {filteredPosts[0].date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {filteredPosts[0].readTime}
                      </div>
                    </div>
                    <Button className="w-fit group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      Read Article
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </div>

              {/* Other Posts */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.slice(1).map((post, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-0">
                    <div className="relative h-56 overflow-hidden bg-gray-200">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <Badge className="absolute top-4 left-4 bg-white text-gray-900">
                        {post.category}
                      </Badge>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <Button variant="ghost" className="w-full group/btn -mx-2">
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-br from-purple-900 via-slate-900 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-3xl mx-auto p-8 bg-white/10 backdrop-blur-sm border-white/20 text-center">
            <h2 className="text-3xl text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-300 mb-6">
              Get the latest articles and insights delivered directly to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border-white/30 text-white placeholder:text-gray-400"
              />
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Subscribe
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
