import { motion, type HTMLMotionProps } from "framer-motion";

type RevealProps = HTMLMotionProps<"div"> & { delay?: number };

/** A short, quiet fade-up the first time content scrolls into view. */
const Reveal = ({ delay = 0, children, ...rest }: RevealProps) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    {...rest}
  >
    {children}
  </motion.div>
);

export default Reveal;
