import React, { Component } from "react";
import axios from "axios";
import "./UserLogin.scss";
import { Link } from "react-router-dom";

export default class UserLogin extends Component {
  loginUser = (obj) => {
    axios
      .post("http://localhost:8080/api/users/login", obj)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const userDetails = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    this.loginUser(userDetails);
    alert("Succesfully logged in!");
  };

  render() {
    return (
      <div className="login">
        <h1> hello!</h1>
        <form className="login__form" onSubmit={this.handleSubmit}>
          <label className="login__form-label">e-mail</label>
          <div>
            <input className="login__form-input" type="email" name="email" />
          </div>
          <label className="login__form-label">password</label>
          <div>
            <input
              className="login__form-input"
              type="password"
              name="password"
            />
          </div>
          <button className="login__button" type="submit">
            submit
          </button>
          <Link to="/signup">
            <p className="login__signup">don't have an account? sign up!</p>
          </Link>
        </form>
      </div>
    );
  }
}
