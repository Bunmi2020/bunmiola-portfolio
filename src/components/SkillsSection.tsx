import { Workflow, Code, TrendingUp, Users } from "lucide-react";

const skillCategories = [
  {
    icon: Workflow,
    title: "Automation",
    color: "primary",
    skills: ["n8n (Advanced)", "AI Agents", "Webhooks", "API Integrations", "Custom Nodes"],
  },
  {
    icon: Code,
    title: "Development",
    color: "secondary",
    skills: ["React.js", "Node.js", "Firebase", "JavaScript", "Python", "TypeScript"],
  },
  {
    icon: TrendingUp,
    title: "Sales & Marketing",
    color: "primary",
    skills: ["CRM (HubSpot)", "Lead Generation", "SEO", "Digital Marketing", "E-Commerce"],
  },
  {
    icon: Users,
    title: "Soft Skills",
    color: "secondary",
    skills: ["Team Leadership", "Time Management", "Problem Solving", "Communication", "Project Management"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit spanning automation, development, and business growth.
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="tech-border rounded-2xl p-6 card-glow"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  category.color === 'primary' 
                    ? 'bg-primary/10 text-primary' 
                    : 'bg-secondary/10 text-secondary'
                }`}>
                  <category.icon className="w-6 h-6" />
                </div>
                
                <h3 className="font-display font-bold text-lg mb-4">{category.title}</h3>
                
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        category.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                      }`} />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
