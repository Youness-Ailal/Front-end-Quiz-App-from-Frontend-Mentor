/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import Logo from "./Logo";
import { motion } from "framer-motion";
function ResultScreen({ subject, subjects, questions, dispatch }) {
  const points = subjects[subject].points;
  const maxPoints = questions.length * 10;
  const score = Math.round((points * 100) / maxPoints);
  let emoji;
  if (score === 100) emoji = "🤩";
  if (score >= 80 && score < 100) emoji = "😎";
  if (score >= 50 && score < 80) emoji = "😀";
  if (score >= 20 && score < 50) emoji = "😒";
  if (score < 20) emoji = "🤦‍♂️";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="screen grid grid-cols-2 justify-between ">
      <div className="screen__left flex flex-col gap-8">
        <p className="screen__p questions__count">Quiz Finished!</p>
        <h1 className="screen__title-2">
          You have successfuy <strong>Completed the quiz!</strong>
        </h1>
      </div>
      <div className="screen__right flex flex-col gap-4">
        <div className="score flex flex-col items-center justify-center">
          <Logo subject={subject} gap={6} />
          <div className="score__num">
            <p className="score__num--top font-bold">You scored:</p>
            <p className="score__num--mid font-bold">
              {score}
              <span>%</span>
            </p>
            <p className="score__num--bottom font-bold">({emoji})</p>
          </div>
        </div>
        <button
          onClick={() => {
            dispatch({ type: "restart" });
          }}
          className="button btn-again">
          Play Again
        </button>
      </div>
    </motion.div>
  );
}

export default ResultScreen;
