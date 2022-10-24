import React, { useState, useEffect } from "react";
import Login from "./Login";

const NewUser = () => {
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();

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

  return (
    // <div id="">
    //   <div id="loginstuff">
        <div>
          <form onSubmit={registerHandler}>
            <div>New UserName</div>
            <input
              type="text"
              required
              value={username}
              onChange={changeUsername}
            ></input>
            <div>New Password</div>
            <input
              type="text"
              required
              value={password}
              onChange={changePassword}
            ></input>
            <div></div>
            <button type="submit">submit</button>
          </form>
        </div>
    //   </div>
    // </div>
  );
};

export default NewUser;
