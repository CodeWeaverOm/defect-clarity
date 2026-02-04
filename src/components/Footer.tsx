import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="bg-slate-dark text-primary-foreground py-12">
      <div className="section-container">
        <div className="flex flex-col items-center text-center">
          {/* Logo / Title */}
          <div className="mb-6">
            <h3 className="text-xl font-bold gradient-text">
              Semiconductor Defect Detection
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Deep Learning for Quality Control
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary transition-colors flex items-center justify-center group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-slate-400 group-hover:text-primary-foreground transition-colors" />
              </a>
            ))}
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-slate-400 mb-8">
            <a href="#about" className="hover:text-primary-foreground transition-colors">About</a>
            <a href="#defects" className="hover:text-primary-foreground transition-colors">Defect Classes</a>
            <a href="#architecture" className="hover:text-primary-foreground transition-colors">Architecture</a>
            <a href="#results" className="hover:text-primary-foreground transition-colors">Results</a>
            <a href="#docs" className="hover:text-primary-foreground transition-colors">Documentation</a>
          </nav>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8" />

          {/* Copyright */}
          <p className="text-sm text-slate-500 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-severity-critical" /> using PyTorch & React
          </p>
          <p className="text-xs text-slate-500 mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
