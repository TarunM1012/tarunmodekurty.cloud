import { useEffect, useRef } from "react";

/**
 * Animated hero background: layered telemetry waveforms that spike into an
 * "anomaly" near the cursor, with a detection marker riding the spike.
 * Pauses when offscreen or the tab is hidden; draws a single still frame
 * when the user prefers reduced motion.
 */
const LINES = 7;

const SignalField = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let raf = 0;
    let running = true;
    let t = 0;

    // Cursor position in canvas space, eased toward the target.
    const pointer = { x: -1, y: -1, tx: -1, ty: -1, strength: 0, target: 0 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.tx = e.clientX - rect.left;
      pointer.ty = e.clientY - rect.top;
      pointer.target = pointer.ty >= 0 && pointer.ty <= rect.height ? 1 : 0;
      if (pointer.x < 0) {
        pointer.x = pointer.tx;
        pointer.y = pointer.ty;
      }
    };
    const onLeave = () => {
      pointer.target = 0;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      pointer.x += (pointer.tx - pointer.x) * 0.08;
      pointer.y += (pointer.ty - pointer.y) * 0.08;
      pointer.strength += (pointer.target - pointer.strength) * 0.05;

      // With no cursor, a slow autonomous "scan" provides the anomaly.
      const idleX = width * (0.5 + 0.35 * Math.sin(t * 0.25));
      const focusX = pointer.strength > 0.02 ? pointer.x * pointer.strength + idleX * (1 - pointer.strength) : idleX;

      const mid = height * 0.55;
      const spread = Math.min(height * 0.07, 48);
      let markerX = 0;
      let markerY = 0;
      let markerSet = false;

      for (let i = 0; i < LINES; i++) {
        const depth = i / (LINES - 1);
        const baseY = mid + (i - (LINES - 1) / 2) * spread;
        const amp = 10 + depth * 14;
        const freq = 0.006 + depth * 0.004;
        const speed = 0.6 + depth * 0.5;

        const grad = ctx.createLinearGradient(0, 0, width, 0);
        const alpha = 0.12 + (1 - Math.abs(depth - 0.5) * 2) * 0.35;
        grad.addColorStop(0, `hsla(188, 95%, 55%, 0)`);
        grad.addColorStop(0.2, `hsla(188, 95%, 55%, ${alpha})`);
        grad.addColorStop(0.8, `hsla(258, 90%, 66%, ${alpha})`);
        grad.addColorStop(1, `hsla(258, 90%, 66%, 0)`);

        ctx.beginPath();
        for (let x = 0; x <= width; x += 4) {
          const d = (x - focusX) / 90;
          const anomaly = Math.exp(-d * d) * (28 + depth * 18) * Math.sin(x * 0.12 - t * 9);
          const y =
            baseY +
            Math.sin(x * freq + t * speed + i) * amp +
            Math.sin(x * freq * 2.7 - t * speed * 1.3) * amp * 0.35 +
            anomaly;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
          if (!markerSet && i === Math.floor(LINES / 2) && Math.abs(x - focusX) < 2) {
            markerX = x;
            markerY = y;
            markerSet = true;
          }
        }
        ctx.strokeStyle = grad;
        ctx.lineWidth = i === Math.floor(LINES / 2) ? 1.6 : 1;
        ctx.stroke();
      }

      // Detection bracket around the anomaly, like an alert on a live trace.
      if (markerSet) {
        const x = markerX;
        const y = markerY;
        const pulse = 0.5 + 0.5 * Math.sin(t * 3);
        const top = mid - spread * 4.2;
        const bottom = mid + spread * 4.2;

        ctx.strokeStyle = `hsla(188, 95%, 60%, ${0.12 + pulse * 0.08})`;
        ctx.setLineDash([3, 6]);
        ctx.beginPath();
        ctx.moveTo(x, top);
        ctx.lineTo(x, bottom);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = "hsla(188, 95%, 60%, 0.9)";
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = `hsla(188, 95%, 60%, ${0.5 * (1 - pulse)})`;
        ctx.beginPath();
        ctx.arc(x, y, 6 + pulse * 10, 0, Math.PI * 2);
        ctx.stroke();

        if (width > 640) {
          ctx.font = "500 10px 'Geist Mono', ui-monospace, monospace";
          ctx.fillStyle = "hsla(188, 95%, 70%, 0.7)";
          const score = (0.71 + 0.1 * pulse).toFixed(2);
          ctx.fillText(`ANOMALY  p=${score}`, x + 10, top + 12);
        }
      }
    };

    const loop = () => {
      if (!running) return;
      t += 1 / 60;
      draw();
      raf = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener("resize", resize);

    if (reduceMotion) {
      t = 2;
      draw();
      return () => window.removeEventListener("resize", resize);
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    const io = new IntersectionObserver(([entry]) => {
      const visible = entry.isIntersecting && !document.hidden;
      if (visible && !running) {
        running = true;
        loop();
      } else if (!visible) {
        running = false;
        cancelAnimationFrame(raf);
      }
    });
    io.observe(canvas);
    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        loop();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    loop();

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={`h-full w-full ${className}`} />;
};

export default SignalField;
