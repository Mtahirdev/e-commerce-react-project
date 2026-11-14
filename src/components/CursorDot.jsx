import { useEffect, useRef } from "react";

export default function CursorRing() {
  const ringRef = useRef(null);

  useEffect(() => {
    // don't run on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = 0,
      mouseY = 0;
    let ringX = 0,
      ringY = 0;
    let frame;
    let started = false;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // first move: snap the ring to the mouse and show it
      if (!started) {
        started = true;
        ringX = mouseX;
        ringY = mouseY;
        ringRef.current?.classList.remove("opacity-0");
      }
    };

    // ring chases the mouse smoothly
    const animate = () => {
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      frame = requestAnimationFrame(animate);
    };
    animate();

    // grow ring when hovering links/buttons
    const onOver = (e) => {
      if (e.target.closest("a, button")) {
        ringRef.current?.classList.add("scale-150", "bg-brand-500/20");
      }
    };
    const onOut = (e) => {
      if (e.target.closest("a, button")) {
        ringRef.current?.classList.remove("scale-150", "bg-brand-500/20");
      }
    };

    window.addEventListener("mousemove", onMove);
    // document.addEventListener("mouseover", onOver);
    // document.addEventListener("mouseout", onOut);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      // document.removeEventListener("mouseover", onOver);
      // document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <div
      ref={ringRef}
      className="pointer-events-none fixed top-0 left-0 z-[9998] hidden md:block w-8 h-8 rounded-full border border-brand-400 opacity-0 transition-[scale,background-color,opacity] duration-200 bg-brand-400/50"
    />
  );
}
