import React from "react";
import TeamCarouselItem from "./TeamCarouselItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurTeamCarousel = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "-600px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
  };

  const teamMembers = [
    { id: 1, fullname: "Brad Traversy", position: "Full stack developer" },
    { id: 2, fullname: "Net Ninja", position: "Back End developer" },
    { id: 3, fullname: "Steve Jobs", position: "CEO" },
    { id: 4, fullname: "Mark Zuckerberg", position: "Maneger" },
    { id: 5, fullname: "Bill Gates", position: "Head of IT Department" },
    { id: 6, fullname: "Shohjahon Ibrohimov", position: "Front End developer" },
    { id: 1, fullname: "Brad Traversy", position: "Full stack developer" },
    { id: 2, fullname: "Net Ninja", position: "Back End developer" },
    { id: 3, fullname: "Steve Jobs", position: "CEO" },
    { id: 4, fullname: "Mark Zuckerberg", position: "Maneger" },
    { id: 5, fullname: "Bill Gates", position: "Head of IT Department" },
    { id: 6, fullname: "Shohjahon Ibrohimov", position: "Front End developer" },
    { id: 1, fullname: "Brad Traversy", position: "Full stack developer" },
    { id: 2, fullname: "Net Ninja", position: "Back End developer" },
    { id: 3, fullname: "Steve Jobs", position: "CEO" },
    { id: 4, fullname: "Mark Zuckerberg", position: "Maneger" },
  ];

  return (
    <div className='our-team-carousel'>
      <Slider {...settings}>
        {teamMembers.map((member) => {
          return (
            <TeamCarouselItem
              name={member.fullname}
              position={member.position}
            />
          );
        })}
      </Slider>
      <img src={require("../../assets/contact/teamCarouselBg.png")} alt='' />
    </div>
  );
};

export default OurTeamCarousel;
