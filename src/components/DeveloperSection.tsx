import { MapPin, GraduationCap, Briefcase } from "lucide-react";
import developerPhoto from "@/assets/developer-photo.jpg";

const skills = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "Computer Vision",
  "Machine Learning",
  "Deep Learning",
  "OpenCV",
  "Data Science",
];

const DeveloperSection = () => {
  return (
    <section id="developer" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Meet the Developer
          </span>
          <h2 className="section-title mt-2">
            About <span className="gradient-text">the Developer</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 hover-lift">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Photo */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow">
                  <img
                    src={developerPhoto}
                    alt="Developer profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  John Doe
                </h3>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <GraduationCap className="w-4 h-4" />
                    M.S. Computer Engineering
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    AI/ML Engineer
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    San Francisco, CA
                  </span>
                </div>

                <p className="text-muted-foreground mb-6">
                  Passionate AI/ML engineer specializing in computer vision and deep learning 
                  applications for industrial automation. With a strong background in 
                  semiconductor manufacturing processes and quality control systems, I develop 
                  intelligent solutions that bridge the gap between cutting-edge research 
                  and practical industry applications.
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {skills.map((skill) => (
                    <span key={skill} className="tech-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
