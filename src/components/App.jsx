import { useReducer } from "react";
import "../styles/App.scss";
import Header from "./Header";
import HomeScreen from "./HomeScreen";
import QuizScreen from "./QuizScreen";
import Questions from "../../Questions.json";
import ResultScreen from "./ResultScreen";

const subjectsIndex = {
  html: 0,
  css: 1,
  js: 2,
  react: 3,
};

const initialState = {
  questions: [],

  // "ready" , "active",
  status: "ready",

  subjects: {
    html: { completed: false, points: 0, topScore: 0 },
    css: { completed: false, points: 0, topScore: 0 },
    js: { completed: false, points: 0, topScore: 0 },
    react: { completed: false, points: 0, topScore: 0 },
  },

  // html,css,js,react
  subject: null,

  questionIndex: 7,

  // 0,1,2,3
  userAnswer: null,
};

function reducer(state, action) {
  const { type, payload } = action;
  const subjectObject = state.subjects[state.subject];
  const updatedPoints = subjectObject?.points + payload;
  switch (type) {
    // start the quiz according to the selected subject (html,css,javascript or react);
    case "startQuiz":
      return {
        ...state,
        status: "active",
        subject: payload,
        questions: Questions[subjectsIndex[payload]],
      };

    case "setAnswer":
      return { ...state, userAnswer: payload };

    //move to the next question + update points
    case "nextQuestion":
      return {
        ...state,
        questionIndex: state.questionIndex++,
        userAnswer: null,
        subjects: {
          ...state.subjects,
          [state.subject]: {
            ...subjectObject,
            points: updatedPoints,
          },
        },
      };
    case "finishQuiz":
      return {
        ...state,
        status: "finish",
        subjects: {
          ...state.subjects,
          [state.subject]: {
            points: updatedPoints,
            completed: true,
            topScore:
              subjectObject.points > subjectObject.topScore
                ? subjectObject.points
                : subjectObject.topScore,
          },
        },
      };
    case "restart":
      return {
        ...initialState,
        subjects: {
          html: {
            points: 0,
            completed: false,
            topScore: state.subjects.html.topScore,
          },
          css: {
            points: 0,
            completed: false,
            topScore: state.subjects.css.topScore,
          },
          js: {
            points: 0,
            completed: false,
            topScore: state.subjects.js.topScore,
          },
          react: {
            points: 0,
            completed: false,
            topScore: state.subjects.react.topScore,
          },
        },
      };
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, subject, questionIndex, userAnswer, subjects } =
    state;
  return (
    <div className="app">
      <div className="circle circle-1"></div>
      <Container>
        <Header subject={subject}></Header>
        <Main>
          {status === "ready" && <HomeScreen dispatch={dispatch}></HomeScreen>}
          {status === "active" && (
            <QuizScreen
              userAnswer={userAnswer}
              dispatch={dispatch}
              questionIndex={questionIndex}
              questions={questions}></QuizScreen>
          )}
          {status === "finish" && (
            <ResultScreen
              dispatch={dispatch}
              subjects={subjects}
              subject={subject}
              questions={questions}></ResultScreen>
          )}
        </Main>
      </Container>
    </div>
  );
}

export default App;

function Container({ children }) {
  return <div className="wrapper">{children}</div>;
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}
