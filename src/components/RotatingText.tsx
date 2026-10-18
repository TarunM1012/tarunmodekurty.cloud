import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/** Cycles through phrases with a vertical slide. */
const RotatingText = ({ items, interval = 2800 }: { items: string[]; interval?: number }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), interval);
    return () => clearInterval(id);
  }, [items.length, interval]);

  return (
    <span className="relative inline-grid overflow-hidden align-bottom">
      {/* Reserve the width of the longest phrase so the line never jumps */}
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">
        {items.reduce((a, b) => (b.length > a.length ? b : a))}
      </span>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="col-start-1 row-start-1 text-foreground"
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default RotatingText;
