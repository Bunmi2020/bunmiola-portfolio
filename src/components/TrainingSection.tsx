import { BookOpen, Users, Rocket, Target, Lightbulb, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const trainingModules = [
  {
    icon: BookOpen,
    title: "AI Fluency Fundamentals",
    description: "Demystify AI for non-technical teams. Learn how large language models, agents, and automation actually work — without the jargon.",
  },
  {
    icon: Rocket,
    title: "Agentic Workflow Building",
    description: "Hands-on sessions where teams design and deploy real automations using n8n, Contextual.io, and custom AI agents that handle repetitive work.",
  },
  {
    icon: Target,
    title: "Department-Specific Coaching",
    description: "Training tailored to Sales, Marketing, Operations, or Education. We map real workflows and build automations that fit how your team already works.",
  },
  {
    icon: Lightbulb,
    title: "Build-With-Me Sprints",
    description: "Intensive co-building sessions where your team learns by doing — leaving with working automations, documentation, and the confidence to iterate.",
  },
];

const outcomes = [
  "Cut hours of manual work per week",
  "Scale output without adding headcount",
  "Empower teams to own their tools",
  "Make faster, data-informed decisions",
];

const audiences = [
  "Sales Teams",
  "Marketing Teams",
  "Operations Teams",
  "Education & Teaching Staff",
  "Customer Support",
  "Founders & Leadership",
];

const TrainingSection = () => {
  return (
    <section id="training" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              AI Training & <span className="text-gradient">Team Enablement</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I help teams and departments become AI-fluent and adopt agentic workflows — so they work smarter, move faster, and focus on what matters.
            </p>
          </div>

          {/* Intro highlight */}
          <div className="tech-border rounded-2xl p-8 md:p-10 card-glow mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-primary">From goFIKO to Enterprise Teams</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                  Teaching Teams to Build with AI
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Through goFIKO (Slide Study Center), I have trained and led a team of 12 teaching consultants. Now I bring that same practical, hands-on approach to companies and departments ready to make AI part of their daily workflow.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {outcomes.map((outcome, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-border"
                  >
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Training modules grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {trainingModules.map((module, index) => (
              <div
                key={index}
                className="group tech-border rounded-2xl p-6 md:p-8 card-glow relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-secondary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <module.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {module.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {module.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Audience tags */}
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
              Built for teams like
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {audiences.map((audience, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-muted text-muted-foreground border border-border"
                >
                  {audience}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">
                Train Your Team on AI Workflows
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
