import { useRef, useEffect, useState } from 'react';

let counter = 0;

const SnakeBorder = ({ color = '#dc2626', duration = 5, snakeSize = 80, rx = 16, strokeWidth = 2, delay = 0 }) => {
  const ref = useRef(null);
  const [dims, setDims] = useState({ w: 0, h: 0 });
  const animId = useRef(`snake-${++counter}`).current;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const measure = () => {
      const r = el.getBoundingClientRect();
      if (r.width > 0) setDims({ w: r.width, h: r.height });
    };

    const ro = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry.borderBoxSize?.length > 0) {
        setDims({
          w: entry.borderBoxSize[0].inlineSize,
          h: entry.borderBoxSize[0].blockSize,
        });
      } else {
        measure();
      }
    });

    ro.observe(el);
    measure();
    return () => ro.disconnect();
  }, []);

  const { w, h } = dims;
  if (!w || !h) return <div ref={ref} className="absolute inset-0 pointer-events-none" />;

  const perimeter = 2 * (w + h);
  const gap = perimeter - snakeSize;
  const sw = strokeWidth;

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none" style={{ zIndex: 10 }}>
      <style>{`
        @keyframes ${animId} {
          from { stroke-dashoffset: 0; }
          to   { stroke-dashoffset: ${-perimeter}; }
        }
      `}</style>
      <svg width={w} height={h} style={{ position: 'absolute', inset: 0 }}>
        <rect
          x={sw / 2}
          y={sw / 2}
          width={w - sw}
          height={h - sw}
          rx={rx}
          ry={rx}
          fill="none"
          stroke={color}
          strokeWidth={sw}
          strokeDasharray={`${snakeSize} ${gap}`}
          strokeLinecap="round"
          style={{
            animation: `${animId} ${duration}s linear ${delay}s infinite`,
          }}
        />
      </svg>
    </div>
  );
};

export default SnakeBorder;
