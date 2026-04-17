const CircuitBg = ({ opacity = 0.045, color = '#1e3a5f' }) => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none select-none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <pattern id="circuit-tile" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
        <g fill={color} stroke={color} strokeWidth="1" opacity={opacity}>
          {/* Traces */}
          <path d="M0 35 H45 V0" fill="none" />
          <path d="M75 0 H120 V55" fill="none" />
          <path d="M120 85 H90 V120" fill="none" />
          <path d="M0 80 H25 V120" fill="none" />
          <path d="M45 55 H75" fill="none" />
          <path d="M45 35 V55" fill="none" />
          <path d="M75 55 V85" fill="none" />
          <path d="M25 80 H55" fill="none" />
          <path d="M55 80 V120" fill="none" />

          {/* Junction nodes */}
          <circle cx="45" cy="35" r="3" stroke="none" />
          <circle cx="45" cy="55" r="3" stroke="none" />
          <circle cx="75" cy="55" r="3" stroke="none" />
          <circle cx="75" cy="85" r="3" stroke="none" />
          <circle cx="25" cy="80" r="3" stroke="none" />
          <circle cx="55" cy="80" r="3" stroke="none" />

          {/* IC / component pads */}
          <rect x="42" y="-4" width="6" height="8" rx="1" stroke="none" />
          <rect x="72" y="-4" width="6" height="8" rx="1" stroke="none" />
          <rect x="116" y="52" width="8" height="6" rx="1" stroke="none" />
          <rect x="87" y="117" width="6" height="7" rx="1" stroke="none" />

          {/* Small resistor symbol (two small rects) */}
          <rect x="57" y="53" width="12" height="4" rx="1" fill="none" />

          {/* Tiny dot grid accent */}
          <circle cx="20" cy="20" r="1.2" stroke="none" />
          <circle cx="100" cy="20" r="1.2" stroke="none" />
          <circle cx="20" cy="100" r="1.2" stroke="none" />
          <circle cx="100" cy="100" r="1.2" stroke="none" />
          <circle cx="60" cy="10" r="1.2" stroke="none" />
          <circle cx="10" cy="55" r="1.2" stroke="none" />
          <circle cx="110" cy="75" r="1.2" stroke="none" />
        </g>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#circuit-tile)" />
  </svg>
);

export default CircuitBg;
