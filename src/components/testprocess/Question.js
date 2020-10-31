import React from "react";
import QuestionNumber from "./QuestionNumber";
import QuestionItself from "./QuestionItself";

const Question = ({ qnum, question, answers, next }) => {
  return (
    <div className='question'>
      <QuestionNumber num={qnum} />
      <QuestionItself
        qnum={qnum}
        question={question}
        answers={answers}
        next={next}
      />
    </div>
  );
};

export default Question;
