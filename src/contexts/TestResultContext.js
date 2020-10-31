import React, { createContext, useState } from "react";

export const TestResultContext = createContext();

const TestResultContextProvider = (props) => {
  const [testResults, settestResults] = useState({});
  const [calculated, setcalculated] = useState(false);

  return (
    <TestResultContext.Provider
      value={{ testResults, settestResults, calculated, setcalculated }}
    >
      {props.children}
    </TestResultContext.Provider>
  );
};

export default TestResultContextProvider;
