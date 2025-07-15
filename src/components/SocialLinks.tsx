
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-6 animate-fade-in delay-600">
      {/* GitHub Link */}
      <a
        href="https://github.com/TarunM1012"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative p-3 rounded-full bg-theme-surface backdrop-blur-sm border border-theme-border hover:border-theme-border-hover transition-all duration-300 hover:scale-110"
      >
        <Github 
          size={24} 
          className="text-theme-text-muted group-hover:text-theme-text-primary transition-colors duration-300" 
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-theme-primary-start to-theme-primary-end opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
        <div className="absolute inset-0 rounded-full bg-theme-surface group-hover:bg-theme-surface-hover transition-all duration-300"></div>
      </a>

      {/* LinkedIn Link */}
      <a
        href="https://www.linkedin.com/in/tarun-modekurty/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative p-3 rounded-full bg-theme-surface backdrop-blur-sm border border-theme-border hover:border-theme-border-hover transition-all duration-300 hover:scale-110"
      >
        <Linkedin 
          size={24} 
          className="text-theme-text-muted group-hover:text-theme-text-primary transition-colors duration-300" 
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-theme-primary-start to-theme-primary-end opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
        <div className="absolute inset-0 rounded-full bg-theme-surface group-hover:bg-theme-surface-hover transition-all duration-300"></div>
      </a>

      {/* Email Link */}
      <a
        href="mailto:tarunm1012@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative p-3 rounded-full bg-theme-surface backdrop-blur-sm border border-theme-border hover:border-theme-border-hover transition-all duration-300 hover:scale-110"
      >
        <Mail 
          size={24} 
          className="text-theme-text-muted group-hover:text-theme-text-primary transition-colors duration-300" 
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-theme-secondary-start to-theme-secondary-end opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
        <div className="absolute inset-0 rounded-full bg-theme-surface group-hover:bg-theme-surface-hover transition-all duration-300"></div>
      </a>

      {/* Twitter Link */}
      <a
        href="https://x.com/tarunmodekurty"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative p-3 rounded-full bg-theme-surface backdrop-blur-sm border border-theme-border hover:border-theme-border-hover transition-all duration-300 hover:scale-110"
      >
        <Twitter 
          size={24} 
          className="text-theme-text-muted group-hover:text-theme-text-primary transition-colors duration-300" 
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-theme-primary-start to-theme-primary-end opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
        <div className="absolute inset-0 rounded-full bg-theme-surface group-hover:bg-theme-surface-hover transition-all duration-300"></div>
      </a>
    </div>
  );
};

export default SocialLinks;
