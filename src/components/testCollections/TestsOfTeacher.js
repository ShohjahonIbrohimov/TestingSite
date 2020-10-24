import React, { useContext } from "react";
import { QuestionsContext } from "../../contexts/QuestionsContext";

const TestsOfTeacher = ({ creator, subject, createdAt, qnum }) => {
  //   const { getQuestions } = useContext(contextValue);

  return (
    <div className='tests-of-teacher'>
      <div className='creator'>
        <h1>{creator}</h1>
      </div>
      <div className='subject'>
        <span>Fan:</span>
        <span>{subject}</span>
      </div>
      <div className='createdAt'>{createdAt}</div>
      <div className='number-of-questions'>
        <span> Savollar soni</span>
        <span>{qnum}</span>
      </div>
    </div>
  );
};

export default TestsOfTeacher;
