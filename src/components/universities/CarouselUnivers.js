import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/univers/CarouselUnivers.css";
// images
import univer1 from "../../assets/univers/univer1.jpg";
import univer2 from "../../assets/univers/univer2.jpg";
// import univer3 from "../../assets/univers/univer3.jpg";
import { Link } from "react-router-dom";

const CarouselUnivers = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const univerImgs = [univer1, univer2, univer1, univer2];
  return (
    <div className='container'>
      <Slider {...settings}>
        {univerImgs.map((img) => {
          return (
            <div key={Math.random()} className='carousel-item-wrapper'>
              <div
                className='univer-carousel-item'
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className='carousel-showcase'>
                  <div className='active-item-text'>
                    <p>
                      {" "}
                      <span>Maskva Davlat Universiteti</span>ga bu yilgi qabul
                      rejasi qanday?
                    </p>
                  </div>
                  <Link to='/batafsil'>
                    <button className='batafsil'>Batafsil o'qing</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CarouselUnivers;
