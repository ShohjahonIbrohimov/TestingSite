import React from "react";
import Button from "../global/Button";
import RoundPic from "../global/RoundPic";
import { Link } from "react-router-dom";

const CenterCard = ({ name, text, id }) => {
  return (
    <div className='teacher-card'>
      <RoundPic borderColor='orange' />
      <div className='center-info'>
        <h2>
          {name} o'quv markazi <i className='far fa-star'></i>{" "}
          <i className='far fa-star'></i>
          <i className='far fa-star'></i>{" "}
        </h2>
        <p>{text}</p>
        <br />
        <p>{text}</p>
        <Link to={`/centers/${id}`}>
          <Button
            text='Batafsil'
            bgClass='orange'
            arrow={true}
            px={0.5}
            py={2}
          />
        </Link>
      </div>
    </div>
  );
};

export default CenterCard;
