import React from "react";
import TestLeaflet from "./TestLeaflet";
import Questions from "./Questions";
import SelectedContextProvider from "../../contexts/SelectedContext";
import TestHeader from "./TestHeader";

const QuestionArea = () => {
  return (
    <div className='question-area'>
      <SelectedContextProvider>
        <div className='testHeader-questions'>
          <TestHeader />
          <Questions />
        </div>
        <TestLeaflet />
      </SelectedContextProvider>
    </div>
  );
};

export default QuestionArea;
