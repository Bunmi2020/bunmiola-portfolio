import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkflowsSection from "@/components/WorkflowsSection";
import ContextualSection from "@/components/ContextualSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <WorkflowsSection />
      <ContextualSection />
      <ProjectsSection />
      <SkillsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
