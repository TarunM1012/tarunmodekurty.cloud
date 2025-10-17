import Navigation from "@/components/Navigation";
import SocialLinks from "@/components/SocialLinks";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Airline Reservation System",
      description: "Python-based implementation of an airline reservation system that models flight routes as a graph and uses advanced data structures and algorithms to find the shortest path between cities and manage seat bookings efficiently.",
      technologies: ["Python", "Graphs", "Heaps", "Dijkstra's Algorithm"],
      githubUrl: "https://github.com/TarunM1012/Airline-Reservation",
    },
    {
      title: "Tic Tac Toe - An OOP Approach",
      description: "This is a JavaFX-based Tic Tac Toe game developed using Object-Oriented Programming (OOP) principles to ensure modularity, scalability, and readability. The game features both two-player mode and single-player mode where players can challenge an AI opponent powered by the Minimax algorithm, ensuring optimal moves and a challenging gameplay experience.",
      technologies: ["Java", "OOP", "Minimax Algorithm"],
      githubUrl: "https://github.com/TarunM1012/TicTacToe-OOP",
    },
    {
      title: "AI Stock Report Generator",
      description: "An AI-powered stock analysis tool that generates trading recommendations based on stock data. Programmed to experiment with OpenAI APIs. Configured to generate over the top stock reports with data from past 3 days.",
      technologies: ["Open AI API", "Javascript", "Vercel", "Polygon API"],
     liveUrl: "https://ai-stock-report-generator.vercel.app/",
      githubUrl: "https://github.com/TarunM1012/AI-stock-report-generator",
    },
    {
      title: "Tweet/X Tweet Generator",
      description: "An AI powered tweet generator that can generate tweets based on a given prompt and some given settings like tone and length. It uses the OpenAI API to generate the tweets.",
      technologies: ["Open AI API","Netlify"],
     liveUrl: "https://twitter-xbot.netlify.app",
      githubUrl: "https://github.com/TarunM1012/x-bot",
    },
    {
      title: "Handwritten Digit Classifier",
      description: "AA simple but fully functional neural network trained to recognize handwritten digits (0–9) using the MNIST dataset.Built from scratch with PyTorch, this project covers data preprocessing, model design, training, and evaluation — all implemented manually for clarity.",
      technologies: ["PyTorch","Python","Jupyter Notebook","MNIST Dataset"],
      githubUrl: "https://github.com/TarunM1012/handwritten-digit-classifier",
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
