import React from "react";

const TopboardCrown = ({ place }) => {
  return (
    <div className='topboard-crown'>
      <img
        className='crown'
        src={require(`../../assets/home/top${place}Crown.png`)}
        alt=''
      />
    </div>
  );
};

export default TopboardCrown;
