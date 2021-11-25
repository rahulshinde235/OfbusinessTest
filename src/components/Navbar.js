import React from "react";
import "./Navbar.css";
import Caret from "../assets/arrow-down.png";
import Circle from "../assets/circle.png";
import Tick from "../assets/tick.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="nav">
        <div className="nav-left">
          <div>
            <img
              src={Circle}
              style={{ width: "15px", height: "15px" }}
              alt="circle"
            />
            <span>10,104 Closed</span>
          </div>
          <div>
            <img
              src={Tick}
              style={{ width: "15px", height: "15px" }}
              alt="tick"
            />
            <span>625 Open</span>
          </div>
        </div>
        <ul>
          <li>
            <a href="#">Author</a>
            <img src={Caret} alt="caretdown" className="caret" />
          </li>
          <li>
            <a href="#">Label</a>
            <img src={Caret} alt="caretdown" className="caret" />
          </li>
          <li>
            <a href="#">Assignee</a>
            <img src={Caret} alt="caretdown" className="caret" />
          </li>
          <li>
            <a href="#">Sort</a>
            <img src={Caret} alt="caretdown" className="caret" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
