import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
      <li>
          <Link to="/">LoginPage</Link>
        </li>
      
        <li>
          <Link to="/">Feedback Form</Link>
        </li>
        <li>
          <Link to="/feedback-list">Feedback List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
