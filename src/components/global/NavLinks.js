import React, { useContext } from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ userRole, registered }) => {
  return (
    <>
      <div className='desktop-nav nav-links'>
        <ul>
          <li>
            <Link to='/'>Bosh sahifa</Link>
          </li>
          <li>
            <Link to='/subjects'>Fanlar</Link>
          </li>
          <li>
            <Link to='/universities'>Universitetlar</Link>
          </li>
          {registered && (
            <li>
              <Link to='/teachers'>O'qituvchilar</Link>
            </li>
          )}
          <li>
            <Link to='/contact'>Kontakt</Link>
          </li>
          <li>
            <Link to='/centers'>O'quv markazlari</Link>
          </li>
          {userRole === "admin" && (
            <li>
              <Link to='/admin'>Admin</Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default NavLinks;
