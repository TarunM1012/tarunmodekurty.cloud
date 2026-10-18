import { forwardRef, type HTMLAttributes, type PointerEvent } from "react";
import { cn } from "@/lib/utils";

/** A card whose background glows under the cursor. Uses the `.spotlight` CSS class. */
const Spotlight = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, onPointerMove, ...rest }, ref) => {
    const handleMove = (e: PointerEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
      e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
      onPointerMove?.(e);
    };
    return <div ref={ref} onPointerMove={handleMove} className={cn("spotlight", className)} {...rest} />;
  }
);
Spotlight.displayName = "Spotlight";

export default Spotlight;
