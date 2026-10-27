import { useEffect, useRef, useState } from "react";
import { ArrowRight, Bot, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";
import WorkflowBackground from "@/components/WorkflowBackground";
import IntroSequence, {
  hasSeenIntro,
  prefersReducedMotion,
} from "@/components/IntroSequence";

const TITLES = ["Front-End Developer", "AI & Automation Solutions Developer"];

type Stage = "hidden" | "entering" | "settled";

/** Typewriter that rotates between the two specialisations. */
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
        Front-End Developer <span className="text-muted-foreground">·</span> AI
        &amp; Automation Solutions Developer
      </p>
    );
  }

  return (
    <p className="font-display text-2xl md:text-4xl font-bold min-h-[1.3em]">
      <span className="sr-only">
        Front-End Developer and AI &amp; Automation Solutions Developer
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
    () => !hasSeenIntro() && !prefersReducedMotion()
  );
  const [stage, setStage] = useState<Stage>(() =>
    showIntro ? "hidden" : "settled"
  );

  const finishIntro = () => {
    setShowIntro(false);
    setStage("entering");
    // Double rAF: paint the start position first, then animate to the final one
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
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden py-24"
    >
      <WorkflowBackground />
      <div className="absolute inset-0 hero-gradient pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse-glow motion-reduce:animate-none pointer-events-none" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/5 blur-3xl animate-pulse-glow motion-reduce:animate-none pointer-events-none"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-8 items-center">
          {/* Text column */}
          <div
            className={`space-y-6 text-center lg:text-left transition-opacity duration-1000 motion-reduce:transition-none ${
              contentVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full tech-border font-mono text-xs md:text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse motion-reduce:animate-none" />
              Available for Projects
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              I build digital experiences and{" "}
              <span className="text-gradient">intelligent solutions</span>.
            </h1>

            <p className="text-muted-foreground text-base md:text-lg">
              Among the many things I do, two areas stand out.
            </p>

            <RotatingTitle />

            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I turn ideas into interactive digital experiences and transform
              repetitive processes into intelligent, automated workflows.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              
              <Button variant="hero" asChild>
                <a href="/automation">
                  <Bot className="w-5 h-5" />
                  Explore my AI &amp; Automation Work
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="heroOutline" asChild>
                <a href="/web-dev">
                  <Code className="w-5 h-5" />
                  Explore My Front-End Work
                  <ArrowRight className="w-4 h-4" />
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
