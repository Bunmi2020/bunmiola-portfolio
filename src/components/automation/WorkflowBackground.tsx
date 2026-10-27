import { useState } from "react";
import { prefersReducedMotion } from "@/components/IntroSequence";

interface WorkflowNode {
  id: number;
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  badge: string;
}

const NODES: WorkflowNode[] = [
  { id: 0, x: 80, y: 120, w: 72, h: 40, label: "Webhook", badge: "TRIG" },
  { id: 1, x: 280, y: 80, w: 80, h: 40, label: "JSON Parse", badge: "TRANS" },
  { id: 2, x: 520, y: 140, w: 84, h: 40, label: "AI Analysis", badge: "LLM" },
  { id: 3, x: 800, y: 90, w: 80, h: 40, label: "Condition", badge: "LOGIC" },
  { id: 4, x: 1040, y: 160, w: 72, h: 40, label: "DB Save", badge: "IO" },

  { id: 5, x: 160, y: 340, w: 80, h: 40, label: "API Request", badge: "HTTP" },
  { id: 6, x: 400, y: 300, w: 88, h: 40, label: "Agent Loop", badge: "AI" },
  { id: 7, x: 680, y: 360, w: 80, h: 40, label: "Transform", badge: "MAP" },
  { id: 8, x: 920, y: 310, w: 80, h: 40, label: "Vector DB", badge: "STORE" },

  { id: 9, x: 120, y: 580, w: 72, h: 40, label: "Schedule", badge: "CRON" },
  { id: 10, x: 380, y: 540, w: 80, h: 40, label: "Batch Sync", badge: "QUEUE" },
  { id: 11, x: 640, y: 600, w: 88, h: 40, label: "Orchestrate", badge: "FLOW" },
  { id: 12, x: 900, y: 520, w: 76, h: 40, label: "Notification", badge: "NOTIF" },
];

// Orthogonal circuit connection paths (90-degree routing)
const LINKS: Array<{ from: number; to: number; d: string }> = [
  { from: 0, to: 1, d: "M 152 140 H 216 V 100 H 280" },
  { from: 1, to: 2, d: "M 360 100 H 440 V 160 H 520" },
  { from: 2, to: 3, d: "M 604 160 H 702 V 110 H 800" },
  { from: 3, to: 4, d: "M 880 110 H 960 V 180 H 1040" },
  { from: 0, to: 5, d: "M 116 160 V 250 H 138 V 360 H 160" },
  { from: 1, to: 6, d: "M 320 120 V 210 H 360 V 320 H 400" },
  { from: 2, to: 7, d: "M 562 180 V 270 H 621 V 380 H 680" },
  { from: 3, to: 8, d: "M 840 130 V 220 H 880 V 330 H 920" },
  { from: 5, to: 6, d: "M 240 360 H 320 V 320 H 400" },
  { from: 6, to: 7, d: "M 488 320 H 584 V 380 H 680" },
  { from: 7, to: 8, d: "M 760 380 H 840 V 330 H 920" },
  { from: 5, to: 9, d: "M 200 380 V 480 H 160 V 580" },
  { from: 6, to: 10, d: "M 444 340 V 440 H 412 V 540" },
  { from: 7, to: 11, d: "M 720 400 V 500 H 580 V 620 H 640" },
  { from: 8, to: 12, d: "M 960 350 V 435 H 938 V 520" },
  { from: 9, to: 10, d: "M 192 600 H 286 V 560 H 380" },
  { from: 10, to: 11, d: "M 460 560 H 550 V 620 H 640" },
  { from: 11, to: 12, d: "M 728 620 H 814 V 540 H 900" },
];

// Pulses travelling along link index
const PULSES: Array<[number, number, number]> = [
  [0, 6, 0], [1, 7, 1], [2, 6, 0.5], [3, 8, 2],
  [5, 7, 1.5], [6, 8, 3], [8, 6, 2.5], [10, 7, 1.2],
  [12, 9, 3.5], [15, 6, 0.8], [16, 7, 2.2]
];

const WorkflowBackground = () => {
  const [reduced] = useState(prefersReducedMotion);

  return (
    <div
      aria-hidden="true"
      className="absolute z-0 inset-0 overflow-hidden pointer-events-none"
    >
      <svg
        className="w-full h-full opacity-45"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        
        <defs>
          <linearGradient id="traceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.25" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* PCB Circuit Traces (Orthogonal Workflow Links) */}
        {LINKS.map((link, i) => (
          <g key={`link-${i}`}>
            <path
              d={link.d}
              fill="none"
              stroke="url(#traceGrad)"
              strokeWidth="1.5"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <circle
              cx={link.d.split(" ")[1]}
              cy={link.d.split(" ")[2]}
              r="2"
              fill="hsl(var(--primary))"
              opacity="0.3"
            />
          </g>
        ))}

        {/* Traveling Data Pulses */}
        {!reduced &&
          PULSES.map(([linkIdx, dur, begin], i) => (
            <circle
              key={`pulse-${i}`}
              r="3.5"
              fill="hsl(var(--primary))"
              opacity="0.85"
              className="filter drop-shadow-[0_0_6px_hsl(var(--primary))]"
            >
              <animateMotion
                dur={`${dur}s`}
                begin={`${begin}s`}
                repeatCount="indefinite"
                path={LINKS[linkIdx].d}
              />
            </circle>
          ))}

        {/* Workflow Node Cards */}
        {NODES.map((node) => (
          <g key={`node-${node.id}`} transform={`translate(${node.x}, ${node.y})`}>
            <rect
              width={node.w}
              height={node.h}
              rx="8"
              fill="hsl(var(--card))"
              fillOpacity="0.75"
              stroke="hsl(var(--primary))"
              strokeOpacity="0.4"
              strokeWidth="1.2"
              className="backdrop-blur-sm"
            />
            <rect
              x="6"
              y="6"
              width="16"
              height="4"
              rx="2"
              fill="hsl(var(--primary))"
              opacity="0.6"
            />
            <text
              x="28"
              y="15"
              fontSize="9"
              fontFamily="monospace"
              className="fill-muted-foreground font-semibold tracking-wider"
              opacity="0.7"
            >
              {node.badge}
            </text>
            <text
              x="8"
              y="28"
              fontSize="11"
              fontFamily="sans-serif"
              className="fill-foreground font-medium"
            >
              {node.label}
            </text>
            {/* Input & Output terminal ports */}
            <circle cx="0" cy={node.h / 2} r="2.5" fill="hsl(var(--primary))" opacity="0.6" />
            <circle cx={node.w} cy={node.h / 2} r="2.5" fill="hsl(var(--primary))" opacity="0.6" />
          </g>
        ))}

        {/* Technical watermark labels */}
        <text x="240" y="210" fontSize="14" opacity="0.08" fontFamily="monospace" className="fill-foreground">SYS.PIPE // 01</text>
        <text x="740" y="240" fontSize="14" opacity="0.08" fontFamily="monospace" className="fill-foreground">AUTONOMOUS.AGENTS</text>
        <rect
          x="1010"
          y="400"
          width="24"
          height="24"
          className="stroke-primary"
          strokeOpacity="0.12"
          fill="none"
          strokeWidth="1.5"
          transform="rotate(45 1022 412)"
        />
      </svg>

      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />
    </div>
  );
};

export default WorkflowBackground;