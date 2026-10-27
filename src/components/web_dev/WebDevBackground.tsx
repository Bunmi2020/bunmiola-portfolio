import { useState } from "react";
import { prefersReducedMotion } from "@/components/IntroSequence";

interface CodeSnippet {
  id: number;
  x: number;
  y: number;
  lines: string[];
  type: "html" | "jsx" | "css" | "js" | "terminal";
}

const CODE_BLOCKS: CodeSnippet[] = [
  {
    id: 0,
    x: 80,
    y: 100,
    type: "jsx",
    lines: [
      "<div className='flex items-center gap-4'>",
      "  <Avatar src={user.avatarUrl} />",
      "  <h1 className='text-2xl font-bold'>Hello, World</h1>",
      "</div>",
    ],
  },
  {
    id: 1,
    x: 750,
    y: 90,
    type: "css",
    lines: [
      ".container {",
      "  display: grid;",
      "  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));",
      "  backdrop-filter: blur(12px);",
      "}",
    ],
  },
  {
    id: 2,
    x: 120,
    y: 350,
    type: "js",
    lines: [
      "const fetchUserData = async (userId) => {",
      "  const res = await api.get(`/users/${userId}`);",
      "  return res.data ?? defaultState;",
      "};",
    ],
  },
  {
    id: 3,
    x: 680,
    y: 320,
    type: "css",
    lines: [
      "@keyframes pulseGlow {",
      "  0%, 100% { opacity: 0.4; transform: scale(1); }",
      "  50% { opacity: 0.9; transform: scale(1.05); }",
      "}",
    ],
  },
  {
    id: 4,
    x: 220,
    y: 600,
    type: "terminal",
    lines: [
      "$ npm run build",
      "✓ Linting and typechecking files...",
      "✓ Compiled successfully in 1.42s",
      "✨ Ready on http://localhost:3000",
    ],
  },
];

// Syntax/Data flow lines connecting code segments
const CONNECTIONS: Array<{ d: string }> = [
  { d: "M 220 140 H 480 V 110 H 750" },
  { d: "M 280 390 H 500 V 350 H 680" },
  { d: "M 320 160 V 260 H 220 V 350" },
  { d: "M 820 220 V 270 H 720 V 320" },
  { d: "M 380 620 H 530 V 480 H 750" },
];

const WebDevBackground = () => {
  const [reduced] = useState(prefersReducedMotion);

  return (
    <div
      aria-hidden="true"
      className="absolute z-0 inset-0 overflow-hidden pointer-events-none font-mono"
    >
      <svg
        className="w-full h-full opacity-45"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="codeTrace" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* Subtle routing lines between compilation and execution points */}
        {CONNECTIONS.map((conn, i) => (
          <path
            key={`conn-${i}`}
            d={conn.d}
            fill="none"
            stroke="url(#codeTrace)"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            strokeLinecap="round"
          />
        ))}

        {/* Traveling data packets representing live execution / rendering stream */}
        {!reduced &&
          CONNECTIONS.map((conn, i) => (
            <circle
              key={`packet-${i}`}
              r="2.5"
              fill="hsl(var(--primary))"
              opacity="0.8"
            >
              <animateMotion
                dur={`${6 + i * 1.5}s`}
                begin={`${i * 0.8}s`}
                repeatCount="indefinite"
                path={conn.d}
              />
            </circle>
          ))}

        {/* Floating Code Snippets / Live Syntax Elements */}
        {CODE_BLOCKS.map((block) => (
          <g key={`code-block-${block.id}`} transform={`translate(${block.x}, ${block.y})`}>
            {/* Background window pane glow */}
            <rect
              width="320"
              height={block.lines.length * 18 + 28}
              rx="6"
              fill="hsl(var(--card))"
              fillOpacity="0.45"
              stroke="hsl(var(--primary))"
              strokeOpacity="0.2"
              strokeWidth="1"
              className="backdrop-blur-[2px]"
            />
            {/* Editor Top Bar dots */}
            <circle cx="12" cy="12" r="2.5" fill="hsl(var(--primary))" opacity="0.4" />
            <circle cx="22" cy="12" r="2.5" fill="hsl(var(--primary))" opacity="0.3" />
            <circle cx="32" cy="12" r="2.5" fill="hsl(var(--primary))" opacity="0.2" />

            <text
              x="46"
              y="15"
              fontSize="9"
              className="fill-muted-foreground tracking-wider"
              opacity="0.6"
            >
              {block.type.toUpperCase()} // editor_view.tsx
            </text>

            {/* Code Lines */}
            {block.lines.map((line, idx) => (
              <text
                key={`line-${idx}`}
                x="14"
                y={36 + idx * 18}
                fontSize="11"
                className="fill-foreground"
                opacity={idx === 0 ? "0.85" : "0.55"}
              >
                {line}
              </text>
            ))}
          </g>
        ))}

        {/* Background ambient watermarks */}
        <text x="150" y="550" fontSize="18" opacity="0.05" className="fill-foreground font-bold">&lt;html /&gt;</text>
        <text x="850" y="650" fontSize="18" opacity="0.05" className="fill-foreground font-bold">import &#123; React &#125; from 'react';</text>
      </svg>

      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />
    </div>
  );
};

export default WebDevBackground;