import "../styles/Option.scss";
import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

/* eslint-disable react/prop-types */
const letters = ["A", "B", "C", "D"];

function QuizScreen({ questions, questionIndex, dispatch, userAnswer }) {
  const { question, options, answer } = questions[questionIndex];
  const [selectedOpt, setSelectedOpt] = useState(null);
  const hasSelectedOpt = selectedOpt !== null;
  const hasAnswer = userAnswer !== null;
  const points = userAnswer === answer ? 10 : 0;
  const completed = questions.length - 1 === questionIndex ? true : false;
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="screen grid grid-cols-2 justify-between">
      <div className="screen__left flex flex-col gap-8">
        <p className="screen__p questions__count">
          Question {questionIndex + 1} / {questions.length}{" "}
        </p>
        <h1 className="screen__title-2">{question}</h1>
        <progress
          className="progress progress-primary w-56"
          value={questionIndex + Number(hasAnswer)}
          max={questions.length}></progress>
      </div>
      <div className="screen__right flex flex-col gap-10">
        {options.map((option, i) => (
          <Option
            answer={answer}
            hasAnswer={hasAnswer}
            selectedOpt={selectedOpt}
            setSelectedAnswer={setSelectedOpt}
            key={option}
            text={options[i]}
            letter={letters[i]}
            id={i}></Option>
        ))}
        {!hasAnswer && (
          <button
            onClick={() =>
              dispatch({ type: "setAnswer", payload: selectedOpt })
            }
            disabled={!hasSelectedOpt}
            className="button">
            Submit answer
          </button>
        )}
        {hasAnswer && !completed && (
          <button
            onClick={() => {
              dispatch({
                type: "nextQuestion",
                payload: points,
              });
              setSelectedOpt(null);
            }}
            disabled={!hasSelectedOpt}
            className="button">
            Next question
          </button>
        )}
        {hasAnswer && completed && (
          <button
            onClick={() => {
              dispatch({
                type: "finishQuiz",
                payload: points,
              });
            }}
            className="button">
            See result
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default QuizScreen;
function Option({
  text,
  letter,
  id,
  setSelectedAnswer,
  hasAnswer,
  answer,
  selectedOpt,
}) {
  let resultClassName = "";
  if (hasAnswer && id === answer) {
    resultClassName = "correct";
  } else if (hasAnswer && selectedOpt !== answer && id == selectedOpt) {
    resultClassName = "incorrect";
  } else {
    resultClassName = "";
  }
  return (
    <>
      <input
        disabled={hasAnswer}
        onChange={e => setSelectedAnswer(id)}
        className="option__radio"
        value={id}
        name="radiogrouup"
        type="radio"
        id={id}
      />
      <label
        className={`option ${
          hasAnswer ? "option-disabled" : ""
        } ${resultClassName}`}
        htmlFor={id}>
        <span className="option__letter">{letter}</span>
        {text}
        <span className="true-icon">
          <IoMdCheckmark></IoMdCheckmark>{" "}
        </span>
        <span className="false-icon">
          <IoCloseOutline></IoCloseOutline>
        </span>
      </label>
    </>
  );
}
