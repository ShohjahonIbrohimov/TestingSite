import React from "react";

const ChooseSubBtn = ({
  text,
  bgClass,
  size,
  px,
  py,
  selectBtn,
  settestTime,
  testTime,
  name,
  selected,
  setSelected,
}) => {
  const style = {
    padding: `${px}rem ${py}rem`,
    fontSize: `${size}rem`,
  };

  const handleClick = () => {
    setSelected(name);
  };

  return (
    <button
      onClick={handleClick}
      style={style}
      className={`bordered-button ${bgClass}`}
    >
      <span> {text}</span>
      {selected && selectBtn ? <i className='far fa-check-circle'></i> : ""}
    </button>
  );
};

export default ChooseSubBtn;
