import React from "react";
import "./similar.scss";

import tel1 from "../../assets/images/blog/tel1.png";
import tel2 from "../../assets/images/blog/tel2.png";
import tel3 from "../../assets/images/blog/tel3.png";
import tel4 from "../../assets/images/blog/tel4.png";

const Similar = () => {
  return (
    <section className="container similar">
      <h2 className="similar__title">similar Product</h2>
      <div className="similar__cards">
        <div className="similar__card">
          <div className="similar__card__img">
            <img src={tel1} alt="" />
          </div>
          <div className="similar__card__info">
            <h4>iPhone 13 Pro - Transparent</h4>
            <p>LKR 499</p>
          </div>
        </div>
        <div className="similar__card">
          <div className="similar__card__img">
            <img src={tel2} alt="" />
          </div>
          <div className="similar__card__info">
            <h4>iPhone 13 Pro - Transparent</h4>
            <p>LKR 499</p>
          </div>
        </div>
        <div className="similar__card">
          <div className="similar__card__img">
            <img src={tel3} alt="" />
          </div>
          <div className="similar__card__info">
            <h4>iPhone 13 Pro - Transparent</h4>
            <p>LKR 499</p>
          </div>
        </div>
        <div className="similar__card">
          <div className="similar__card__img">
            <img src={tel4} alt="" />
          </div>
          <div className="similar__card__info">
            <h4>iPhone 13 Pro - Transparent</h4>
            <p>LKR 499</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Similar;
