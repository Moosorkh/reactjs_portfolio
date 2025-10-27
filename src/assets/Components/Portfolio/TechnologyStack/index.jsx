import React from "react";
import { motion } from "framer-motion";
import TechCategory from "./TechCategory";
import { techCategories } from "../data/techStack";

const TechnologyStack = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-wrap items-center justify-center gap-6 mb-12"
    >
      <div className="flex flex-wrap md:w-1/1 gap-8 md:p-12 py-10">
        {techCategories.map((category, index) => (
          <TechCategory
            key={category.id}
            title={category.title}
            technologies={category.technologies}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default TechnologyStack;