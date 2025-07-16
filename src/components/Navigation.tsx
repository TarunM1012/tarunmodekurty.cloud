
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Projects", path: "/projects" },
    { name: "Internships", path: "/internships" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-theme-surface backdrop-blur-md border-b border-theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-theme-text-primary hover:text-theme-primary-start transition-colors">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? "text-theme-primary-start bg-theme-surface-hover"
                      : "text-theme-text-secondary hover:text-theme-text-primary hover:bg-theme-surface"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* Blaze Button */}
            <a
              href="https://blazefounder.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md text-sm font-bold transition-all duration-300 border border-[#e73900] text-[#e73900] hover:text-white hover:bg-[#e73900] shadow-sm hover:shadow-lg"
              style={{
                textShadow: 'none',
                fontWeight: '700'
              }}
            >
              Blaze
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-theme-text-secondary hover:text-theme-text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-theme-surface-hover backdrop-blur-md rounded-lg mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? "text-theme-primary-start bg-theme-surface-hover"
                      : "text-theme-text-secondary hover:text-theme-text-primary hover:bg-theme-surface"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Blaze Button */}
              <a
                href="https://blazefounder.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 mt-3 rounded-md text-base font-bold transition-all duration-300 border border-[#e73900] text-[#e73900] hover:text-white hover:bg-[#e73900] text-center"
                style={{
                  textShadow: 'none',
                  fontWeight: '700'
                }}
              >
                Blaze
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
