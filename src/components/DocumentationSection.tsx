import React, { useState } from "react";
import {
  FileText,
  Presentation,
  Database,
  Download,
  Eye,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type DocumentItem = {
  title: string;
  description: string;
  icon: React.ElementType;
  format: string;
  size: string;
  color: string;
  url: string;
  fileName: string;
};

const documents: DocumentItem[] = [
  {
    title: "Project Report (PDF)",
    description: "Complete technical documentation",
    icon: FileText,
    format: "PDF",
    size: "2.4 MB",
    color: "from-red-500 to-rose-600",
    url: "/docs/Project_Report.pdf",
    fileName: "Project_Report.pdf",
  },
  {
    title: "Project Report (Word)",
    description: "Editable Word document",
    icon: FileText,
    format: "DOCX",
    size: "1.9 MB",
    color: "from-blue-500 to-indigo-600",
    url: "/docs/Project_Report.docx",
    fileName: "Project_Report.docx",
  },
  {
    title: "Presentation Slides",
    description: "Project overview slides",
    icon: Presentation,
    format: "PPTX",
    size: "8.1 MB",
    color: "from-orange-500 to-amber-600",
    url: "/docs/Presentation.pptx",
    fileName: "Presentation.pptx",
  },
];

const DocumentationSection = () => {
  const [open, setOpen] = useState(false);
  const [activeDoc, setActiveDoc] = useState<DocumentItem | null>(null);

  /* ---------- SAVE AS (Ask location every time) ---------- */
  const saveAsFile = async (doc: DocumentItem) => {
    // Chrome / Edge support
    if ("showSaveFilePicker" in window) {
      try {
        const handle = await (window as any).showSaveFilePicker({
          suggestedName: doc.fileName,
          types: [
            {
              description: doc.format,
              accept: {
                "*/*": ["." + doc.fileName.split(".").pop()],
              },
            },
          ],
        });

        const response = await fetch(doc.url);
        const blob = await response.blob();

        const writable = await handle.createWritable();
        await writable.write(blob);
        await writable.close();
      } catch (err) {
        // User cancelled dialog
        console.log("Save cancelled");
      }
    } else {
      // Fallback for Firefox / Safari
      const link = document.createElement("a");
      link.href = doc.url;
      link.download = doc.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  /* ---------------- Preview ---------------- */
  const getPreviewUrl = (doc: DocumentItem) => {
    if (doc.format === "PDF") return doc.url;

    if (doc.format === "DOCX" || doc.format === "PPTX") {
      return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
        window.location.origin + doc.url
      )}`;
    }

    return null;
  };

  return (
    <section id="docs" className="py-24 bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Documentation & <span className="gradient-text">Downloads</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {documents.map((doc) => (
            <div key={doc.title} className="glass-card p-6 hover-lift">
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${doc.color} flex items-center justify-center mb-4`}
              >
                <doc.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="font-semibold">{doc.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {doc.description}
              </p>

              <div className="flex justify-between">
                {/* Preview */}
                {doc.format !== "ZIP" && (
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => {
                      setActiveDoc(doc);
                      setOpen(true);
                    }}
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                )}

                {/* Download (Ask location) */}
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => saveAsFile(doc)}
                >
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Preview Modal */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-5xl h-[80vh]">
            <DialogHeader>
              <DialogTitle>{activeDoc?.title}</DialogTitle>
            </DialogHeader>

            {activeDoc && getPreviewUrl(activeDoc) ? (
              <iframe
                src={getPreviewUrl(activeDoc)!}
                className="w-full h-full border rounded-md"
              />
            ) : (
              <p className="text-center text-muted-foreground">
                Preview not available
              </p>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default DocumentationSection;
