import React, { useState, useEffect } from "react";
import Login from "./Login";
import NewUser from "./NewUser";

const Register = () => {
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();

  const [isTrue, setIsTrue] = useState (false) 

  async function registerHandler(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: {
              username: username,
              password: password,
            },
          }),
        }
      );
      const data = await response.json();
      localStorage.setItem("token", data.data.token);
      console.log(data.data.token);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const changeUsername = (event) => {
    setUsername(event.target.value);
  };
  const changePassword = (event) => {
    setPassword(event.target.value);
  };



  return (<div id="loginbox">
    <div id="loginstuff">
      <div>
      {isTrue == false ?  <NewUser /> : <Login />}
      <div>{isTrue == true ? 'Dont have an account?' : 'Have an account?'}</div>
      <button onClick={() => setIsTrue(!isTrue)}>{isTrue == true ? 'Register' : 'Login'}</button>
      </div>
    </div>
    </div>
  );
};

export default Register;
