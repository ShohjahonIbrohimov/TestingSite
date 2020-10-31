import React, { useContext } from "react";
import QuestionArea from "../components/testprocess/QuestionArea";
import TestButtons from "../components/testprocess/TestButtons";
import TakenTests from "../components/testprocess/TakenTests";
import TestResult from "../components/testprocess/TestResult";

import { TestResultContext } from "../contexts/TestResultContext";

const TestProcess = () => {
  const { calculated } = useContext(TestResultContext);
  return (
    <div className='container'>
      <div className='test-process'>
        <QuestionArea />
        {calculated && (
          <div>
            <TestResult />
            <TakenTests />
          </div>
        )}
      </div>
    </div>
  );
};

export default TestProcess;
