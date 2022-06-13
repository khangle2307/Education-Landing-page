import React from "react";
import videoThumb from "./../images/Images.png";
import logo1 from "./../images/g6033.svg";
import logo2 from "./../images/Group.svg";
import logo3 from "./../images/Vector.svg";
import playIcon from "./../images/Polygon 2.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__video group">
          <img
            src={videoThumb}
            alt=""
            className="hero__video--thumb"
          />
          <a
            href=""
            className="hero__video--play"
          >
            <img
              src={playIcon}
              alt=""
              className="hero__video--icon"
            />
          </a>
        </div>
        <div className="hero__content">
          <h1 className="hero__content--title">
            Education is the biggest luxury
          </h1>
          <p className="hero__content--desc">
            Build new skills for that “this is my
            year” feeling with courses,
            certificates, and degrees from
            world-class universities and
            companies.
          </p>
          <div className="hero__content--button">
            <a
              href=""
              className="btn btn__primary"
            >
              See Courses
            </a>
            <a
              href=""
              className="btn btn__outline"
            >
              Learn More
            </a>
          </div>
          <div className="hero__content--brand">
            <p className="hero__brand--title">
              <span className="hero__brand--count">
                50,000+
              </span>
              student completed their course from
              Nurture
            </p>
            <p className="hero__brand--slash">
              /
            </p>
            <div className="hero__brand--logo">
              <img src={logo1} alt="" />
              <img src={logo2} alt="" />
              <img src={logo3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
