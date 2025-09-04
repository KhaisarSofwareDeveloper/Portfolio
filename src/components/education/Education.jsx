import "./Education.scss";
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

const Education = () => {
  return (
    <motion.div className="education">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <br/>
          <br/>
          <motion.h1 variants={textVariants}> EDUCATION </motion.h1>
          <hr />
          <motion.ul variants={textVariants}>
            <motion.h2 variants={textVariants}>
              <li>B .E in Computer Science & Engineering</li>
            </motion.h2>

            <motion.p variants={textVariants}>07/2015 - 07/2018</motion.p>
            <motion.h5 variants={textVariants}>CGPA : 8.53 / 10</motion.h5>
            <motion.h3 variants={textVariants}>
              PDA college of Engineering
            </motion.h3>
            <motion.h3 variants={textVariants}>
              Gulbarga, Karnataka, India
            </motion.h3>
            <br />
            <motion.h2 variants={textVariants}>
              <li>Diploma in Computer Science</li>
            </motion.h2>
            <motion.p variants={textVariants}>06/2012 - 06/2015</motion.p>
            <motion.h5 variants={textVariants}>Percentage : 78 / 100</motion.h5>
            <motion.h3 variants={textVariants}>
              Women's Polytechnic Gulbarga
            </motion.h3>
            <motion.h3 variants={textVariants}>
              Gulbarga, Karnataka, India
            </motion.h3>
            <br />
            <br />
            <motion.h2 variants={textVariants}>
              <li>SSLC</li>
            </motion.h2>
            <motion.p variants={textVariants}>04/2011 - 05/2012</motion.p>
            <motion.h5 variants={textVariants}>Percentage : 68 / 100</motion.h5>
            <motion.h3 variants={textVariants}>
              Government High School
            </motion.h3>
            <motion.h3 variants={textVariants}>
              Gulbarga, Karnataka, India
            </motion.h3>
          </motion.ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Education;
