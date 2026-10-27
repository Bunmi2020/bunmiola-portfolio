import { useEffect, useRef, useState } from "react";
import { ArrowRight, Code, Globe, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";
import WorkflowBackground from "@/components/web_dev/WebDevBackground";
import IntroSequence, {
  hasSeenIntro,
  prefersReducedMotion,
} from "@/components/web_dev/IntroSequence";

const TITLES = [
  "Full-Stack Web Development",
  "Modern Frontend Architecture",
  "Scalable Web Applications",
];

type Stage = "hidden" | "entering" | "settled";

/** Typewriter that rotates between full-stack, frontend, and web app engineering. */
const RotatingTitle = () => {
  const reduced = useRef(prefersReducedMotion()).current;
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(TITLES[0]);
  const [deleting, setDeleting] = useState(false);
  const [holding, setHolding] = useState(true);

  useEffect(() => {
    if (reduced) return;

    const full = TITLES[index];
    const delay = holding ? 2100 : deleting ? 30 : 70;
    const timer = window.setTimeout(() => {
      if (holding) {
        setHolding(false);
        setDeleting(true);
        return;
      }

      if (!deleting) {
        const next = full.slice(0, text.length + 1);
        setText(next);
        if (next.length === full.length) setHolding(true);
      } else if (text.length <= 1) {
        setText("");
        setDeleting(false);
        setIndex((i) => (i + 1) % TITLES.length);
      } else {
        setText(full.slice(0, text.length - 1));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [text, deleting, holding, index, reduced]);

  if (reduced) {
    return (
      <p className="font-display text-2xl md:text-4xl font-bold text-gradient min-h-[1.3em]">
        Full-Stack Web Development <span className="text-muted-foreground">·</span>{" "}
        Modern Frontend Architecture <span className="text-muted-foreground">·</span>{" "}
        Scalable Web Applications
      </p>
    );
  }

  return (
    <p className="font-display text-2xl md:text-4xl font-bold min-h-[1.3em]">
      <span className="sr-only">
        Full-Stack Web Development, Modern Frontend Architecture, and Scalable Web Applications
      </span>
      <span aria-hidden="true" className="text-gradient">
        {text}
        <span className="inline-block w-[3px] h-[0.9em] bg-secondary align-middle ml-1 animate-caret motion-reduce:animate-none" />
      </span>
    </p>
  );
};

const HeroSection = () => {
  const [showIntro, setShowIntro] = useState(
    () => !prefersReducedMotion()
  );
  const [stage, setStage] = useState<Stage>(() =>
    showIntro ? "hidden" : "settled"
  );

  const finishIntro = () => {
    setShowIntro(false);
    setStage("entering");
    // Double rAF: paint the start position first, then animate to the final one.
    requestAnimationFrame(() => requestAnimationFrame(() => setStage("settled")));
  };

  const contentVisible = stage !== "hidden";

  const portraitTransform =
    stage === "settled"
      ? "opacity-100 translate-x-0 translate-y-0 scale-100"
      : stage === "entering"
        ? "opacity-100 translate-x-[-18%] translate-y-[6%] scale-[1.3]"
        : "opacity-0 translate-x-[-18%] translate-y-[6%] scale-[1.3]";

  const transitionClasses =
    "transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:duration-0";

  return (
    <section
      id="web-dev-hero"
      aria-labelledby="web-dev-heading"
      className="relative min-h-screen flex items-center overflow-hidden py-24"
    >
      <WorkflowBackground />
      <div className="absolute inset-0 hero-gradient pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse-glow motion-reduce:animate-none pointer-events-none" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/5 blur-3xl animate-pulse-glow motion-reduce:animate-none pointer-events-none"
        style={{ animationDelay: "2.5s" }}
      />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-8 items-center">
          {/* Page introduction */}
          <div
            className={`space-y-6 text-center lg:text-left transition-opacity duration-1000 motion-reduce:transition-none ${
              contentVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full tech-border font-mono text-xs md:text-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse motion-reduce:animate-none" />
              React • Next.js • Full-Stack Architecture
            </div>

            <h1
              id="web-dev-heading"
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Transform ideas into{" "}
              <span className="text-gradient">exceptional web apps</span><span className="text-muted-foreground">.</span>
            </h1>

            <p className="text-base md:text-lg">
              
            </p>

            <RotatingTitle />

            <p className="text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I build high-performance, accessible, and scalable web applications 
              with clean code and intuitive user interfaces, helping businesses 
              bring their digital products to life.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button variant="heroOutline" asChild>
                <a href="#projects">
                  <Code className="w-5 h-5" />
                  Explore My Work
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="hero" asChild>
                <a
                  href={`mailto:hello@bunmioladipupo.online?subject=${encodeURIComponent(
                    "Project Inquiry: Web Development"
                  )}&body=${encodeURIComponent(
                    "Hi Bunmi,\n\nI'd love to discuss a web development project with you.\n\nHere are a few initial details about what I'm looking to build:\n- \n\nLooking forward to hearing from you!"
                  )}`}
                >
                  <Globe className="w-5 h-5" />
                  Discuss a Project
                </a>
              </Button>
            </div>
          </div>

          {/* Portrait column */}
          <div
            className={`transition-opacity duration-1000 motion-reduce:transition-none ${
              contentVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
                <div
                  className={`absolute -inset-4 rounded-full bg-primary/10 blur-2xl ${transitionClasses} ${portraitTransform}`}
                />
                <div
                  className={`relative w-full h-full rounded-full overflow-hidden border-2 border-primary/50 shadow-lg shadow-primary/20 ${transitionClasses} ${portraitTransform}`}
                >
                  <img
                    src={profilePhoto}
                    alt="Bunmi Oladipupo"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div
                  className={`absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-primary flex items-center justify-center ${transitionClasses}`}
                >
                  <span className="w-3.5 h-3.5 rounded-full bg-background animate-pulse motion-reduce:animate-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showIntro && <IntroSequence onComplete={finishIntro} />}

      {/* Scroll indicator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce motion-reduce:animate-none">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;