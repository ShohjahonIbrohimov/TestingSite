import React from "react";
import UniverListItem from "./UniverListItem";
import { motion } from "framer-motion";

const UniversityInfo = () => {
  return (
    <div className='container'>
      <div className='univerinfo-header'>
        <UniverListItem
          univerName='TOSHKENT AXBOROT TEXTNOLOGIYALARI UNIVERSITETI'
          acronym='tatu'
        />
        <div className='brief-about-univer'>
          <h4 className='univer-name'>
            TOSHKENT AXBOROT TEXNOLOGIYALARI UNIVERSITETI
          </h4>
          <p className='univer-desc'>
            Respublika miqyosida Axborot Texnologiyalari bilan bog’liq malakali
            kadrlar tayorlashda eng nufuzli universitetlardan biri hisoblanadi
          </p>
          <p className='univer-website'>
            Web-sayt manzili:
            <a
              className='url'
              target='_blank'
              rel='noopener'
              href='https://tuit.uz/ru'
            >
              {" "}
              https://tuit.uz/ru
            </a>
          </p>
        </div>
      </div>
      <div className='univr-fields'>
        <h1>TA'LIM YO'NALISHLARI</h1>
        <div className='bachelors'>
          <h4>Bakalavriat</h4>
          <ul>
            <li>
              Computer Engineering ("Computer Engineering", "IT-Service",
              "Multimedia Technologies");
            </li>
            <li>Software Engineering;</li>
            <li>Information Security;</li>
            <li>
              Telecommunication Technologies ("Telecommunication",
              "Teleradiobroadcasting", "Mobile Systems")
            </li>
            <li>
              Television Technologies ("Audiovisual Technologies", "TV Studio
              Systems and Applications")
            </li>
          </ul>
        </div>
        <div className='masters'>
          <h4>Magistratura</h4>
          <ul>
            <li>
              Computer Engineering ("Computer Systems Design", "Practical
              Software Design", "Information and Multimedia Technologies",
              "Information Security,{" "}
            </li>
            <li>Software Engineering;</li>
            <li>
              Telecommunication Engineering ("information Transmission Systems",
              "Telecommunication Networks", "Teleradiobroadcasting");
            </li>
            <li>Informatization and Library Studies;</li>
            <li>Economics and Management in the field of ICT;</li>
          </ul>
        </div>
        <h1>2019-2020 o'quv yili uchun o'tish ballari</h1>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='download-btn'
          className='noselect download-btn'
        >
          <img
            className='noselect'
            src={require("../../assets/univers/PDF icon.png")}
            alt=''
          />
          <p className='noselect'>Yuklab olish</p>
        </motion.div>
      </div>
    </div>
  );
};

export default UniversityInfo;
