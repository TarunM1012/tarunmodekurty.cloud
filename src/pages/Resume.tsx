
import { Download } from "lucide-react";
import Navigation from "@/components/Navigation";
import SocialLinks from "@/components/SocialLinks";

const Resume = () => {
  const handleDownload = () => {
    // Replace this URL with the actual path to your resume file
    const resumeUrl = "/path-to-your-resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Your_Name_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-bg-start via-theme-bg-via to-theme-bg-end">
      <Navigation />
      
      <div className="pt-24 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-theme-text-primary mb-6 animate-fade-in">
            My <span className="bg-gradient-to-r from-theme-primary-start to-theme-primary-end bg-clip-text text-transparent">Resume</span>
          </h1>
          
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-theme-primary-start to-theme-primary-end text-theme-text-primary font-semibold rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-theme-primary-start/25 animate-fade-in delay-200"
          >
            <Download size={20} />
            Download Resume
          </button>
        </div>

        {/* Resume Preview/Summary */}
        <div className="bg-theme-surface backdrop-blur-md rounded-xl p-8 border border-theme-border animate-fade-in delay-400">
          <div className="space-y-8">
            {/* Professional Summary */}
            <section>
              <h2 className="text-2xl font-bold text-theme-primary-start mb-4">Professional Summary</h2>
              <p className="text-theme-text-secondary leading-relaxed">
                Passionate and driven software developer with expertise in modern web technologies. 
                Experienced in building scalable applications and working in collaborative environments.
              </p>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-2xl font-bold text-theme-primary-start mb-4">Technical Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["JavaScript", "React", "TypeScript", "Node.js", "Python", "Git"].map((skill) => (
                  <div key={skill} className="bg-theme-surface rounded-lg p-3 text-center text-theme-text-secondary hover:bg-theme-surface-hover transition-colors">
                    {skill}
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-2xl font-bold text-theme-primary-start mb-4">Education</h2>
              <div className="bg-theme-surface rounded-lg p-4">
                <h3 className="text-lg font-semibold text-theme-text-primary">Your Degree</h3>
                <p className="text-theme-primary-start">Your University</p>
                <p className="text-theme-text-muted">Year - Year</p>
              </div>
            </section>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 text-center">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Resume;
