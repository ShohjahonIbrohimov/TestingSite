import React, { createContext, useState } from "react";

export const TakeTestContext = createContext();

const TakeTestContextProvider = (props) => {
  const [allowTakeTest, setallowTakeTest] = useState(false);

  return (
    <TakeTestContext.Provider value={{ allowTakeTest, setallowTakeTest }}>
      {props.children}
    </TakeTestContext.Provider>
  );
};

export default TakeTestContextProvider;
