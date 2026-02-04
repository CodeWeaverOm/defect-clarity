import { FileText, Presentation, Database, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const documents = [
  {
    title: "Project Report",
    description: "Comprehensive technical documentation covering methodology, implementation, and results",
    icon: FileText,
    format: "PDF",
    size: "2.4 MB",
    color: "from-red-500 to-rose-600",
  },
  {
    title: "Presentation Slides",
    description: "Visual presentation summarizing key findings and project highlights",
    icon: Presentation,
    format: "PPT",
    size: "8.1 MB",
    color: "from-orange-500 to-amber-600",
  },
  {
    title: "Dataset",
    description: "Curated wafer defect images with annotations for training and testing",
    icon: Database,
    format: "ZIP",
    size: "156 MB",
    color: "from-green-500 to-emerald-600",
  },
];

const DocumentationSection = () => {
  return (
    <section id="docs" className="py-24 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Resources
          </span>
          <h2 className="section-title mt-2">
            Documentation & <span className="gradient-text">Downloads</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Access project documentation, presentation materials, and dataset 
            for research and educational purposes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {documents.map((doc, index) => (
            <div
              key={doc.title}
              className="glass-card p-6 hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${doc.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <doc.icon className="w-7 h-7 text-white" />
              </div>
              
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold text-lg text-foreground">{doc.title}</h3>
                <span className="px-2 py-0.5 rounded text-xs font-medium bg-secondary text-muted-foreground">
                  {doc.format}
                </span>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">
                {doc.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{doc.size}</span>
                <Button size="sm" variant="ghost" className="gap-2 text-primary hover:text-primary">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="gap-2">
            <ExternalLink className="w-4 h-4" />
            View All Resources on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DocumentationSection;
