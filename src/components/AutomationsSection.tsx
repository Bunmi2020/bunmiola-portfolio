import { useState } from "react";
import { ShoppingCart, MessageSquare, Search, Brain, Database, Send, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const n8nWorkflows = [
  {
    icon: ShoppingCart,
    title: "Shopify Order Confirmation & Retention Bot",
    description: "An autonomous agent that triggers on new Shopify orders. It waits 15 minutes, then uses an AI Agent to call the customer to confirm delivery details. If unpaid, it triggers a \"Draft Order Recovery\" flow via SMS after 30-60 minutes.",
    techStack: ["Shopify Trigger", "AI Voice Agent", "SMS/Twilio"],
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Task Reminder & Tracker",
    description: "A productivity bot that schedules hourly checks on Google Sheets. It uses OpenAI to analyze pending tasks and sends intelligent reminders via WhatsApp, updating the sheet automatically upon user response.",
    techStack: ["WhatsApp API", "OpenAI", "Google Sheets", "Schedule Trigger"],
  },
  {
    icon: Search,
    title: "Product Intelligence & Market Research Bot",
    description: "A market research tool that takes a product image or name, analyzes it using Computer Vision and SerpAPI, and extracts pricing, competition, and manufacturer data into a structured Google Sheet.",
    techStack: ["SerpAPI", "Computer Vision", "Google Sheets"],
  },
  {
    icon: Brain,
    title: "Mental & Psych Health Assistant",
    description: "A Telegram-based mood journal. It logs user sentiment, stores it in Airtable, and uses an AI Agent to recommend Spotify playlists or meditation prompts based on the user's mood score (1-10).",
    techStack: ["Telegram Bot", "Airtable", "Spotify API", "AI Agent"],
  },
];

const contextualFlows = [
  {
    icon: Database,
    step: "01",
    title: "The Fetcher",
    description: "A scheduled flow that autonomously pulls raw data from multiple financial APIs (Benzinga and Marketaux) and stages it in a native database object.",
    techStack: ["Benzinga API", "Marketaux API", "Scheduled Trigger"],
  },
  {
    icon: Brain,
    step: "02",
    title: "The AI Brain",
    description: "An event-driven flow that triggers the moment the data lands, sending it to Google Gemini to extract key market findings and write a structured executive summary.",
    techStack: ["Google Gemini", "Event-Driven", "AI Summary"],
  },
  {
    icon: Send,
    step: "03",
    title: "The Dispatcher",
    description: "A final flow that catches the AI's output, wraps it in clean HTML, and fires it off to subscribers via the Resend API.",
    techStack: ["Resend API", "HTML Templates", "Email Delivery"],
  },
];

type Tab = "n8n" | "contextual";

const AutomationsSection = () => {
  const [activeTab, setActiveTab] = useState<Tab>("n8n");

  return (
    <section id="workflows" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Automation <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From intelligent AI agents to enterprise-grade pipelines — solving real business problems
              through automation.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-xl tech-border p-1 gap-1">
              <button
                onClick={() => setActiveTab("n8n")}
                className={`px-6 py-2.5 rounded-lg text-sm font-display font-bold transition-all ${
                  activeTab === "n8n"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                n8n Workflows
              </button>
              <button
                onClick={() => setActiveTab("contextual")}
                className={`px-6 py-2.5 rounded-lg text-sm font-display font-bold transition-all ${
                  activeTab === "contextual"
                    ? "bg-secondary text-secondary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Contextual.io
              </button>
            </div>
          </div>

          {/* n8n tab content */}
          {activeTab === "n8n" && (
            <div className="grid md:grid-cols-2 gap-6">
              {n8nWorkflows.map((workflow, index) => (
                <div
                  key={index}
                  className="group tech-border rounded-2xl p-6 md:p-8 card-glow relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-primary" />
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 bg-primary/10 text-primary">
                        <workflow.icon className="w-7 h-7" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground leading-tight">
                        {workflow.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{workflow.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {workflow.techStack.map((tech, i) => (
                        <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Contextual.io tab content */}
          {activeTab === "contextual" && (
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto mb-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full tech-border text-sm text-muted-foreground mb-4">
                  <Zap className="w-4 h-4 text-secondary" />
                  <span className="font-display font-bold text-secondary">Case Study</span>
                  AI-Driven Stock News Digest
                </div>
                <p className="text-muted-foreground">
                  Mastered a complex, zero-community-support platform and architected a fully automated,
                  event-driven microservice ecosystem — no manual intervention, no dropped payloads.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {contextualFlows.map((flow, index) => (
                  <div key={index} className="group tech-border rounded-2xl p-6 md:p-8 card-glow relative overflow-hidden">
                    {index < contextualFlows.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-secondary/50 to-transparent z-20" />
                    )}
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-secondary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <span className="text-xs font-mono text-secondary/60 tracking-widest">STEP {flow.step}</span>
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center my-4">
                        <flow.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-3">{flow.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-5">{flow.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {flow.techStack.map((tech, i) => (
                          <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="tech-border rounded-2xl p-8 card-glow text-center max-w-3xl mx-auto">
                <p className="text-muted-foreground leading-relaxed">
                  If you have a complex workflow that <span className="text-primary font-semibold">n8n</span> or{" "}
                  <span className="text-primary font-semibold">Zapier</span> simply can't handle, or need an{" "}
                  <span className="text-secondary font-semibold">enterprise-grade AI pipeline</span> built from the ground up — let's talk.
                </p>
              </div>
            </div>
          )}

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

export default AutomationsSection;
