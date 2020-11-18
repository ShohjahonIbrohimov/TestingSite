import React, { useState } from "react";
import Button from "../global/Button";
import Input from "./Input";
import "antd/dist/antd.css";

const Registration = ({ teacher, student, center, getInputs }) => {
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleFirstname = (e) => {
    setFirstName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    getInputs(firstName, email, password);
  };

  return (
    <form onSubmit={handleClick}>
      <Input name='Ism' handler={handleFirstname} type='text' />
      <Input name='Familiyangiz' type='text' />

      <Input name='Password' handler={handlePassword} type='password' />
      <Input name='Email' handler={handleEmail} type='email' />

      <label htmlFor='date'>
        <span> Tug'ilgan yilingizni kiriting</span>
        <span className='required-sym'>*</span>
        <div className='date-wrapper'>
          <input type='number' placeholder='Yil' required />
          <input type='number' placeholder='Oy' required />
          <input type='number' placeholder='Kun' required />
        </div>
      </label>
      {teacher && <Input name='Mutaxasisligingiz(fan)' />}
      {center && (
        <div>
          <Input name='Markaz nomi' type='text' />
          <Input name='Manzil (vil, t)' type='text' />
        </div>
      )}
      <Button text="Ro'yxatdan o'tish" bgClass='darkBlueBtn' />
    </form>
  );
};

export default Registration;
