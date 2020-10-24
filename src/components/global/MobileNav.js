import React from "react";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

const MobileNav = ({ handleMNav, navOn }) => {
  const handleClick = () => {
    handleMNav();
  };

  const navStyle = {
    transform: ` ${navOn ? "translateY(0)" : "translateY(-101%)"}`,
  };

  return (
    <div className='mobile-nav' style={navStyle}>
      <div className='close-mnav' onClick={handleClick}>
        <i className='fas fa-times'></i>
      </div>
      <ul>
        <li onClick={handleClick}>
          <Link to='/'>Bosh sahifa</Link>
        </li>
        <li onClick={handleClick}>
          <Link to='/subjects'>Fanlar</Link>
        </li>
        <li onClick={handleClick}>
          <Link to='/universities'>Oliy Ta'lim Muassasalari</Link>
        </li>
        <li onClick={handleClick}>
          <Link to='/teachers'>O'qituvchilar</Link>
        </li>
        <li onClick={handleClick}>
          <Link to='/contact'>Kontakt</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
