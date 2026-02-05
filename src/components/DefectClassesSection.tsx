import defectCracks from "@/assets/defect-cracks.jpg";
import defectScratches from "@/assets/defect-scratches.jpg";
import defectBridge from "@/assets/defect-bridge.jpg";
import defectForeign from "@/assets/defect-foreign.jpg";
import defectLER from "@/assets/defect-ler.jpg";
import defectLinear from "@/assets/defect-linear.jpg";
import defectZAxis from "@/assets/defect-zaxis.jpg";
import defectComplex from "@/assets/defect-complex.jpg";
import defectFlat from "@/assets/defect-flat.jpg"

const defectClasses = [
  {
    name: "Cracks",
    description: "Structural fractures on the wafer surface that can compromise integrity",
    image: defectCracks,
    severity: "Critical",
  },
  {
    name: "Scratches",
    description: "Fine abrasion marks caused by handling or equipment contact",
    image: defectScratches,
    severity: "High",
  },
  {
    name: "Flat",
    description: "Surface irregularities or flat zones resulting from mechanical abrasion",
    image: defectFlat,
    severity: "High",
  },
  {
    name: "Bridge",
    description: "Unintended circuit connections leading to electrical shorting",
    image: defectBridge,
    severity: "Critical",
  },
  {
    name: "Foreign Material",
    description: "Particle contamination or debris deposited on the wafer",
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
    description: "Irregular or jagged edges along patterned lines",
    image: defectLinear,
    severity: "Medium",
  },
  {
    name: "Z-Axis",
    description: "Depth-related surface deviations affecting topography",
    image: defectZAxis,
    severity: "High",
  },
  {
    name: "Complex",
    description: "Complex Minor Defects",
    image: defectComplex,
    severity: "High",
  },
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "Critical":
      return "bg-severity-critical/10 text-severity-critical border-severity-critical/20";
    case "High":
      return "bg-severity-high/10 text-severity-high border-severity-high/20";
    case "Medium":
      return "bg-severity-medium/10 text-severity-medium border-severity-medium/20";
    default:
      return "bg-severity-success/10 text-severity-success border-severity-success/20";
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
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
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
