import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { useMotionValue, useSpring } from "motion/react";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG = {
  width: 1000,
  height: 1000,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 18000,
  mapBrightness: 1.8,
  baseColor: [0.03, 0.34, 0.92],
  markerColor: [1, 1, 1],
  glowColor: [0.1, 0.42, 0.95],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03, name: "Philippines" },
    { location: [19.076, 72.8777], size: 0.1, name: "India" },
    { location: [23.8103, 90.4125], size: 0.05, name: "Thailand" },
    { location: [30.0444, 31.2357], size: 0.07, name: "Egypt" },
    { location: [39.9042, 116.4074], size: 0.08, name: "China" },
    { location: [-23.5505, -46.6333], size: 0.1, name: "Brazil" },
    { location: [19.4326, -99.1332], size: 0.1, name: "Mexico" },
    { location: [40.7128, -74.006], size: 0.1, name: "United States" },
    { location: [34.6937, 135.5022], size: 0.05, name: "Japan" },
    { location: [41.0082, 28.9784], size: 0.06, name: "Turkey" },
  ],
};

export function Globe({ className = "", config = GLOBE_CONFIG }) {
  const canvasRef = useRef(null);
  const phiRef = useRef(0);
  const widthRef = useRef(0);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const markerCount = config?.markers?.length ?? 0;
    if (!markerCount) return undefined;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % markerCount);
    }, 1500);

    return () => clearInterval(interval);
  }, [config]);

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        widthRef.current = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      ...config,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phiRef.current += 0.005;
        state.phi = phiRef.current + rs.get();
        state.width = widthRef.current * 2;
        state.height = widthRef.current * 2;
      },
    });

    setTimeout(() => { if (canvasRef.current) canvasRef.current.style.opacity = "1"; }, 0);

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  const activeMarker = config?.markers?.[activeIndex] ?? { location: [0, 0], name: "" };
  const [lat, lon] = activeMarker.location;
  const labelX = ((lon + 180) / 360) * 100;
  const labelY = ((90 - lat) / 180) * 100;

  return (
    <div className={`absolute inset-0 mx-auto aspect-square w-full max-w-150 ${className}`}> 
      <canvas
        className="size-full opacity-0 transition-opacity duration-500 contain-[layout_paint_size]"
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
      />

      <span
        className="globe-country-label"
        style={{ left: `${labelX}%`, top: `${labelY}%` }}
      >
        {activeMarker.name}
      </span>
    </div>
  );
}
