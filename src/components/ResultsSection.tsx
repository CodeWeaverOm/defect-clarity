import { TrendingUp, Target, Zap, CheckCircle } from "lucide-react";
import confusionMatrix from "@/assets/confusion-matrix.jpg";
import samplePredictions from "@/assets/sample-predictions.jpg";

const metrics = [
  { label: "Overall Accuracy", value: "95.8%", icon: Target, color: "text-green-500" },
  { label: "Precision", value: "94.2%", icon: CheckCircle, color: "text-blue-500" },
  { label: "Recall", value: "93.7%", icon: TrendingUp, color: "text-purple-500" },
  { label: "Inference Time", value: "<50ms", icon: Zap, color: "text-orange-500" },
];

const ResultsSection = () => {
  return (
    <section id="results" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Performance Metrics
          </span>
          <h2 className="section-title mt-2">
            Results & <span className="gradient-text">Model Performance</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Comprehensive evaluation results demonstrating the model's 
            effectiveness in detecting semiconductor defects.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="glass-card p-6 text-center hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary mb-4 ${metric.color}`}>
                <metric.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Visual Results */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Confusion Matrix */}
          <div className="glass-card p-6 hover-lift">
            <h3 className="font-semibold text-lg mb-4">Confusion Matrix</h3>
            <img
              src={confusionMatrix}
              alt="Model confusion matrix showing classification performance"
              className="w-full h-auto rounded-lg"
            />
            <p className="text-sm text-muted-foreground mt-4">
              The confusion matrix shows strong diagonal values, indicating high 
              accuracy across all defect classes with minimal misclassification.
            </p>
          </div>

          {/* Sample Predictions */}
          <div className="glass-card p-6 hover-lift">
            <h3 className="font-semibold text-lg mb-4">Sample Predictions</h3>
            <img
              src={samplePredictions}
              alt="Sample wafer images with model predictions"
              className="w-full h-auto rounded-lg"
            />
            <p className="text-sm text-muted-foreground mt-4">
              Real-world test samples showing accurate defect identification 
              with confidence scores above 90% for most predictions.
            </p>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="mt-12 glass-card p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">12,000+</div>
              <div className="text-muted-foreground">Training Images</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">50</div>
              <div className="text-muted-foreground">Training Epochs</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">2.5h</div>
              <div className="text-muted-foreground">Training Time (GPU)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
