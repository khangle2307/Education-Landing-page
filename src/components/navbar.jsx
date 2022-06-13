import React from "react";

const Navbar = () => {
  return (
    <div className="header__navbar">
      <div className="container">
        <a
          href=""
          className="header__navbar--logo"
        >
          Nur<span>ture.</span>
        </a>
        <nav className="header__navbar--menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
          </ul>
        </nav>
        <a href="#" className="btn btn__primary">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Navbar;
