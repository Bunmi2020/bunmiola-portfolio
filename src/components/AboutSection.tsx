import { Award, Users, Code, Briefcase } from "lucide-react";

const stats = [
  {
    icon: Users,
    label: "Founder",
    value: "Slide Study Center (goFIKO)",
    color: "text-secondary",
  },
  {
    icon: Code,
    label: "Certified",
    value: "Front-End Engineer",
    color: "text-primary",
  },
  {
    icon: Briefcase,
    label: "Experience",
    value: "Sales & Lead Gen",
    color: "text-secondary",
  },
  {
    icon: Award,
    label: "Background",
    value: "Mining Engineering",
    color: "text-primary",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a <span className="text-foreground font-medium">versatile tech professional</span> with a unique background in Mining Engineering and Front-End Development. Currently, I specialize in{" "}
                <span className="text-primary font-semibold">N8N Automation</span>, designing multi-step workflows, writing custom JavaScript/Python nodes, and teaching others how to build AI agents.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am also the{" "}
                <span className="text-secondary font-semibold">Founder of goFIKO</span> (Slide Study Center), leading a team of 12 teaching consultants. My journey from mining engineering to tech demonstrates my adaptability and passion for solving complex problems through automation and code.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                From spearheading lead generation strategies at MOODME/ELEVATE AI to building full-stack web applications, I bring a unique blend of technical expertise and business acumen to every project.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="tech-border rounded-xl p-6 card-glow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mb-4`} />
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="font-display font-semibold text-foreground">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
