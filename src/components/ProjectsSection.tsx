import { ExternalLink, Rocket, Film, Car, Music, Utensils, ArrowRight} from "lucide-react";
import { Button } from "@/components/ui/button";

const startupSpotlight = {
  name: "goFIKO (Slide Study Center)",
  url: "https://slidestudycenter.com",
  description: "Building a React-based web app for education management. Leading a team of 12 teaching consultants.",
  role: "Founder & Lead Developer",
};

const projects = [
  {
    icon: Film,
    name: "Valor Motion Pictures",
    url: "https://valormotionpictures.com",
    type: "Business Website",
  },
  {
    icon: Car,
    name: "Motoring Nigeria",
    url: "https://motoringnigeria.com",
    type: "Automotive Platform",
  },
  {
    icon: Music,
    name: "Spotify Playlist App",
    url: "https://sportify-playlist.surge.sh",
    type: "Web Application",
  },
  {
    icon: Utensils,
    name: "Ravenous",
    url: "https://github.com/Bunmi2020/ravenous",
    type: "Yelp Clone",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Web Development & <span className="text-gradient">Startups</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From founding my own edtech startup to building websites for various companies,
              I bring ideas to life through code.
            </p>
          </div>

          {/* Startup spotlight */}
          <div className="mb-12">
            <div className="tech-border rounded-2xl p-8 md:p-10 card-glow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-secondary/10 blur-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-secondary" />
                  </div>
                  <span className="text-sm font-medium text-secondary">Startup Spotlight</span>
                </div>
                
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                  {startupSpotlight.name}
                </h3>
                <p className="text-primary font-medium mb-4">{startupSpotlight.role}</p>
                <p className="text-muted-foreground text-lg mb-6 max-w-2xl">
                  {startupSpotlight.description}
                </p>
                
                <Button variant="secondary" asChild>
                  <a href={startupSpotlight.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Visit Website
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Other projects grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group tech-border rounded-xl p-6 card-glow block"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display font-semibold mb-1 group-hover:text-primary transition-colors">
                  {project.name}
                </h4>
                <p className="text-sm text-muted-foreground">{project.type}</p>
                <ExternalLink className="w-4 h-4 text-muted-foreground mt-4 group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">
                Discuss Your Website Needs
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
