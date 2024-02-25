import React from "react";
import { gsap } from "gsap";
import styles from "./sectors.module.css";
import { motion } from "framer-motion";

interface Project {
  title: string;
  color: string;
}

const projects: Project[] = [
  { title: "⪢ AI", color: "#000" },
  { title: "⪢ RWA", color: "#000" },
  { title: "⪢ DeFi", color: "#000" },
  { title: "⪢ DePin", color: "#000" },
  { title: "⪢ BRC20", color: "#000" },
  { title: "⪢ Gaming", color: "#000" },
  { title: "⪢ Infrastructure", color: "#000" },
  { title: "⪢ Modular Blockchains", color: "#000" },
];

const Sectors: React.FC = () => {
  const manageMouseEnter = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    gsap.to(e.currentTarget, {
      top: "-1vw",
      backgroundColor: projects[index].color,
      duration: 0.3,
    });
  };

  const manageMouseLeave = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    gsap.to(e.currentTarget, {
      top: "0",
      backgroundColor: "#f7f7f7",
      duration: 0.3,
      delay: 0.1,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.projectContainer}>
        {projects.map((project, index) => (
          <div
            key={index}
            onMouseEnter={(e) => manageMouseEnter(e, index)}
            onMouseLeave={(e) => manageMouseLeave(e, index)}
          >
            <motion.p
              initial={{ opacity: 0, scale: 1, x: 100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full "
            >
              {project.title}
            </motion.p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sectors;
