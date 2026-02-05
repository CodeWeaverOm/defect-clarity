import { Github, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import developerPhoto from "@/assets/developer-photo.jpg";

const HeroSection = () => {
  // Define your links here for easy management
  const SOCIAL_LINKS = {
    github: "https://github.com/your-username/your-repo-name",
    docs: "#docs", // Or a link to a PDF/Wiki
    email: "mailto:om.nimmalwar@email.com" // Replace with your actual email
  };

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/3 to-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="section-container py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Developer Photo */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-card shadow-card-hover animate-pulse-glow">
                <img
                  src={developerPhoto}
                  alt="Om Nimmalwar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110" />
              <div className="absolute inset-0 rounded-full border border-accent/10 scale-125" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Deep Learning Research Project
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Automated Semiconductor{" "}
              <span className="gradient-text">Defect Detection</span>{" "}
              System
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
              I am Om Nimmalwar, an MCA student at PIBM. I developed this state-of-the-art 
              deep learning solution for real-time wafer defect classification, 
              achieving 85%+ accuracy using advanced CNN architectures.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {/* GitHub Link */}
              <a href="https://github.com/CodeWeaverOm/WaferVision-AI" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 bg-gradient-primary hover:opacity-90 transition-opacity">
                  <Github className="w-5 h-5" />
                  View on GitHub
                </Button>
              </a>

              {/* Documentation Link */}
              <a href="#docs">
                <Button size="lg" variant="outline" className="gap-2">
                  <FileText className="w-5 h-5" />
                  Documentation
                </Button>
              </a>

              {/* Email/Contact Link */}
              <a href="omnimmalwar32@gmail.com">
                <Button size="lg" variant="ghost" className="gap-2">
                  <Mail className="w-5 h-5" />
                  Contact
                </Button>
              </a>
            </div>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mt-8 justify-center lg:justify-start">
              {["PyTorch", "Python", "OpenCV", "ResNet", "Computer Vision"].map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;