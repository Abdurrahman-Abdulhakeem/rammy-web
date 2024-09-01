import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function ScalingSection({ children, className, ...props }) {
  const ref = useRef();
  const isInView = useInView(ref, { amount: 0.75 }); // Trigger when 75% of the section is in view

  return (
    <motion.section
      ref={ref}
      initial={{ scale: 0.8, opacity: 0.4 }}
      animate={{ scale: isInView ? 1 : 0.8, opacity: isInView ? 1 : 0.4,}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export default ScalingSection;