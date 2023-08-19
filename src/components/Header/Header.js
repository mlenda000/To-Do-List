import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  return (
    <div>
      <h1 className="heading">
        Get those tasks off your list {props.userName}
      </h1>
    </div>
  );
}

export default Header;
