
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
                3rd-year Software Engineering student building AI-powered production systems. Processed 7M+ lines of data and built RAG pipelines at Second Brain Labs, shipped full-stack product to 50+ users. Seeking 4-12 month co-op starting May 2026.
              </p>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-2xl font-bold text-theme-primary-start mb-6">Technical Skills</h2>
              <div className="space-y-6">
                {/* Languages */}
                <div>
                  <h3 className="text-lg font-semibold text-theme-text-primary mb-3">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "JavaScript", "Bash", "SQL"].map((skill) => (
                      <span key={skill} className="px-3 py-1.5 bg-theme-surface rounded-lg text-theme-text-secondary text-sm hover:bg-theme-surface-hover transition-colors border border-theme-border">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* AI/ML */}
                <div>
                  <h3 className="text-lg font-semibold text-theme-text-primary mb-3">AI/ML</h3>
                  <div className="flex flex-wrap gap-2">
                    {["PyTorch", "LangGraph", "RAG Pipelines", "Prompt Engineering", "Fine-tuning", "OpenAI API", "Gemini API", "Sentence Transformers", "Pinecone", "NumPy", "Pandas", "scikit-learn", "Ollama"].map((skill) => (
                      <span key={skill} className="px-3 py-1.5 bg-theme-surface rounded-lg text-theme-text-secondary text-sm hover:bg-theme-surface-hover transition-colors border border-theme-border">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Web/Backend */}
                <div>
                  <h3 className="text-lg font-semibold text-theme-text-primary mb-3">Web/Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "React", "Supabase", "PostgreSQL", "REST APIs", "API Development", "Github API", "FAST APIs"].map((skill) => (
                      <span key={skill} className="px-3 py-1.5 bg-theme-surface rounded-lg text-theme-text-secondary text-sm hover:bg-theme-surface-hover transition-colors border border-theme-border">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Cloud/DevOps */}
                <div>
                  <h3 className="text-lg font-semibold text-theme-text-primary mb-3">Cloud/DevOps</h3>
                  <div className="flex flex-wrap gap-2">
                    {["AWS (SageMaker, S3, IAM)", "Vercel", "Netlify", "Git", "GitHub", "Linux"].map((skill) => (
                      <span key={skill} className="px-3 py-1.5 bg-theme-surface rounded-lg text-theme-text-secondary text-sm hover:bg-theme-surface-hover transition-colors border border-theme-border">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <h3 className="text-lg font-semibold text-theme-text-primary mb-3">Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Jupyter Notebook", "Cursor"].map((skill) => (
                      <span key={skill} className="px-3 py-1.5 bg-theme-surface rounded-lg text-theme-text-secondary text-sm hover:bg-theme-surface-hover transition-colors border border-theme-border">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-2xl font-bold text-theme-primary-start mb-4">Education</h2>
              <div className="bg-theme-surface rounded-lg p-4">
                <h3 className="text-lg font-semibold text-theme-text-primary">B.Eng Software Engineering, IoT Specialization</h3>
                <p className="text-theme-primary-start">Ontario Tech University</p>
                <p className="text-theme-text-muted">2023 - Current</p>
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
