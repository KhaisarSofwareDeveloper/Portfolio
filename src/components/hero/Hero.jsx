import "./hero.scss";
import { motion, transform } from "framer-motion";

import Contact from "../contact/Contact";

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
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            KHAISAR BEGUM
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Software Developer and Engineer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Adept Senior Software Developer with 5 years of experience under my
            belt, I'm driven by the challenge of crafting complex software
            solutions that empower the Financial Insurance Services industry. I
            bring a proven track record of leading and managing projects from
            ideation to execution, ensuring meticulous adherence to Agile
            methodologies and best practices.
            (Git/GitHub).
          </motion.p>
          <br/>
          <motion.div variants={textVariants} className="buttons">
          <a href="#Contact">
           
            Contact Me
           
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="imageContainer">
        <img src="/Khaisar_Photo.jpeg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
