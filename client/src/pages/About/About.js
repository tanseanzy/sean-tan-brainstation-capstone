import React, { Component } from "react";
import "./About.scss";

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="about__textcontainer">
          <p>hello! welcome to theskinlab!</p>

          <p>
            my name is sean, and theskinlab is a capstone project i built for
            the web development bootcamp i attended at brainstation!
          </p>

          <p>
            as a skincare enthusiast, i'm always on the hunt for new products to
            try! theskinlab is meant to serve as a platform for those new to
            skincare to build their own skincare regimen with the use of
            different skincare categories, and by both browsing and adding
            reviews a specific product!
          </p>
        </div>
      </div>
    );
  }
}
