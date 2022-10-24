import React, { useState, useEffect } from "react";

const Profile = () => {
  const [info, useInfo] = useState();

  useEffect(() => {
    async function postHandler(event) {
      try {
        const response = await fetch(
          "https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/me",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const transData = await response.json();
        useInfo(transData.data);
      } catch (error) {
        console.log(error);
      }
    }
    postHandler();
  }, []);

  return (
    <div>
      <div id="mybuyshit">
        <p>My posts</p>
      </div>
      <div id="mypostsbox">
        {console.log(info)}
        {info && info.posts.length
          ? info.posts.map((event) => {
              return (
                <div id="itemsbox">
                  <div>
                    {event.title} {event.description} {event.location}
                  </div>
                </div>
              );
            })
          : null}
      </div>

      <div id="mybuyshit">
        <p>My messages</p>
      </div>
      <div id="mypostsbox">
        {console.log(info)}
        {info && info.messages.length
          ? info.messages.map((event) => {
              return (
                <div id="itemsbox">
                  <div>"{event.content}"</div>
                  <div>From: {event.fromUser.username}</div>
                  {console.log(event)}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Profile;
