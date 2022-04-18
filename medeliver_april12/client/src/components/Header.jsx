import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div>
      <header>
        <h1>
          <span>
            <sup>&#128138;</sup>MEDELIVER<sub>&#128690;</sub>
          </span>
        </h1>
        <h3>The first-ever medication delivery within 24H in Montréal</h3>

        {/* <ul>
          <li>
            <a>A</a>
          </li>
          <li>
            <a>b</a>
          </li>
          <li>
            <a>C</a>
          </li>
        </ul> */}
      </header>
      <Navbar />
    </div>
  );
}

export default Header;
