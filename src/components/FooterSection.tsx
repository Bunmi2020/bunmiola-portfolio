import { Mail, Linkedin, Github, Twitter, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const FiverrIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h1.527v1.316zm-6.786 1.501h-3.359c.088.546.48.886 1.006.886.4 0 .71-.15.928-.44l1.327.635c-.478.79-1.27 1.222-2.255 1.222-1.616 0-2.72-1.1-2.72-2.61s1.104-2.61 2.72-2.61c1.527 0 2.61 1.1 2.353 2.917zm-1.637-.974c-.087-.508-.457-.82-.97-.82-.503 0-.873.312-.96.82h1.93zm-5.92 2.936h-1.61v-3.558H4.43v-.647c0-.682.293-1.092.84-1.092h.79V8.468h1.61v1.316h1.134v1.316H7.67v3.558l-.004.004z" />
  </svg>
);

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
  {
    icon: FiverrIcon,
    url: "https://www.fiverr.com/users/sam_bee01",
    label: "Fiverr",
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
