import React from "react";
import "video-react/dist/video-react.css";
import { Player } from "video-react";

const Video = () => {
  return (
    <div className='container'>
      <div className='video-wrapper'>
        <Player
          playsInline
          poster='https://storage.kun.uz/source/TRINUNA/KUN/54872136548972-4.jpg'
          src='#'
        >
          <img
            className='videoBg'
            src={require("../../assets/home/videoBg.png")}
            alt=''
          />
          <div className='aboutVideo'>
            <h2>EduCenter haqida</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
              eos aperiam delectus, ratione a adipisci, neque illo in harum
              incidunt quia pariatur sequi illum. Aliquam, exercitationem et?
              Consectetur, libero sit. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </div>
        </Player>
      </div>
    </div>
  );
};

export default Video;
