import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <br />
      <br />
      <Link to={"/about"}>
        <button>About Us</button>
      </Link>
    </>
  );
};

export default NavBar;
