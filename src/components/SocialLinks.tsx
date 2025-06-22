
import { Github, Linkedin } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-6 animate-fade-in delay-600">
      {/* GitHub Link */}
      <a
        href="https://github.com/TarunM1012" // Replace with your actual GitHub URL
        target="_blank"
        rel="noopener noreferrer"
        className="group relative p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
      >
        <Github 
          size={24} 
          className="text-gray-300 group-hover:text-white transition-colors duration-300" 
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
        <div className="absolute inset-0 rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-300"></div>
      </a>

      {/* LinkedIn Link */}
      <a
        href="https://www.linkedin.com/in/tarun-modekurty/" // Replace with your actual LinkedIn URL
        target="_blank"
        rel="noopener noreferrer"
        className="group relative p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
      >
        <Linkedin 
          size={24} 
          className="text-gray-300 group-hover:text-white transition-colors duration-300" 
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
        <div className="absolute inset-0 rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-300"></div>
      </a>
    </div>
  );
};

export default SocialLinks;
