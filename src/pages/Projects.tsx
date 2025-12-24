import Navigation from "@/components/Navigation";
import SocialLinks from "@/components/SocialLinks";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "CodeGuard - Multi-Model Code Review System",
      description: "Ensemble AI system using DeepSeek Coder, CodeLlama, and Qwen for pull request analysis through consensus detection. Achieved 100% bug detection on security test cases by implementing semantic similarity matching (vs 14% with keyword matching). Runs locally via Ollama with GitHub webhook integration.",
      technologies: ["Python", "FastAPI", "Sentence Transformers", "Ollama", "GitHub API"],
      githubUrl: "https://github.com/TarunM1012/codeguard",
    },
    {
      title: "AI Stock Report Generator",
      description: "Production web application that generates AI-powered stock analysis and trading recommendations using real-time market data. Integrates Polygon API for financial data and OpenAI for natural language generation. Deployed on Vercel.",
      technologies: ["OpenAI API", "JavaScript", "Vercel", "Polygon API"],
      liveUrl: "https://ai-stock-report-generator.vercel.app/",
      githubUrl: "https://github.com/TarunM1012/AI-stock-report-generator",
    },
    {
      title: "Handwritten Digit Classifier",
      description: "Neural network trained to recognize handwritten digits using the MNIST dataset. Built from scratch with PyTorch, covering data preprocessing, model design, training, and evaluation.",
      technologies: ["PyTorch", "Python", "Jupyter Notebook", "MNIST Dataset"],
      githubUrl: "https://github.com/TarunM1012/handwritten-digit-classifier",
    },
    {
      title: "Tweet/X Tweet Generator",
      description: "AI-powered tweet generator that creates tweets based on prompts with customizable tone and length settings using OpenAI API.",
      technologies: ["OpenAI API", "Netlify"],
      liveUrl: "https://twitter-xbot.netlify.app",
      githubUrl: "https://github.com/TarunM1012/x-bot",
    },
    {
      title: "Airline Reservation System",
      description: "Python-based airline reservation system modeling flight routes as graphs, using Dijkstra's algorithm to find shortest paths between cities and manage seat bookings.",
      technologies: ["Python", "Graphs", "Heaps", "Dijkstra's Algorithm"],
      githubUrl: "https://github.com/TarunM1012/Airline-Reservation",
    },
    {
      title: "Tic Tac Toe - OOP Implementation",
      description: "JavaFX-based Tic Tac Toe game with two-player and single-player modes. AI opponent uses Minimax algorithm for optimal move selection.",
      technologies: ["Java", "OOP", "Minimax Algorithm"],
      githubUrl: "https://github.com/TarunM1012/TicTacToe-OOP",
    },

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-bg-start via-theme-bg-via to-theme-bg-end">
      <Navigation />
      
      <div className="pt-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-theme-text-primary mb-6 animate-fade-in">
            My <span className="bg-gradient-to-r from-theme-primary-start to-theme-primary-end bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-theme-text-secondary animate-fade-in delay-200">
            Here are some of the projects I've worked on
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-theme-surface backdrop-blur-md rounded-xl p-6 border border-theme-border hover:border-theme-border-hover transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              <h3 className="text-xl font-bold text-theme-text-primary mb-3">{project.title}</h3>
              <p className="text-theme-text-secondary mb-4 leading-relaxed">{project.description}</p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-theme-surface-hover text-theme-primary-start rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-theme-text-secondary hover:text-theme-text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-theme-text-secondary hover:text-theme-text-primary transition-colors"
                >
                  <Github size={16} />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-16 text-center">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Projects;
