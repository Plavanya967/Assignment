import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import '../App.css';
function BasicExample() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const navigate= useNavigate();
  function submitHandler(e) {
    e.preventDefault();

    function getSumOfDigits(num) {
      return String(num)
        .split("")
        .reduce((acc, curr) => {
          return acc + Number(curr);
        }, 0);
    }
    console.log(getSumOfDigits(password));
    if (getSumOfDigits(password) === 10 && email !== "") {
        navigate('/home')
    } else {
      alert("please enter correct username and password");
    }
  }
  function emailHandler(e) {
    setEmail(e.target.value);
  }
  function passwordHandler(e) {
    setPassword(e.target.value);
  }

   
  return (
    <div className="container">
      
    <form onSubmit={submitHandler} 
    className='loginform'
    >
      <h1>Login</h1>
      <input type="email"  onChange={emailHandler} placeholder="Email Address" />
      <br />
      <input
        type="password"
        onChange={passwordHandler}
        placeholder="password"
      />
      <br />
      <button type="submit" >submit</button>
    </form>
    </div>
  );
}

export default BasicExample;
