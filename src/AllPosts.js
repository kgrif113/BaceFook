import React, { useState, useEffect } from "react";

const AllPosts = () => {
  const [info, useInfo] = useState();

  useEffect(() => {
    async function postHandler(event) {
      try {
        const response = await fetch(
          "https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts"
        );
        const transData = await response.json();
        useInfo(transData.data.posts);
      } catch (error) {
        console.log(error);
      }
    }
    postHandler();
  }, []);

  return (
    <div >
      <div id="buyshit">
        <p> Buy some stuff below </p>
      </div>
      <div id="postsbox">
      {info && info.length
        ? info.map((event) => {
            return (
              // <div id="postsbox">
              <div id="itemsbox">
                <div>
                  {event.title} {event.description} {event.location}
                </div>
                {console.log(event)}
              </div>
              // </div>
            );
          })
        : null}
        </div>
    </div>
  );
};

export default AllPosts;
