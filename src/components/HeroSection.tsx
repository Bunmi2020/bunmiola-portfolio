import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Workflow, Zap, Code, Bot } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/5 blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] opacity-20 animate-float">
          <Workflow className="w-12 h-12 text-primary" />
        </div>
        <div className="absolute top-32 right-[15%] opacity-20 animate-float" style={{ animationDelay: '1s' }}>
          <Bot className="w-10 h-10 text-secondary" />
        </div>
        <div className="absolute bottom-32 left-[20%] opacity-20 animate-float" style={{ animationDelay: '2s' }}>
          <Code className="w-14 h-14 text-primary" />
        </div>
        <div className="absolute bottom-40 right-[10%] opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>
          <Zap className="w-8 h-8 text-secondary" />
        </div>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Profile Photo */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary/50 shadow-lg shadow-primary/20">
                <img 
                  src={profilePhoto} 
                  alt="Bunmi Oladipupo" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-background animate-pulse" />
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full tech-border text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.05s' }}>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for Projects
          </div>

          {/* Main headline */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in" style={{ animationDelay: '0.15s' }}>
            Hi, I'm{" "}
            <span className="text-gradient">Bunmi Oladipupo</span>
            <br />
            I Build Websites, AI Agents & Automate Complex Workflows.
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-primary font-medium">N8N Automation Specialist</span> |{" "}
            <span className="text-secondary font-medium">Founder of goFIKO</span> |{" "}
            <span className="text-foreground font-medium">Front-End Engineer</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" asChild>
              <a href="#workflows">
                <Workflow className="w-5 h-5" />
                View My Workflows
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="heroOutline" asChild>
              <a href="#contact">
                <Mail className="w-5 h-5" />
                Contact Me
              </a>
            </Button>
          </div>

          {/* Tech stack icons */}
          <div className="pt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-sm text-muted-foreground mb-4">Powered by</p>
            <div className="flex items-center justify-center gap-6 md:gap-10 opacity-60">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-lg tech-border flex items-center justify-center">
                  <span className="font-display font-bold text-primary">n8n</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-lg tech-border flex items-center justify-center">
                  <Code className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-lg tech-border flex items-center justify-center">
                  <Bot className="w-6 h-6 text-secondary" />
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-lg tech-border flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
