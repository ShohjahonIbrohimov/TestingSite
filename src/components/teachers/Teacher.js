import React from "react";
import Button from "../global/Button";
import PageTitle from "../global/PageTitle";
import TestOfTeacher from "./TestOfTeacher";
import RoundPic from "../global/RoundPic";
import { Link } from "react-router-dom";

const Teacher = (teachers, routerProps, setteacherShow) => {
  let teacherID = parseInt(routerProps.match.params.id);
  console.log(teachers);

  let teacher = teachers.filter((teacher) => teacher.id === teacherID);

  const subNames = [
    { name: "Fizika", id: 1 },
    { name: "Matematika", id: 2 },
    { name: "Ona tili", id: 3 },
    { name: "Adabiyot", id: 4 },
    { name: "Ingliz tili", id: 5 },
    { name: "Rus tili", id: 6 },
  ];

  const handleClick = () => {
    setteacherShow(false);
  };

  const testsPhysics = [
    { date: "21.03.2020", variant: 3, num: 30, subName: "Fizika" },
    { date: "02.03.2020", variant: 2, num: 30, subName: "Fizika" },
    { date: "27.02.2020", variant: 1, num: 30, subName: "Fizika" },
  ];
  return (
    <div className='container'>
      <div className='teacher'>
        <div className='about-teacher-cont'>
          <div className='teacher-img'>
            <RoundPic borderColor='#fcb245' width={200} />
            <img src={require("../../assets/teachers/teacherBg.png")} alt='' />
          </div>
          <div className='about-teacher'>
            <span>O'qituvchi haqida</span>
            <h1>{teacher[0].fullname}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, voluptatibus ad ratione sit optio laudantium commodi
              exercitationem accusantium quibusdam eos.
            </p>
            <Link onClick={handleClick} to='/teachers'>
              <Button
                text="Barcha o'qituvchilar"
                size={0.9}
                arrowBack={true}
                bgClass='orange'
              />
            </Link>
          </div>
        </div>
        <div className='tests-of-teacher'>
          <header>
            <PageTitle title="O'qituvchi tomonidan tuzilgan testlar" />
          </header>
          <div className='tests-by-subject-buttons'>
            {subNames.map((sub) => (
              <Button text={sub.name} bgClass='darkBlueBtn' />
            ))}
          </div>
          <div className='tests-by-subject'>
            {testsPhysics.map((test) => (
              <TestOfTeacher
                date={test.date}
                variant={test.variant}
                num={test.num}
                subName={test.subName}
              />
            ))}
          </div>
          <div className='all-teachers'>
            <Link onClick={handleClick} to='/teachers'>
              <Button
                text="Barcha o'qituvchilar"
                arrowBack={true}
                bgClass='orange'
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
