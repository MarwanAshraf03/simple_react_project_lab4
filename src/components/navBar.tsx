import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  // Inline styles for a quick, professional look
  const navStyle: React.CSSProperties = {
    display: "flex",
    gap: "20px",
    padding: "15px 30px",
    backgroundColor: "#282c34",
    alignItems: "center",
    borderRadius: "8px",
    marginBottom: "20px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  };

  const linkStyle = ({ isActive }: { isActive: boolean }) => ({
    textDecoration: "none",
    color: isActive ? "#61dafb" : "#ffffff", // Blue if active, white if not
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.3s",
  });

  return (
    <nav style={navStyle}>
      <div
        style={{
          color: "#61dafb",
          fontSize: "24px",
          fontWeight: "bold",
          marginRight: "auto",
        }}
      >
        The Movie App
      </div>

      <NavLink to="/" style={linkStyle}>
        Home
      </NavLink>

      <NavLink to="/about" style={linkStyle}>
        About Us
      </NavLink>
    </nav>
  );
};

export default NavBar;
