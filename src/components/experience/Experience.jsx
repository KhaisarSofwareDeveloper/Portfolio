import "./experience.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Experience = () => {
  return (
    <motion.div className="experience">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <br/>
          <br/>
          <motion.h1 variants={textVariants}> WORK EXPERIENCE </motion.h1>
          <hr />
          <motion.h2 variants={textVariants}>
            Senior Software Developer
          </motion.h2>
          <motion.p variants={textVariants}>06/2022 - 04/2024</motion.p>
          <motion.h3 variants={textVariants}>RESPONSIBILITIES</motion.h3>
          <motion.ul ariants={textVariants}>
            <li>
              Led a cross-functional team of 7 developers in the design and
              implementation of a new Guidewire Policy</li>
              <li>
              Center Configuration and Rating system.
              Conducted workshops with over 20 business stakeholders to
              understand their needs and translated them into technical
              specifications.
            </li>
            <li>
              Designed a scalable and robust system architecture using Java and
              Guidewire technologies, leveraging my experience in
              object-oriented programming principles and design patterns to
              develop a system capable of handling millions transactions per
              year.
            </li>
            <li>
              Provided guidance and mentorship to junior developers, helping
              them develop their Java skills and knowledge of Guidewire.
            </li>
          </motion.ul>
          

        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;
