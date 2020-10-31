import React, { createContext, useState } from "react";

export const LoaderContext = createContext();

const LoaderContextProvider = (props) => {
  const [loading, setloading] = useState(false);

  const toggleLoading = () => {
    loading ? setloading(false) : setloading(true);
  };
  return (
    <LoaderContext.Provider value={{ toggleLoading, loading, setloading }}>
      {props.children}
    </LoaderContext.Provider>
  );
};

export default LoaderContextProvider;
