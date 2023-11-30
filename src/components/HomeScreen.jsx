import { FaChevronRight } from "react-icons/fa";

function HomeScreen({ dispatch }) {
  return (
    <div className="screen grid grid-cols-2 justify-between gap-6">
      <div className="screen__left flex flex-col gap-8">
        <h1 className="screen__title">
          Welcome to the <strong>Front-end Quiz!</strong>
        </h1>
        <p className="screen__p">Pick a subject to get started</p>
      </div>
      <div className="screen__right flex flex-col gap-10">
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
      </div>
    </div>
  );
}

export default HomeScreen;

function Subject({ children, subject, onStartQuiz }) {
  return (
    <button onClick={onStartQuiz} className="subject">
      {children}
      {subject}
      <FaChevronRight className="subject__arrow" />
    </button>
  );
}
