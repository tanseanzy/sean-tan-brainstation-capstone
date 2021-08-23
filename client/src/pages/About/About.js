import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./About.scss";

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <p>hello!</p>

        <p>
          my name is sean, and "theskinlab" is a capstone project i built for
          the web development bootcamp i attended at brainstation!
        </p>

        <p>
          as a skincare enthusiast, i'm always on the hunt for new products to
          try!
        </p>
      </div>
    );
  }
}
