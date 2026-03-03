import { Database, Brain, Send, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const flows = [
  {
    icon: Database,
    step: "01",
    title: "The Fetcher",
    description:
      "A scheduled flow that autonomously pulls raw data from multiple financial APIs (Benzinga and Marketaux) and stages it in a native database object.",
    techs: ["Benzinga API", "Marketaux API", "Scheduled Trigger", "Database"],
  },
  {
    icon: Brain,
    step: "02",
    title: "The AI Brain",
    description:
      "An event-driven flow that triggers the moment the data lands, sending it to Google Gemini to extract key market findings and write a structured executive summary.",
    techs: ["Google Gemini", "Event-Driven", "AI Summary"],
  },
  {
    icon: Send,
    step: "03",
    title: "The Dispatcher",
    description:
      "A final flow that catches the AI's output, wraps it in clean HTML, and fires it off to subscribers via the Resend API.",
    techs: ["Resend API", "HTML Templates", "Email Delivery"],
  },
];

const ContextualSection = () => {
  return (
    <section id="contextual" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full tech-border text-sm text-muted-foreground mb-6">
              <Zap className="w-4 h-4 text-secondary" />
              <span className="font-display font-bold text-secondary">Contextual.io</span>
              Case Study
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Enterprise-Grade <span className="text-gradient">AI Pipeline</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Mastered a complex, zero-community-support platform and architected a fully automated,
              AI-driven daily stock news digest — a resilient microservice ecosystem with no manual intervention.
            </p>
          </div>

          {/* Flow architecture */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {flows.map((flow, index) => (
              <div
                key={index}
                className="group tech-border rounded-2xl p-6 md:p-8 card-glow relative overflow-hidden"
              >
                {/* Step connector line */}
                {index < flows.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-20" />
                )}

                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-secondary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <span className="text-xs font-mono text-primary/60 tracking-widest">
                    STEP {flow.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center my-4">
                    <flow.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {flow.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {flow.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {flow.techs.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Closing statement */}
          <div className="tech-border rounded-2xl p-8 md:p-10 card-glow text-center max-w-3xl mx-auto">
            <p className="text-muted-foreground leading-relaxed text-lg">
              If you have a complex workflow that <span className="text-primary font-semibold">n8n</span> or{" "}
              <span className="text-primary font-semibold">Zapier</span> simply can't handle, or if you need
              an <span className="text-secondary font-semibold">enterprise-grade AI pipeline</span> built from
              the ground up — let's talk.
            </p>
            <div className="mt-6">
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">
                  Discuss Your Complex Workflow
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContextualSection;
