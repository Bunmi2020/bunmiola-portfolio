import { Mail, Linkedin, Github, Twitter, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    icon: Linkedin,
    url: "https://linkedin.com/in/bunmioladipupo",
    label: "LinkedIn",
  },
  {
    icon: Github,
    url: "https://github.com/Bunmi2020",
    label: "GitHub",
  },
  {
    icon: Twitter,
    url: "https://x.com/b_to_lll",
    label: "X (Twitter)",
  },
];

const emails = [
  "hicon.sam@gmail.com",
  "bunmi@gofiko.com",
];

const FooterSection = () => {
  return (
    <footer id="contact" className="py-24 relative border-t border-border">
      <div className="absolute inset-0 hero-gradient opacity-50" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Ready to automate your workflows or build your next web project? 
            I'm always open to discussing new opportunities.
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Based in Nigeria • Open to Remote</span>
          </div>

          {/* Email buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            {emails.map((email, index) => (
              <Button key={index} variant={index === 0 ? "default" : "outline"} size="lg" asChild>
                <a href={`mailto:${email}`}>
                  <Mail className="w-4 h-4" />
                  {email}
                </a>
              </Button>
            ))}
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 mb-16">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl tech-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/60 transition-all"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Bunmi Oladipupo. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/60 mt-2">
              Built with React • Designed with 💚
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
