import { useEffect, useRef, useState } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";

export const INTRO_STORAGE_KEY = "bunmi-intro-seen";

const GREETING = "Hello, welcome to my world.";
const SUBLINE =
  "A journey through my professional and freelance work in Web Development, AI, and Automation.";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const hasSeenIntro = () => {
  try {
    return sessionStorage.getItem(INTRO_STORAGE_KEY) === "1";
  } catch {
    return false;
  }
};

interface IntroSequenceProps {
  onComplete: () => void;
}

const IntroSequence = ({ onComplete }: IntroSequenceProps) => {
  const [typedCount, setTypedCount] = useState(0);
  const [showSubline, setShowSubline] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const finishedRef = useRef(false);

  const finish = () => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    try {
      sessionStorage.setItem(INTRO_STORAGE_KEY, "1");
    } catch {
      // Storage unavailable — the intro simply plays again next visit
    }
    setLeaving(true);
    window.setTimeout(onComplete, 850);
  };

  useEffect(() => {
    if (prefersReducedMotion()) {
      // Static, motion-free alternative: show the greeting briefly, then continue
      setTypedCount(GREETING.length);
      setShowSubline(true);
      const t = window.setTimeout(finish, 2200);
      return () => window.clearTimeout(t);
    }
    const typing = window.setInterval(() => {
      setTypedCount((count) => {
        if (count >= GREETING.length) {
          window.clearInterval(typing);
          return count;
        }
        return count + 1;
      });
    }, 55);
    return () => window.clearInterval(typing);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (typedCount < GREETING.length) return;
    const t1 = window.setTimeout(() => setShowSubline(true), 350);
    const t2 = window.setTimeout(finish, 3400);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typedCount]);

  const typingDone = typedCount >= GREETING.length;

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center bg-background/95 backdrop-blur-sm transition-opacity duration-700 ${
        leaving ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center text-center px-6">
        <div className="relative mb-8 intro-portrait-in">
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-primary/60 shadow-[0_0_60px_hsl(180_70%_50%/0.35)]">
            <img
              src={profilePhoto}
              alt="Bunmi Oladipupo"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
            <span className="w-3 h-3 rounded-full bg-background animate-pulse motion-reduce:animate-none" />
          </div>
        </div>

        <p className="font-mono text-lg md:text-2xl text-foreground min-h-[1.6em]">
          {GREETING.slice(0, typedCount)}
          <span
            aria-hidden="true"
            className="inline-block w-[2px] h-[1.1em] bg-primary align-middle ml-0.5 animate-caret motion-reduce:animate-none"
          />
        </p>

        <p
          className={`mt-4 max-w-xl text-muted-foreground text-base md:text-lg transition-opacity duration-1000 motion-reduce:transition-none ${
            showSubline ? "opacity-100" : "opacity-0"
          }`}
        >
          {SUBLINE}
        </p>
      </div>

      <button
        onClick={finish}
        className="absolute bottom-8 right-8 text-sm text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-full border border-border hover:border-primary/50 min-h-[44px] min-w-[44px]"
      >
        Skip intro
      </button>
    </div>
  );
};

export default IntroSequence;
