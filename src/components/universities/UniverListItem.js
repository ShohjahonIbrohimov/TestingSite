import React from "react";
import tatu from "../../assets/univers/tatu.jpg";
import tdyu from "../../assets/univers/tdyu.jpg";
import tdpu from "../../assets/univers/tdpu.jpg";
import tdau from "../../assets/univers/tdau.jpg";
import tdtu from "../../assets/univers/tdtu.jpg";

import { Link } from "react-router-dom";

const UniverListItem = ({ univerName, acronym }) => {
  let url;
  switch (acronym) {
    case "tatu":
      url = tatu;
      break;
    case "tdyu":
      url = tdyu;
      break;
    case "tdpu":
      url = tdpu;
      break;
    case "tdau":
      url = tdau;
      break;
    default:
      url = tdtu;
      break;
  }
  const bgStyle = {
    backgroundImage: `url(${url})`,
  };

  return (
    <Link
      to={`universities/${acronym}`}
      className='univer-list-item'
      style={bgStyle}
    >
      <div className='showcase-text'>
        <span className='univerName'>{univerName}</span>
      </div>
    </Link>
  );
};

export default UniverListItem;
