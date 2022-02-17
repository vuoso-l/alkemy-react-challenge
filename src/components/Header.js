import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul>
        <Link to={"/"}>Homepage</Link>
        <Link to={"/login"}>Login</Link>
      </ul>
    </div>
  );
};

export default Header;
