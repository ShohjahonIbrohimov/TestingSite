import React from "react";
import { ReactComponent as EmptyPage } from "../../assets/global/undraw_empty_xct9.svg";

const NoResult = () => {
  return (
    <div className='no-result'>
      <h2 className='no-result-text'>
        Kechirasiz, bu yerda hech nima topilmadi
      </h2>
      <EmptyPage />
    </div>
  );
};

export default NoResult;
