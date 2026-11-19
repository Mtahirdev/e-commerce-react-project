import { useEffect, useRef } from "react";

const HOVER_TARGETS = "a, button, input, textarea, select, [role='button']";

export default function CursorRing() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    // don't run on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const ring = ringRef.current;
    const dot = dotRef.current;

    let mouseX = 0,
      mouseY = 0;
    let ringX = 0,
      ringY = 0;
    let frame;
    let started = false;
    let hovering = false;
    let pressed = false;

    const setVisible = (v) => {
      ring.dataset.visible = v;
      dot.dataset.visible = v;
    };

    const updateState = () => {
      const s = pressed ? "press" : hovering ? "hover" : "idle";
      ring.dataset.state = s;
      dot.dataset.state = s;
    };

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

      if (!started) {
        started = true;
        ringX = mouseX;
        ringY = mouseY;
        setVisible(true);
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(animate);
    };
    animate();

    const onOver = (e) => {
      if (e.target.closest(HOVER_TARGETS)) {
        hovering = true;
        updateState();
      }
    };
    const onOut = (e) => {
      if (e.target.closest(HOVER_TARGETS)) {
        hovering = false;
        updateState();
      }
    };
    const onDown = () => {
      pressed = true;
      updateState();
    };
    const onUp = () => {
      pressed = false;
      updateState();
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => started && setVisible(true);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <>
      {/* RING: outer = position + fade, inner = size/scale/colors */}
      <div
        ref={ringRef}
        data-visible="false"
        data-state="idle"
        className="group pointer-events-none fixed left-0 top-0 z-[9998] hidden opacity-0 mix-blend-difference
          transition-opacity duration-300 will-change-transform
          data-[visible=true]:opacity-100 md:block"
      >
        <div
          className="size-10 rounded-full border border-white/90 bg-white/0
            shadow-[0_0_0_1px_rgba(255,255,255,0.08)]
            transition-[scale,background-color,border-color] duration-300
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-data-[state=hover]:scale-[1.75] group-data-[state=hover]:border-white/40 group-data-[state=hover]:bg-white/20
            group-data-[state=press]:scale-75 group-data-[state=press]:bg-white/30"
        />
      </div>

      {/* DOT: disappears on hover so the ring takes focus */}
      <div
        ref={dotRef}
        data-visible="false"
        data-state="idle"
        className="group pointer-events-none fixed left-0 top-0 z-[9999] hidden opacity-0 mix-blend-difference
          transition-opacity duration-300 will-change-transform
          data-[visible=true]:opacity-100 md:block"
      >
        <div
          className="size-1.5 rounded-full bg-white
            transition-[scale,opacity] duration-200 ease-out
            group-data-[state=hover]:scale-0 group-data-[state=hover]:opacity-0
            group-data-[state=press]:scale-150"
        />
      </div>
    </>
  );
}
