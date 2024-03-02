import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0.7, x: 100 },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: { opacity: 0.7, x: -100 },
};

const AninamtedPage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default AninamtedPage;
