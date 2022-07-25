import React, { useState } from "react";
import LoginForm from "../Components/Login/LoginForm";

function LoginController() {
  const [userDetails, setUserDetails] = useState({
    userName: '',
    userPassword: '',
    
  });
  const [usersList, setUsersList] = useState([]);
  const [newName, setNewName] = useState([]);
  const [getEmail, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  const submitHandler = (e) => {

    e.preventDefault();
    
    setUsersList([...usersList, userDetails]);

    setUserDetails({
      userName: '',
      userPassword: '',      
    })
    setEmail('');
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    if(usersList.length){
      usersList.map((item, index)=>{
        if(value !== item.userName){
          setUserDetails({
            ...userDetails,
            [name]: value,
          });
          setIsValid(false)
        }else{
          setIsValid(true)
        }
        
      })
    }else{
      setUserDetails({
        ...userDetails,
        [name]: value,
      });
    }
  };

  return (
    <div className="login-wrapper">
      <LoginForm click={submitHandler} changeHandler={changeHandler} name={userDetails.userName} pass={userDetails.userPassword} authenticateUser = {isValid}/>
      {usersList.map((item, index) => {
        return <li key={index}>{item.userName}</li>;
      })}
    </div>
  );
}

export default LoginController;
