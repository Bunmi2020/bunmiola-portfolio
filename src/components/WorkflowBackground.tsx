import { useState } from "react";
import { prefersReducedMotion } from "@/components/IntroSequence";

// Node coordinates in the SVG viewBox: [x, y, radius]
const NODES: Array<[number, number, number]> = [
  [100, 140, 5], [320, 80, 4], [560, 160, 6], [840, 90, 4], [1080, 180, 5],
  [180, 360, 4], [420, 320, 6], [700, 380, 5], [960, 330, 4],
  [120, 600, 5], [380, 560, 4], [640, 620, 6], [900, 540, 4], [1120, 640, 5],
  [520, 720, 4],
];

// Connections between node indices
const LINKS: Array<[number, number]> = [
  [0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [1, 6], [2, 7], [3, 8], [4, 8],
  [5, 6], [6, 7], [7, 8], [5, 9], [6, 10], [7, 11], [8, 12], [9, 10],
  [10, 11], [11, 12], [12, 13], [10, 14], [11, 14], [2, 6],
];

// Pulses travelling along links: [fromNode, toNode, durationSec, beginSec]
const PULSES: Array<[number, number, number, number]> = [
  [0, 1, 7, 0], [1, 2, 6, 1], [2, 7, 8, 0.5], [7, 11, 7, 2],
  [5, 6, 9, 3], [8, 12, 8, 1.5], [10, 11, 6, 4], [3, 8, 7, 2.5],
];

const WorkflowBackground = () => {
  // Reduced motion: skip the travelling pulses entirely
  const [reduced] = useState(prefersReducedMotion);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <svg
        className="w-full h-full opacity-60"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        {LINKS.map(([a, b], i) => (
          <line
            key={`link-${i}`}
            x1={NODES[a][0]}
            y1={NODES[a][1]}
            x2={NODES[b][0]}
            y2={NODES[b][1]}
            stroke="hsl(var(--primary))"
            strokeOpacity="0.12"
            strokeWidth="1"
          />
        ))}

        {!reduced &&
          PULSES.map(([from, to, dur, begin], i) => (
            <circle
              key={`pulse-${i}`}
              r="3"
              fill="hsl(var(--primary))"
              opacity="0.7"
            >
              <animateMotion
                dur={`${dur}s`}
                begin={`${begin}s`}
                repeatCount="indefinite"
                path={`M ${NODES[from][0]} ${NODES[from][1]} L ${NODES[to][0]} ${NODES[to][1]}`}
              />
            </circle>
          ))}

        {NODES.map(([x, y, r], i) => (
          <g key={`node-${i}`}>
            <circle
              cx={x}
              cy={y}
              r={r * 2.4}
              fill="hsl(var(--primary))"
              className={i % 4 === 0 ? "workflow-node-pulse" : undefined}
              style={i % 4 === 0 ? { animationDelay: `${(i % 5) * 0.8}s` } : undefined}
            />
            <circle cx={x} cy={y} r={r} fill="hsl(var(--primary))" opacity="0.35" />
          </g>
        ))}

        {/* Occasional abstract technical symbols */}
        <text x="260" y="230" fontSize="16" opacity="0.08" fontFamily="monospace" className="fill-foreground">{"{ }"}</text>
        <text x="760" y="250" fontSize="16" opacity="0.08" fontFamily="monospace" className="fill-foreground">{"</>"}</text>
        <text x="420" y="690" fontSize="14" opacity="0.08" fontFamily="monospace" className="fill-foreground">{"~/"}</text>
        <rect
          x="1030"
          y="420"
          width="18"
          height="18"
          className="stroke-primary"
          strokeOpacity="0.15"
          fill="none"
          transform="rotate(45 1039 429)"
        />
      </svg>

      {/* Soft vignette keeps the hero content readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />
    </div>
  );
};

export default WorkflowBackground;
