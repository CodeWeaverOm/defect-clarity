import defectCracks from "@/assets/defect-cracks.jpg";
import defectScratches from "@/assets/defect-scratches.jpg";
import defectBridge from "@/assets/defect-bridge.jpg";
import defectForeign from "@/assets/defect-foreign.jpg";
import defectLER from "@/assets/defect-ler.jpg";
import defectLinear from "@/assets/defect-linear.jpg";
import defectZAxis from "@/assets/defect-zaxis.jpg";
import defectClean from "@/assets/defect-clean.jpg";

const defectClasses = [
  {
    name: "Cracks",
    description: "Structural fractures in wafer surface",
    image: defectCracks,
    severity: "Critical",
  },
  {
    name: "Scratches",
    description: "Surface abrasion marks from handling",
    image: defectScratches,
    severity: "High",
  },
  {
    name: "Bridge",
    description: "Unintended connections between circuits",
    image: defectBridge,
    severity: "Critical",
  },
  {
    name: "Foreign Material",
    description: "Particle contamination on surface",
    image: defectForeign,
    severity: "High",
  },
  {
    name: "Line Edge Roughness",
    description: "Irregular pattern edge definition",
    image: defectLER,
    severity: "Medium",
  },
  {
    name: "Linear",
    description: "Linear pattern anomalies",
    image: defectLinear,
    severity: "Medium",
  },
  {
    name: "Z-Axis",
    description: "Depth-related surface variations",
    image: defectZAxis,
    severity: "High",
  },
  {
    name: "Clean",
    description: "No defects detected - reference class",
    image: defectClean,
    severity: "None",
  },
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "Critical":
      return "bg-red-500/10 text-red-600 border-red-500/20";
    case "High":
      return "bg-orange-500/10 text-orange-600 border-orange-500/20";
    case "Medium":
      return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
    default:
      return "bg-green-500/10 text-green-600 border-green-500/20";
  }
};

const DefectClassesSection = () => {
  return (
    <section id="defects" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Dataset Overview
          </span>
          <h2 className="section-title mt-2">
            Defect Classes & <span className="gradient-text">Sample Images</span>
          </h2>
          <p className="section-subtitle mx-auto">
            The model is trained to identify and classify 8 distinct defect categories 
            commonly found in semiconductor wafer manufacturing.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {defectClasses.map((defect, index) => (
            <div
              key={defect.name}
              className="glass-card overflow-hidden hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={defect.image}
                  alt={`${defect.name} defect sample`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span
                  className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium border ${getSeverityColor(
                    defect.severity
                  )}`}
                >
                  {defect.severity}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1">{defect.name}</h3>
                <p className="text-sm text-muted-foreground">{defect.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DefectClassesSection;
