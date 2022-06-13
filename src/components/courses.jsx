import React from "react";
import courseImg from "../images/Rectangle 52-1.png";
import ratingYellowIcon from "../images/Star 6.svg";
import ratingGrayIcon from "../images/Star 10.svg";
import enrollIcon from "../images/Vector 21.svg";
import nextIcon from "../images/Vector 23.svg";
import prevIcon from "../images/Vector 22.svg";

const Courses = () => {
  return (
    <div className="course">
      <div className="container">
        <div className="course__header">
          <h2 className="course__header--title">
            Explore most popular design courses
          </h2>
          <p className="course__header--desc">
            Build new skills with new trendy
            courses and shine for the next future
            career.
          </p>
          <div className="course__header--button">
            <button className="arrow__button course__button--prev">
              <img src={prevIcon} alt="" />
            </button>
            <button className="arrow__button course__button--next">
              <img src={nextIcon} alt="" />
            </button>
          </div>
        </div>
        <div className="course__list">
          <div className="course__item">
            <img src={courseImg} alt="" />
            <div className="course__item--body">
              <h3 className="course__item--title">
                Basic web design
              </h3>
              <p className="course__item--desc">
                Buy our web design course and get
                started to move forward.
              </p>
              <div className="course__item--rating">
                <div className="course__rating--icon">
                  <img
                    src={ratingYellowIcon}
                    alt=""
                  />
                  <img
                    src={ratingYellowIcon}
                    alt=""
                  />
                  <img
                    src={ratingYellowIcon}
                    alt=""
                  />
                  <img
                    src={ratingYellowIcon}
                    alt=""
                  />
                  <img
                    src={ratingGrayIcon}
                    alt=""
                  />
                </div>
                <p className="course__rating--quatity">
                  4
                </p>
                <p className="course__rating--quantity">
                  (320)
                </p>
              </div>
              <div className="course__item--enroll">
                <a className="course__enroll--name">
                  Enroll
                </a>
                <img
                  src={enrollIcon}
                  alt=""
                  className="course__enroll--icon"
                />
              </div>
            </div>
          </div>
          <div className="course__item">
            <img src={courseImg} alt="" />
            <div className="course__item--body">
              <h3 className="course__item--title">
                Basic web design
              </h3>
              <p className="course__item--desc">
                Buy our web design course and get
                started to move forward.
              </p>
              <div className="course__item--rating">
                <div className="course__rating--icon">
                  <img
                    src={ratingYellowIcon}
                    alt=""
                  />
                  <img
                    src={ratingYellowIcon}
                    alt=""
                  />
                  <img
                    src={ratingYellowIcon}
                    alt=""
                  />
                  <img
                    src={ratingYellowIcon}
                    alt=""
                  />
                  <img
                    src={ratingGrayIcon}
                    alt=""
                  />
                </div>
                <p className="course__rating--quatity">
                  4
                </p>
                <p className="course__rating--quantity">
                  (320)
                </p>
              </div>
              <div className="course__item--enroll">
                <a className="course__enroll--name">
                  Enroll
                </a>
                <img
                  src={enrollIcon}
                  alt=""
                  className="course__enroll--icon"
                />
              </div>
            </div>
          </div>
          <div className="course__item">
            <img src={courseImg} alt="" />
            <div className="course__item--body">
              <h3 className="course__item--title">
                Basic web design
              </h3>
              <p className="course__item--desc">
                Buy our web design course and get
                started to move forward.
              </p>
              <div className="course__item--rating">
                <div className="course__rating--icon">
                  <img
                    src={ratingYellowIcon}
                    alt=""
                  />
                  <img
                    src={ratingYellowIcon}
                    alt=""
                  />
                  <img
                    src={ratingYellowIcon}
                    alt=""
                  />
                  <img
                    src={ratingYellowIcon}
                    alt=""
                  />
                  <img
                    src={ratingGrayIcon}
                    alt=""
                  />
                </div>
                <p className="course__rating--quatity">
                  4
                </p>
                <p className="course__rating--quantity">
                  (320)
                </p>
              </div>
              <div className="course__item--enroll">
                <a className="course__enroll--name">
                  Enroll
                </a>
                <img
                  src={enrollIcon}
                  alt=""
                  className="course__enroll--icon"
                />
              </div>
            </div>
          </div>
          <div className="course__item">
            <img src={courseImg} alt="" />
            <div className="course__item--body">
              <h3 className="course__item--title">
                Basic web design
              </h3>
              <p className="course__item--desc">
                Buy our web design course and get
                started to move forward.
              </p>
              <div className="course__item--rating">
                <div className="course__rating--icon">
                  <img
                    src={ratingYellowIcon}
                    alt=""
                  />
                  <img
                    src={ratingYellowIcon}
                    alt=""
                  />
                  <img
                    src={ratingYellowIcon}
                    alt=""
                  />
                  <img
                    src={ratingYellowIcon}
                    alt=""
                  />
                  <img
                    src={ratingGrayIcon}
                    alt=""
                  />
                </div>
                <p className="course__rating--quatity">
                  4
                </p>
                <p className="course__rating--quantity">
                  (320)
                </p>
              </div>
              <div className="course__item--enroll">
                <a className="course__enroll--name">
                  Enroll
                </a>
                <img
                  src={enrollIcon}
                  alt=""
                  className="course__enroll--icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
