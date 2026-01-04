import { Github, Linkedin, Twitter, Mail } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string, scrollTo?: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleClick = (page: string, scrollTo?: string) => {
    onNavigate(page, scrollTo);
    if (!scrollTo) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-gray-300 py-12 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl text-white mb-4">EcommerceSolutions</h3>
            <p className="text-gray-400">
              Building digital solutions that transform businesses and drive growth.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleClick('home', 'services')} className="hover:text-purple-400 transition-colors">
                  Shopify Development
                </button>
              </li>
              <li>
                <button onClick={() => handleClick('home', 'services')} className="hover:text-purple-400 transition-colors">
                  WordPress Solutions
                </button>
              </li>
              <li>
                <button onClick={() => handleClick('home', 'services')} className="hover:text-purple-400 transition-colors">
                  React Development
                </button>
              </li>
              <li>
                <button onClick={() => handleClick('home', 'services')} className="hover:text-purple-400 transition-colors">
                  SEO Services
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleClick('about')} className="hover:text-purple-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleClick('home', 'portfolio')} className="hover:text-purple-400 transition-colors">
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => handleClick('home', 'contact')} className="hover:text-purple-400 transition-colors">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={() => handleClick('blog')} className="hover:text-purple-400 transition-colors">
                  Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-600 transition-colors"
                aria-label="Github"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@yourcompany.com" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} EcommerceSolutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
