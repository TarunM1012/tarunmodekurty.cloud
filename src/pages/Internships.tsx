
import Navigation from "@/components/Navigation";
import SocialLinks from "@/components/SocialLinks";
import { Calendar, MapPin } from "lucide-react";

const Internships = () => {
  const internships = [
    {
      company: "Second Brain Labs",
      position: "Generative AI Engineering Intern",
      duration: "May 2025 - Current",
      location: "Remote",
      description: "",
      achievements: [
        "Built a persuasion-driven RAG pipeline using vector databases and Sentence Transformers to improve conversational quality, reducing hallucinations by 30%.",
        "Fine-tuned domain-specific LLMs on AWS SageMaker with supervised fine-tuning, configuring IAM roles and S3 pipelines for secure training and deployment.",
        "Cleaned and preprocessed large conversational datasets to ensure quality, consistency, and trainability, resulting in more robust fine-tuned models.",
        "Integrated Cialdini’s influence principles into AI responses, enhancing persuasion and sales-oriented conversations that converted 25% of objections into sales.",
        "Fine-tuned domain-specific LLMs on AWS SageMaker with supervised fine-tuning, configuring IAM roles and S3 pipelines for secure training and deployment.",
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
            My <span className="bg-gradient-to-r from-theme-primary-start to-theme-primary-end bg-clip-text text-transparent">Internships</span>
          </h1>
          <p className="text-xl text-theme-text-secondary animate-fade-in delay-200">
            Professional experience and learning journey
          </p>
        </div>

        <div className="space-y-8">
          {internships.map((internship, index) => (
            <div
              key={internship.company}
              className="bg-theme-surface backdrop-blur-md rounded-xl p-8 border border-theme-border hover:border-theme-border-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-theme-text-primary mb-2">{internship.position}</h2>
                <h3 className="text-xl text-theme-primary-start mb-4">{internship.company}</h3>
                
                <div className="flex flex-wrap gap-4 text-theme-text-secondary mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{internship.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{internship.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-theme-text-secondary mb-6 leading-relaxed">{internship.description}</p>

              <div>
                <h4 className="text-lg font-semibold text-theme-primary-start mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {internship.achievements.map((achievement, achievementIndex) => (
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

export default Internships;
