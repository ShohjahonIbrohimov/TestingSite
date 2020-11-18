import React from "react";
import RoundPic from "../global/RoundPic";

const PrezidentWords = () => {
  return (
    <div className='container'>
      <div className='prezident-words'>
        <RoundPic
          borderColor='white'
          imgUrl='https://uzbekembassy.com.my/images/hgiuyvgfkiuyhvgfoluhbv.jpg'
          width={200}
        />
        <div className='prez-saying'>
          <i className='fas fa-quote-left fa-2x'></i>
          <p>
            Har bir inson har kuni qiladigan ishini xuddi birinchi marta
            qilayotgandek qilishi kerak. Shundagina ishda rivojlanish bo‘ladi.
          </p>
          <h3>SHAVKAT MIRZIYOYEV</h3>
          <i className='fas fa-quote-right fa-2x'></i>
        </div>
      </div>
    </div>
  );
};

export default PrezidentWords;
