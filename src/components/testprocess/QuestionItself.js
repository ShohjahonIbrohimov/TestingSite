import React from "react";
import Radios from "../subjects/Radios";

const QuestionItself = ({ qnum, question, answers, next }) => {
  return (
    <div className='question-itself'>
      <p>{question}</p>
      <Radios answers={answers} qnum={qnum} next={next} />
    </div>
  );
};

export default QuestionItself;
