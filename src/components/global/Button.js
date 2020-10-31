import React from "react";

const Button = ({ text, bgClass, arrow, arrowBack, size, px, py }) => {
  const style = {
    padding: `${px}rem ${py}rem`,
    fontSize: `${size}rem`,
  };

  return (
    <button style={style} className={`bordered-button ${bgClass}`}>
      {arrowBack && (
        <img
          className='arrowBack'
          src={require("../../assets/teachers/arrow.png")}
          alt=''
        />
      )}
      <span> {text}</span>
      {arrow && <img src={require("../../assets/teachers/arrow.png")} alt='' />}
    </button>
  );
};

export default Button;
