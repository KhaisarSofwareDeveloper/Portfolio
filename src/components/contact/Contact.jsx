import "./contact.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  return (
    <motion.div
      variants={textVariants}
      initial="initial"
      animate="animate"
      className="contact"
    >
      <div className="textContainer">
        <div className="item">
          <h2>Mail</h2>
          <span>khaisar.shaik12@gmail.com</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>+971 565738684</span>
        </div>
        <div className="item">
          <h2>Addrsss</h2>
          <span>146 Salah Al Din stn - Deira - Dubai - UAE</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
