import React, { useContext, useState } from "react";
import Button from "../components/global/Button";
import Setting from "../components/usesettings/Setting";
import Avatar from "../components/usesettings/Avatar";
import { AcessTokenContext } from "../contexts/accessTokenContext";
import Update from "../components/usesettings/Update";

const Registration = () => {
  const { userInfo } = useContext(AcessTokenContext);
  const [update, setupdate] = useState(false);
  const [updatePassword, setupdatePassword] = useState(false);

  const handleClick = (updatePassword) => {
    setupdate(true);
    setupdatePassword(updatePassword);
  };

  return (
    <div className='user-settings'>
      <div className='register-page'>
        <div className='regbg'></div>
        <div className='container'>
          {!update && (
            <div className='registration'>
              <Avatar />
              <div className='setting1'>
                <Setting
                  iconName='websiteUsage'
                  title='93%'
                  text='Saytdan foydalanish koefitsenti'
                  color=' #868686'
                />
                <Setting
                  iconName='topboard'
                  text="Topboard a'zosi"
                  color=' #868686'
                />
                <Setting
                  iconName='correctAns'
                  title='93'
                  text="To'g'ri javoblar koefitsenti"
                  color=' #868686'
                />
              </div>
              <div className='username'>
                <h1>{`${userInfo.name} ${userInfo.surname}`}</h1>
                <p>Namangan Viloyati, Chortoq tumani, 20 yosh</p>
                <div onClick={() => handleClick(false)}>
                  <Button
                    text="Ma'lumotlarni tahrirlash"
                    bgClass='redBrown'
                    py={1.5}
                    px={0.5}
                  />
                </div>
                <span
                  onClick={() => handleClick(true)}
                  className='chage-password'
                >
                  Parolni o'zgartirish
                </span>
              </div>
              <div className='setting2'>
                <Setting
                  iconName='gradSchool'
                  title='Bitirgan Maktabi'
                  text="Chortoq tuman 13-sonli umumiy o'rta ta'lim maktabi"
                  color=' #f0a04a'
                />
                <Setting
                  iconName='eduCenter'
                  title="O'quv Markaz"
                  text="Namangan viloyati 'ZIYOKOR'"
                  color=' #f0a04a'
                />
                <Setting
                  iconName='teacherOfSt'
                  title="O'qituvchisi"
                  text='Rizayev Yusufjon'
                  color=' #f0a04a'
                />
              </div>
              <div className='about-user'>
                <h3>Foydalanuvchi haqida</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia quis veritatis temporibus dicta. Provident rerum culpa
                  inventore quo quaerat aliqu Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Aspernatur nam exercitationem
                  iste quam quae corporis tempora illo minima ullam provident!
                </p>
              </div>
              <div className='balance'>
                <img
                  src={require("../assets/userSettings/balance.png")}
                  alt=''
                />
                <div className='amount-in-balance'>
                  <p>Balansingiz</p>
                  <span className='money'>15000</span>
                  <span className='currency'>so'm</span>
                </div>
                <Button
                  text="Balansni to'ldirish"
                  bgClass='greenBtn'
                  py={1.5}
                  px={0.5}
                />
              </div>
            </div>
          )}

          {update && (
            <div className='registration'>
              <Update setupdate={setupdate} updatePassword={updatePassword} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Registration;
