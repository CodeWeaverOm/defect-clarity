import { CheckCircle2 } from "lucide-react";
import waferDiagram from "@/assets/wafer-diagram.jpg";

const AboutSection = () => {
  const keyPoints = [
    "Automated visual inspection replacing manual quality control",
    "Real-time defect classification with sub-second inference",
    "Multi-class detection across 8 critical defect categories",
    "Reduces manufacturing losses by early defect identification",
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About the Project
            </span>
            <h2 className="section-title mt-2">
              Revolutionizing Quality Control in{" "}
              <span className="gradient-text">Semiconductor Manufacturing</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6">
              In semiconductor fabrication, even microscopic defects can render entire 
              wafer batches unusable, leading to significant financial losses. Traditional 
              manual inspection is slow, inconsistent, and cannot scale with modern 
              production demands.
            </p>
            
            <p className="text-muted-foreground mb-8">
              This project implements a deep learning-based automated inspection system 
              that analyzes wafer images in real-time, classifying defects with high 
              accuracy while maintaining the speed necessary for production-line 
              integration.
            </p>

            <div className="space-y-4">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="glass-card p-2 hover-lift">
              <img
                src={waferDiagram}
                alt="AI-powered wafer inspection diagram"
                className="w-full h-auto rounded-lg"
              />
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 glass-card p-4 animate-float">
              <div className="text-3xl font-bold gradient-text">85%+</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
            
            <div className="absolute -top-6 -right-6 glass-card p-4 animate-float" style={{ animationDelay: "1s" }}>
              <div className="text-3xl font-bold gradient-text">9</div>
              <div className="text-sm text-muted-foreground">Defect Classes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
