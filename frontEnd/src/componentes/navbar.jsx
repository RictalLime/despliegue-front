import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { faStore, faUser } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">
          <FontAwesomeIcon icon={faStore} size="27" />
        </Link>
        <Link to="/usuario">
          <FontAwesomeIcon icon={faUser} size="27" />
        </Link>
        <Link to="/carta">
          <ShoppingCart size="27" />
        </Link>
      </div>
    </div>
  );
};
