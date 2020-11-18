import React, { useState } from "react";
import { Input } from "antd";

const { TextArea } = Input;

const TextAreaWrap = ({ placeholder, Isquestion, getQandAs }) => {
  const [value, setvalue] = useState("");
  const rowSize = Isquestion ? 10 : 3;

  const onChange = ({ target: { value } }) => {
    getQandAs(placeholder, value);
    setvalue(value);
  };

  return (
    <TextArea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoSize={{ minRows: rowSize, maxRows: 20 }}
    />
  );
};

export default TextAreaWrap;
