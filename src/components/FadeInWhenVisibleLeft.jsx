// src/FadeInWhenVisible.jsx
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const FadeInWhenVisibleLeft = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // 👈 triggers every time it enters viewport
    threshold: 0.2, // adjust sensitivity (0 = any visible pixel, 1 = fully visible)
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.9, ease: "easeOut" },
      });
    } else {
      controls.start({
        opacity: 0,
        x: 40,
        transition: { duration: 0.9, ease: "easeIn" },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={controls}>
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisibleLeft;
