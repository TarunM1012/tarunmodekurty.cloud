
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <div className="pt-24 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Resume</span>
          </h1>
          
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-purple-500/25 animate-fade-in delay-200"
          >
            <Download size={20} />
            Download Resume
          </button>
        </div>

        {/* Resume Preview/Summary */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 animate-fade-in delay-400">
          <div className="space-y-8">
            {/* Professional Summary */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">Professional Summary</h2>
              <p className="text-gray-300 leading-relaxed">
                Passionate and driven software developer with expertise in modern web technologies. 
                Experienced in building scalable applications and working in collaborative environments.
              </p>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">Technical Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["JavaScript", "React", "TypeScript", "Node.js", "Python", "Git"].map((skill) => (
                  <div key={skill} className="bg-white/5 rounded-lg p-3 text-center text-gray-300 hover:bg-white/10 transition-colors">
                    {skill}
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">Education</h2>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white">Your Degree</h3>
                <p className="text-purple-300">Your University</p>
                <p className="text-gray-400">Year - Year</p>
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
