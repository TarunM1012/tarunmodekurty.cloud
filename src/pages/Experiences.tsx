
import Navigation from "@/components/Navigation";
import SocialLinks from "@/components/SocialLinks";
import { Calendar, MapPin } from "lucide-react";

const Experiences = () => {
  const experiences = [
    {
        company: "Blaze Platform",
        position: "CTO",
        duration: "November 2024 - September 2025",
        description: "Developed and maintained the Blaze Platform, a platform for creating and managing AI-powered sales tools. The platform allows users to create and manage AI-powered sales tools, and to use the tools to sell products and services.",
        achievements: [
          "Built full-stack platform connecting startup founders with co-founders and resources, supporting 50+ registered users with real-time matching and messaging.",
          "Implemented algorithmic matching with multi-factor filtering (skills, location, interests) and in-app messaging system using Supabase real-time subscriptions.",
          "Developed tiered subscription system with Stripe integration for premium features (unlimited connections, advanced filters), including payment processing and access controls.",
          "Architected PostgreSQL database schema, REST APIs, and authentication flow using React, Node.js, and Supabase, deployed on Netlify.",

        ],
      },{
      company: "Second Brain Labs",
      position: "Generative AI Engineering Intern",
      duration: "May 2025 - October 2025",
      location: "Remote",
      description: "",
      achievements: [
        "Engineered RAG-powered sales objection handling system processing 75,000+ conversations, classifying successful vs. unsuccessful interactions to extract proven conversion patterns",
        "Built semantic matching pipeline using Sentence Transformers and Pinecone, mapping customer objections to 1,800+ curated objection-response pairs across 6 Cialdini persuasion principles ",
        "Designed hybrid response generation combining retrieved responses with LLM APIs (OpenAI/Gemini/Claude) to deliver context-aware rebuttals for common objections",
        "Preprocessed 7M+ lines of conversational data, building automated classification and extraction pipelines to identify high-quality objection-response training pairs",
        "Fine-tuned domain-specific LLMs on AWS SageMaker, configuring IAM roles and S3 data pipelines for secure model training and deployment",
      ],
    },
    {
      company: "SAA & Netskope (Parkway Spark!)",
      position: "Cyber Security Intern",
      duration: "January 2023 - May 2023",
      location: "St.Louis, MO",
      description: "Focused on creating responsive user interfaces and improving user experience across multiple web applications.",
      achievements: [
        "Completed a six-week internship focused on threat vectors, risk management, and cybersecurity technologies.",
        "Developed a mock risk summary using the NIST and OWASP frameworks, enhancing analytical skills and attention to detail.",
        "Engaged in encryption and data integrity discussions, expanding technical and communication skills."
      ],
    },
    {
      company: "Newton's Apple",
      position: "Junior Security Analyst",
      duration: "Aug 2022 - Sep 2022",
      location: "Remote",
      description: "Worked and collaborated with professionals in a Red Teaming activity. Performed scanning, active and passive reconnaissance, analyzed attack surfaces, and documented the activity.",
      achievements: [
        "Conducted reconnaissance, phishing, and man-in-the-middle attacks in a Red Teaming internship for the Bahrain Public Transport Company.",
        "Coordinated with offshore teams in a structured Red, Blue, White, and Green Team environment, improving cross-functional communication and collaboration.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-bg-start via-theme-bg-via to-theme-bg-end">
      <Navigation />
      
      <div className="pt-24 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-theme-text-primary mb-6 animate-fade-in">
            My <span className="bg-gradient-to-r from-theme-primary-start to-theme-primary-end bg-clip-text text-transparent">Experiences</span>
          </h1>
          <p className="text-xl text-theme-text-secondary animate-fade-in delay-200">
            Professional experience and learning journey
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={experience.company}
              className="bg-theme-surface backdrop-blur-md rounded-xl p-8 border border-theme-border hover:border-theme-border-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-theme-text-primary mb-2">{experience.position}</h2>
                <h3 className="text-xl text-theme-primary-start mb-4">{experience.company}</h3>
                
                <div className="flex flex-wrap gap-4 text-theme-text-secondary mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-theme-text-secondary mb-6 leading-relaxed">{experience.description}</p>

              <div>
                <h4 className="text-lg font-semibold text-theme-primary-start mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start gap-3 text-theme-text-secondary">
                      <span className="w-2 h-2 bg-theme-primary-start rounded-full mt-2 flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
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

export default Experiences;

