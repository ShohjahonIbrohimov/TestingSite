import React from "react";
import StStats from "./StStats";
import StudentInfo from "./StudentInfo";
import TopboardCrown from "./TopboardCrown";
import student1 from "../../assets/home/student1.jpg";
import student2 from "../../assets/home/student2.jpg";
import student3 from "../../assets/home/student3.jpg";
import student4 from "../../assets/home/student4.jpg";
import student5 from "../../assets/home/student5.jpg";

const TopboardStduent = ({
  stImgUrl,
  stName,
  stAdress,
  stResult1,
  stResult2,
  stPlace,
}) => {
  const stImage = {
    backgroundImage: `url(${
      stImgUrl === "student1"
        ? student1
        : stImgUrl === "student2"
        ? student2
        : stImgUrl === "student3"
        ? student3
        : stImgUrl === "student4"
        ? student4
        : student5
    })`,
  };

  return (
    <div className='topboard-content'>
      <div className='topboard-content-header'>
        <div className='student-image' style={stImage}></div>
        <TopboardCrown place={stPlace} />
      </div>
      <StudentInfo stName={stName} stAdress={stAdress} />
      <div className='student-test-results'>
        <StStats stResult={stResult1} statDesc='URINISHLAR KOEFFITSENTI' />
        <StStats
          stResult={stResult2}
          statDesc="TO'G'RI JAVOBLAR KOEFFITSENTI"
        />
      </div>
    </div>
  );
};

export default TopboardStduent;
