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
const Experience2 = () => {
  return (
    <motion.div className="experience">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>
            Associate Software Consultant
          </motion.h2>
          <motion.p variants={textVariants}>04/2021 - 05/2022</motion.p>
          <motion.h3 variants={textVariants}>RESPONSIBILITIES</motion.h3>
          <motion.ul ariants={textVariants}>
            <li>
              Designed and implemented a scalable and performant interface
              system within the Agency Portal using Java and Spring Boot. This
              system leveraged message queuing technologies to handle
              asynchronous data processing, enabling efficient storage,
              retrieval, and modification of over 500,000 records while
              maintaining exceptional response times.
            </li>
            <li>
              Contributed to the development of a Quick Quote and Full
              Application system for Home, Auto, and Package insurance products.
            </li>
          </motion.ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience2;
