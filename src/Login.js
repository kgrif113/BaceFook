import React, { useState, useEffect } from "react";

const Login = () => {
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();

  async function loginHandler(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/login",
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

  return (
    <div id="login">
      <div>
        <form onSubmit={loginHandler}>
          <div>UserName</div>
          <input
            type="text"
            required
            value={username}
            onChange={changeUsername}
          ></input>
          <div>Password</div>
          <input
            type="text"
            required
            value={password}
            onChange={changePassword}
          ></input> 
            <button type="submit">submit</button>
          {/* <div>Don't have an account?<button>Register</button></div> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
