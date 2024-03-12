import { SectionHeader } from "./atoms/typography";
import { animations } from "./AnimatedPage";
import { memo } from "react";
import { motion } from "framer-motion";

function ScenarioTitle({ name }) {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      variants={animations}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.6 }}
    >
      <SectionHeader
        style={{
          marginBottom: "0px",
          color: "#B8B8B8",
          outlineColor: "purple",
          textDecorationColor: "#FF00FF",
          textDecoration: "underline",
          textAlign: "center",
        }}
      >
        Current Scenario: {name}
      </SectionHeader>
    </motion.div>
  );
}

export default memo(ScenarioTitle);
