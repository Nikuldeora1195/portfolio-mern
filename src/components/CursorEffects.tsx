import { useEffect, useState, useRef } from "react";

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: "large" | "small";
}

export function CursorEffects() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const lastRippleTime = useRef(0);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Detect mobile/touch devices to disable heavy effects
    const checkMobile = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth <= 768;
      setIsMobile(isTouch || isSmallScreen);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Create high-density small waves trailing the cursor
      const now = Date.now();
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (now - lastRippleTime.current > 40 && distance > 10) { 
        lastRippleTime.current = now;
        lastPos.current = { x: e.clientX, y: e.clientY };
        
        const newRipple: Ripple = {
          id: now,
          x: e.clientX,
          y: e.clientY,
          size: "small",
        };
        setRipples((prev) => [...prev.slice(-40), newRipple]);
        
        setTimeout(() => {
          setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
        }, 1000);
      }
    };

    const handleClick = (e: MouseEvent) => {
      const now = Date.now();
      // Generate multiple concentric waves for a click
      for (let i = 0; i < 4; i++) {
        setTimeout(() => {
          const newRipple: Ripple = {
            id: now + i,
            x: e.clientX,
            y: e.clientY,
            size: "large",
          };
          setRipples((prev) => [...prev.slice(-40), newRipple]);
          setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
          }, 1500);
        }, i * 150); // 150ms stagger
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, [isMobile]);

  if (isMobile) {
    return null;
  }

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-[9998] transition-opacity duration-75"
        style={{
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />
      
      <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
        {ripples.map((r) => (
          <div
            key={r.id}
            className={`absolute rounded-full border border-white/40 ${
              r.size === "large" ? "animate-ripple-large" : "animate-ripple-small"
            }`}
            style={{
              left: r.x,
              top: r.y,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>
    </>
  );
}
