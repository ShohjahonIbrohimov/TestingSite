import React, { useContext } from "react";
import TestLeaflet from "./TestLeaflet";
import Questions from "./Questions";
import SelectedContextProvider from "../../contexts/SelectedContext";
import { TestResultContext } from "../../contexts/TestResultContext";

import TestHeader from "./TestHeader";

const QuestionArea = () => {
  const { calculated } = useContext(TestResultContext);
  return (
    <div className='question-area'>
      <SelectedContextProvider>
        <div className='testHeader-questions'>
          <TestHeader />
          {!calculated && <Questions />}
        </div>
        {!calculated && <TestLeaflet />}
      </SelectedContextProvider>
    </div>
  );
};

export default QuestionArea;
