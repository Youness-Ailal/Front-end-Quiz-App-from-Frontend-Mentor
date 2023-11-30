import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.1,
      duration: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

function HomeScreen({ dispatch }) {
  return (
    <div className="screen grid grid-cols-2 justify-between gap-6">
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="screen__left flex flex-col gap-8">
        <h1 className="screen__title">
          Welcome to the <strong>Front-end Quiz!</strong>
        </h1>
        <p className="screen__p">Pick a subject to get started</p>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="screen__right flex flex-col gap-10">
        <Subject
          onStartQuiz={() => dispatch({ type: "startQuiz", payload: "html" })}
          subject="HTML">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
        </Subject>
        <Subject
          onStartQuiz={() => dispatch({ type: "startQuiz", payload: "css" })}
          subject="CSS">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
        </Subject>
        <Subject
          onStartQuiz={() => dispatch({ type: "startQuiz", payload: "js" })}
          subject="JavaScript">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />{" "}
        </Subject>
        <Subject
          onStartQuiz={() => dispatch({ type: "startQuiz", payload: "react" })}
          subject="React">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
        </Subject>
      </motion.div>
    </div>
  );
}

export default HomeScreen;

function Subject({ children, subject, onStartQuiz }) {
  return (
    <motion.button variants={item} onClick={onStartQuiz} className="subject">
      {children}
      {subject}
      <FaChevronRight className="subject__arrow" />
    </motion.button>
  );
}
