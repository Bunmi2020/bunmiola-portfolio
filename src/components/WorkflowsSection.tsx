import { ShoppingCart, MessageSquare, Search, Brain, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const workflows = [
  {
    icon: ShoppingCart,
    title: "Shopify Order Confirmation & Retention Bot",
    description: "An autonomous agent that triggers on new Shopify orders. It waits 15 minutes, then uses an AI Agent to call the customer to confirm delivery details. If unpaid, it triggers a \"Draft Order Recovery\" flow via SMS after 30-60 minutes.",
    techStack: ["n8n", "Shopify Trigger", "AI Voice Agent", "SMS/Twilio"],
    color: "primary",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Task Reminder & Tracker",
    description: "A productivity bot that schedules hourly checks on Google Sheets. It uses OpenAI to analyze pending tasks and sends intelligent reminders via WhatsApp, updating the sheet automatically upon user response.",
    techStack: ["n8n", "WhatsApp API", "OpenAI", "Google Sheets", "Schedule Trigger"],
    color: "secondary",
  },
  {
    icon: Search,
    title: "Product Intelligence & Market Research Bot",
    description: "A market research tool that takes a product image or name, analyzes it using Computer Vision and SerpAPI, and extracts pricing, competition, and manufacturer data (Alibaba, AliExpress) into a structured Google Sheet.",
    techStack: ["n8n", "SerpAPI", "Computer Vision", "Google Sheets"],
    color: "primary",
  },
  {
    icon: Brain,
    title: "Mental & Psych Health Assistant",
    description: "A Telegram-based mood journal. It logs user sentiment (\"I feel bad\"), stores it in Airtable, and uses an AI Agent to recommend Spotify playlists or meditation prompts based on the user's mood score (1-10).",
    techStack: ["n8n", "Telegram Bot", "Airtable", "Spotify API", "AI Agent"],
    color: "secondary",
  },
];

const WorkflowsSection = () => {
  return (
    <section id="workflows" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full tech-border text-sm text-muted-foreground mb-6">
              <span className="font-display font-bold text-primary">n8n</span>
              Featured Projects
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              The <span className="text-gradient">N8N Journey</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore my automated workflows that solve real business problems using AI agents, 
              custom integrations, and intelligent automation.
            </p>
          </div>

          {/* Workflows grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {workflows.map((workflow, index) => (
              <div
                key={index}
                className="group tech-border rounded-2xl p-6 md:p-8 card-glow relative overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className={`absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${
                  workflow.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                }`} />
                
                <div className="relative z-10">
                  {/* Icon and title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
                      workflow.color === 'primary' 
                        ? 'bg-primary/10 text-primary' 
                        : 'bg-secondary/10 text-secondary'
                    }`}>
                      <workflow.icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground leading-tight">
                      {workflow.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {workflow.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {workflow.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
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

          {/* CTA */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">
                Discuss Your Automation Needs
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowsSection;
