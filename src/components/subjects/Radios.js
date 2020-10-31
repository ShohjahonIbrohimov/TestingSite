import React, { useState } from "react";
import Option from "./Option";

const Radios = ({ qnum, answers, next }) => {
  const handleChecked = (name) => {
    next();
    switch (name) {
      case "A":
        Achecked ? setAchecked(false) : setAchecked(true);
        setBchecked(false);
        setCchecked(false);
        setDchecked(false);
        break;
      case "B":
        Bchecked ? setBchecked(false) : setBchecked(true);
        setAchecked(false);
        setCchecked(false);
        setDchecked(false);
        break;
      case "C":
        Cchecked ? setCchecked(false) : setCchecked(true);
        setAchecked(false);
        setBchecked(false);
        setDchecked(false);
        break;
      case "D":
        Dchecked ? setDchecked(false) : setDchecked(true);
        setAchecked(false);
        setBchecked(false);
        setCchecked(false);
        break;
    }
  };

  const [Achecked, setAchecked] = useState(false);
  const [Bchecked, setBchecked] = useState(false);
  const [Cchecked, setCchecked] = useState(false);
  const [Dchecked, setDchecked] = useState(false);

  return (
    <div className='radios'>
      <Option
        question={true}
        checked={Achecked}
        handleChecked={handleChecked}
        name='A'
        choice={answers.A}
        qnum={qnum}
      />
      <Option
        question={true}
        checked={Bchecked}
        handleChecked={handleChecked}
        name='B'
        choice={answers.B}
        qnum={qnum}
      />
      <Option
        question={true}
        checked={Cchecked}
        handleChecked={handleChecked}
        name='C'
        choice={answers.C}
        qnum={qnum}
      />
      <Option
        question={true}
        checked={Dchecked}
        handleChecked={handleChecked}
        name='D'
        choice={answers.D}
        qnum={qnum}
      />
    </div>
  );
};

export default Radios;
