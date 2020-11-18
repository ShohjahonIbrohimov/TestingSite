import React from "react";
import RoundPic from "../global/RoundPic";
import teamMember from "../../assets/team member.jpg";

const TeamCarouselItem = ({ name, position }) => {
  return (
    <div className='team-carousel-item'>
      <RoundPic borderColor='orange' imgUrl={teamMember} width={80} />
      <span className='name'>{name}</span>
      <span className='position'>{position}</span>
      <div className='social-media-icons'>
        <div className='media-link-tg'>
          <i className='fab fa-telegram-plane'></i>
        </div>
        <div className='media-link-fc'>
          <i className='fab fa-facebook-f'></i>
        </div>
      </div>
    </div>
  );
};

export default TeamCarouselItem;
