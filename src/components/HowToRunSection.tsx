import { Terminal, Copy, Check } from "lucide-react";
import { useState } from "react";

const codeSteps = [
  {
    title: "Clone the Repository",
    command: "git clone https://github.com/username/semiconductor-defect-detection.git\ncd semiconductor-defect-detection",
  },
  {
    title: "Create Virtual Environment",
    command: "python -m venv venv\nsource venv/bin/activate  # On Windows: venv\\Scripts\\activate",
  },
  {
    title: "Install Dependencies",
    command: "pip install -r requirements.txt",
  },
  {
    title: "Download Dataset",
    command: "python scripts/download_dataset.py",
  },
  {
    title: "Train the Model",
    command: "python train.py --epochs 50 --batch-size 32 --lr 0.001",
  },
  {
    title: "Run Inference",
    command: "python predict.py --image path/to/wafer_image.png --model checkpoints/best_model.pth",
  },
];

const HowToRunSection = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (command: string, index: number) => {
    await navigator.clipboard.writeText(command);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="run" className="py-24 bg-slate-dark text-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Getting Started
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            How to <span className="gradient-text">Run the Project</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Follow these step-by-step instructions to set up the environment, 
            train the model, and run inference on your wafer images.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {codeSteps.map((step, index) => (
            <div key={index} className="group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-lg">{step.title}</h3>
              </div>
              <div className="relative">
                <div className="code-block group-hover:ring-2 ring-primary/30 transition-all">
                  <div className="flex items-center gap-2 mb-3 pb-3 border-b border-slate-700">
                    <Terminal className="w-4 h-4 text-slate-500" />
                    <span className="text-xs text-slate-500">Terminal</span>
                  </div>
                  <pre className="whitespace-pre-wrap">{step.command}</pre>
                </div>
                <button
                  onClick={() => handleCopy(step.command, index)}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
                  aria-label="Copy code"
                >
                  {copiedIndex === index ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-slate-400" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 text-sm text-slate-300">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Full documentation available in the GitHub repository
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToRunSection;
