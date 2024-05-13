import React from "react";
import "./single.scss";
import tel from "../../assets/images/blog/tel.png";

const Single = () => {
  return (
    <section className="container">
      <div className="single">
        <h2 className="single__title">Shop Item</h2>
        <div className="single__wrap">
          <div className="single__wrap__img">
            <img src={tel} alt="" />
          </div>
          <div className="single__wrap__info">
            <h2 className="single__wrap__info__title">
              Samsung S21 Silicon Cover
            </h2>
            <p className="single__wrap__info__desc">
              Item 20 LKR 599 <br />
              Item 20 LKR 599 <br />
              Item 20 LKR 599 <br />
            </p>
            <p className="single__wrap__info__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Phasellus egestas tellus rutrum tellus pellentesque eu. Amet
              dictum sit amet justo donec enim diam vulputate ut. Malesuada
              fames ac turpis egestas maecenas. Dictum fusce ut placerat orci
              nulla pellentesque dignissim. Neque laoreet suspendisse interdum
              consectetur. Turpis massa sed elementum tempus egestas sed sed.{" "}
            </p>
            <p className="single__wrap__info__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Phasellus egestas tellus rutrum tellus pellentesque eu. Amet
              dictum sit amet justo donec enim diam vulputate ut. Malesuada
              fames ac turpis egestas maecenas. Dictum fusce ut placerat orci
              nulla pellentesque dignissim. Neque laoreet suspendisse interdum
              consectetur. Turpis massa sed elementum tempus egestas sed sed.{" "}
            </p>
            <div className="single__wrap__info__link">
              <a href="tel:072 706 6455">
                Contact us : 072 706 6455 | 071 789 9466
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Single;
