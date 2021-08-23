import React, { Component } from "react";
import axios from "axios";
import "./UserLogin.scss";
import { Link } from "react-router-dom";

export default class UserLogin extends Component {
  state = {
    formData: null,
  };

  loginForm = (event) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/api/users/login", this.state.formData)
      .then((response) => {
        sessionStorage.setItem("token", response.data.userToken);
        // console.log(this.props);
        this.props.history.push("/");
      })
      .catch((event) => console.log(event.message));
  };

  render() {
    const token = sessionStorage.getItem("token");
    // console.log(token);
    return (
      <div className="login">
        <h1> welcome back!</h1>
        <form className="login__form" onSubmit={this.handleSubmit}>
          <label className="login__form-label">e-mail</label>
          <div>
            <input
              className="login__form-input"
              type="email"
              name="email"
              onChange={this.loginForm}
            />
          </div>
          <label className="login__form-label">password</label>
          <div>
            <input
              className="login__form-input"
              type="password"
              name="password"
              onChange={this.loginForm}
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
