import { motion } from "framer-motion";

export const animations = {
  initial: { opacity: 0.7 },
  animate: {
    opacity: 1,
  },
  exit: { opacity: 0.7 },
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
