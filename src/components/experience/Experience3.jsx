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
const Experience3 = () => {
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
            Senior Software Engineer
          </motion.h2>
          <motion.p variants={textVariants}>02/2019 - 03/2021</motion.p>
          <motion.h3 variants={textVariants}>RESPONSIBILITIES</motion.h3>
          <motion.ul ariants={textVariants}>
            <li>
              Led the end-to-end implementation of the kzauto project in
              Guidewire Policy Center, focusing on Personal Auto and Home Lines
              of Business, which resulted in a 25% reduction in policy
              processing time.
            </li>
            <li>
              Owned complete lifecycle: from requirement analysis to delivery,
              including JUnit testing for quality assurance.
            </li>
            <li>
              Designed and developed user interfaces, implemented business
              rules, and created entities for enhanced user interaction.
            </li>
            <li>
              Leveraged VBA and Macros in Excel to automate repetitive data
              processing tasks, reducing manual effort by an estimated 30% and
              minimizing the risk of errors. This allowed the underwriting team
              to process applications more efficiently and focus on complex
              underwriting decisions.
            </li>
            <li>
              Implemented unit testing and deployed code using Git/GitHub,
              adhering to Agile methodologies and tracking progress on Azure.
              This resulted in a reduction in post-production defects by 15%.
            </li>
          </motion.ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience3;
