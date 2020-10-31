import React, { useContext } from "react";
import QuestionsCarousel from "./QuestionsCarousel";
import { QuestionsContext } from "../../contexts/QuestionsContext";

const TestsByMajor = () => {
  const { mathQuestions } = useContext(QuestionsContext);

  return (
    <div className='tests-by-major'>
      <QuestionsCarousel mathQuestions={mathQuestions} />
    </div>
  );
};

export default TestsByMajor;
