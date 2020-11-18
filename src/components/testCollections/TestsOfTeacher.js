import React, { useContext, useState } from "react";
import Button from "../global/Button";
import { QuestionsContext } from "../../contexts/QuestionsContext";
import { Redirect } from "react-router-dom";

const TestsOfTeacher = ({ creator, subject, createdAt, qnum, createID }) => {
  const { sortByCreateID } = useContext(QuestionsContext);
  const [redirect, setredirect] = useState(false);

  const handleClick = () => {
    setredirect(true);
    sortByCreateID(createID);
  };

  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to='/test' />;
    }
  };

  return (
    <div className='test-collections-test-box'>
      {renderRedirect()}
      <table>
        <tr>
          <th className='title'>Yaratuvchi ismi</th>
          <th className='title'>Fan</th>
          <th className='title'>Yaratilgan sana</th>
          <th className='title'> Savollar soni</th>
          <th className='title'> </th>
        </tr>
        <tr>
          <td>{creator}</td>
          <td>{subject}</td>
          <td>{createdAt}</td>
          <td>{qnum}</td>
          <td className='btn-wrapper'>
            {" "}
            <div onClick={handleClick}>
              <Button text='Testni boshlash' px={0.7} py={1.1} size={0.9} />
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default TestsOfTeacher;
