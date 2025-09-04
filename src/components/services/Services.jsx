import "./services.scss"
import {motion} from "framer-motion"

const textVariants = {
    initial:{
        x: -500,
        opacity: 0,
    },
    animate:{
        x: 0,
        opacity: 1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    },
};

    const skills = [
      { name: 'Java' },
      { name: 'JavaScript' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'React' },
      { name: 'SpringBoot' },
      { name: 'Angular' },
      { name: 'Agile Methodology' },
      { name: 'Git, GitHub' },
      { name: 'Docker, Kafka' },
      { name: 'Rest API' },
      { name: 'MySQL, SQL' },
      { name: 'Microsoft Excel - VBA, Macros' },
      { name: 'Eclipse, VsCode' },
    ];

const Services = () => {
  return (
    <motion.div className="services">
    <div className="wrapper">
      <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
    <motion.h1 variants={textVariants}> TECHNICAL SKILLS </motion.h1>
    <hr/>
      </motion.div>
      <br/><br/><br/>
      <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate"> 
      <motion.div variants={textVariants} className="skills-container">
      <motion.div variants={textVariants} className="column">
        {skills.slice(0, 7).map((skill, index) => (
          <motion.div variants={textVariants} key={index} className="skill">
            {skill.name}
          </motion.div>
        ))}
      </motion.div>
      <motion.div variants={textVariants} className="column">
        {skills.slice(7).map((skill, index) => (
          <motion.div variants={textVariants} key={index} className="skill">
            {skill.name}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
    </motion.div>
    </div>
      <motion.div className="textContainer"> </motion.div>
    </motion.div>
  )
}

export default Services
