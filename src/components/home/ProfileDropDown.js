import React, { useContext } from "react";
import { Menu, Dropdown, Button } from "antd";
import { Link } from "react-router-dom";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { AcessTokenContext } from "../../contexts/accessTokenContext";

const reload = () => {
  localStorage.removeItem("riseUpAccess");
  window.location.reload();
};

const ProfileDropDown = () => {
  const { avatar, userRole } = useContext(AcessTokenContext);

  const menu = (
    <Menu className='profile-drop'>
      {userRole === "educational" && (
        <Menu.Item>
          <Link to='/admin'>
            <div className='profile-drop-item'>
              <i class='fas fa-shield-alt'></i>
              <span>Admin</span>
            </div>
          </Link>
        </Menu.Item>
      )}
      <Menu.Item>
        <Link to='/settings'>
          <div className='profile-drop-item'>
            <i class='fas fa-user-cog'></i>
            <span>Sozlamalar</span>
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/results'>
          <div className='profile-drop-item'>
            <i class='fas fa-poll'></i>
            <span>Natijalar</span>
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link onClick={reload}>
          <div className='profile-drop-item'>
            <i class='fas fa-sign-out-alt'></i>
            <span>Chiqish</span>
          </div>
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Dropdown overlay={menu} placement='bottomRight' arrow>
        <div>
          {!avatar && <Avatar icon={<UserOutlined />} />}
          {avatar && <Avatar src={avatar} />}
        </div>
      </Dropdown>
    </div>
  );
};

export default ProfileDropDown;
