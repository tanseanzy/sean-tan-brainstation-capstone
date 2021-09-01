import React, { Component } from "react";
import axios from "axios";
import "./UserSignUp.scss";

export default class UserSignUp extends Component {
  userSignup = (obj) => {
    axios
      .post("/api/users/signup", obj)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert("Succesfully signed up!");

    const newUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    this.userSignup(newUser);
    console.log(newUser);
    window.location.href = "/login";
  };

  render() {
    return (
      <div className="signup">
        <h1>sign up!</h1>
        <form className="signup__form" onSubmit={this.handleSubmit}>
          <label className="signup__form-label">name</label>
          <div>
            <input
              className="signup__form-input"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <label className="signup__form-label">email</label>
          <div>
            <input
              className="signup__form-input"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <label className="signup__form-label">password</label>
          <div>
            <input
              className="signup__form-input"
              type="password"
              name="password"
              id="password"
            />
          </div>

          <button className="signup__button" type="submit">
            submit
          </button>
        </form>
      </div>
    );
  }
}
