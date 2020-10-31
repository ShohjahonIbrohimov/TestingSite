import React, { useContext } from "react";
import TakenTestData from "./TakenTestData";
import { TestResultContext } from "../../contexts/TestResultContext";

const TestResult = () => {
  const { testResults } = useContext(TestResultContext);

  return (
    <div className='test-result'>
      <h1>Hozirgina ishlangan test natijalari</h1>
      <TakenTestData
        subject={testResults.subject}
        corrects={testResults.corrects}
        incorrects={testResults.incorrects}
        total={testResults.totalQuestions}
      />
    </div>
  );
};

export default TestResult;
