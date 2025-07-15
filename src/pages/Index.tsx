
import Navigation from "@/components/Navigation";
import SocialLinks from "@/components/SocialLinks";
import RotatingText from "@/components/RotatingText";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-bg-start via-theme-bg-via to-theme-bg-end">
      <Navigation />
      
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-theme-text-primary mb-6 animate-fade-in">
            Welcome to My
            <span className="block bg-gradient-to-r from-theme-primary-start to-theme-primary-end bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          
          <RotatingText />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in delay-400">
            <Link 
              to="/projects"
              className="px-8 py-3 bg-gradient-to-r from-theme-primary-start to-theme-primary-end text-theme-text-primary font-semibold rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-theme-primary-start/25 text-center"
            >
              View My Work
            </Link>
            <button className="px-8 py-3 border-2 border-theme-primary-start text-theme-primary-start font-semibold rounded-lg hover:bg-theme-surface-hover transition-all duration-300">
              Download Resume
            </button>
          </div>
          
          {/* Social Links */}
          <SocialLinks />
        </div>
        
        {/* Floating Animation Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-theme-primary-start/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-theme-secondary-start/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
