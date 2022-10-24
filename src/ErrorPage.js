import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div class="bearcage">
      <p id="errormessage">404 - You have encountered a Bearror. Try again!</p>
      <Link to="/">
        <img id="bear404" src="panda404.png" />
      </Link>
    </div>
  );
};

export default ErrorPage;
