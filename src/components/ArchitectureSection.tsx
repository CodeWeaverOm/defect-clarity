import { Brain, Cpu, Eye, Layers, Zap, Database } from "lucide-react";
import architectureDiagram from "@/assets/architecture-diagram.jpg";

const technologies = [
  { name: "Python 3.9+", icon: Cpu, description: "Core programming language" },
  { name: "PyTorch", icon: Brain, description: "Deep learning framework" },
  { name: "TorchVision", icon: Eye, description: "Computer vision models" },
  { name: "OpenCV", icon: Layers, description: "Image preprocessing" },
  { name: "NumPy", icon: Zap, description: "Numerical computing" },
  { name: "Matplotlib", icon: Database, description: "Visualization" },
];

const ArchitectureSection = () => {
  return (
    <section id="architecture" className="py-24 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Technical Details
          </span>
          <h2 className="section-title mt-2">
            Model Architecture & <span className="gradient-text">Technology Stack</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Built on proven deep learning architectures optimized for industrial 
            defect detection with real-time inference capabilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Architecture Diagram */}
          <div className="glass-card p-6 hover-lift">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              CNN / ResNet Architecture
            </h3>
            <img
              src={architectureDiagram}
              alt="Neural network architecture diagram"
              className="w-full h-auto rounded-lg mb-4"
            />
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span><strong>Input Layer:</strong> 224×224 RGB wafer images</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span><strong>Backbone:</strong> ResNet-50 with pretrained ImageNet weights</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span><strong>Output:</strong> 8-class softmax classification</span>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div>
            <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <Layers className="w-5 h-5 text-primary" />
              Technology Stack
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className="glass-card p-4 hover-lift flex items-start gap-4"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <tech.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{tech.name}</h4>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional features */}
            <div className="mt-8 glass-card p-6">
              <h4 className="font-semibold mb-4">Key Model Features</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Transfer learning from ImageNet for faster convergence
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Data augmentation for improved generalization
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Cross-entropy loss with class weighting for imbalanced data
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Adam optimizer with learning rate scheduling
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
