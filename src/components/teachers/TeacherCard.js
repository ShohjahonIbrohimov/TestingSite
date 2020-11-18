import React from "react";
import Button from "../global/Button";
import RoundPic from "../global/RoundPic";
import { Link } from "react-router-dom";

const TeacherCard = ({ name, text, id, setteacherShow }) => {
  const handleClick = () => {
    setteacherShow(true);
  };

  return (
    <div className='teacher-card'>
      <RoundPic borderColor='orange' width={120} />
      <h2>{name}</h2>
      <p>{text}</p>
      <Link onClick={handleClick} to={`/teachers/${id}`}>
        <Button text='Batafsil' bgClass='orange' arrow={true} />
      </Link>
    </div>
  );
};

export default TeacherCard;
