import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";
import "./HomePage.scss";
import Main from "../../components/Main/Main";
import Hero from "../../components/Hero/Hero";

export default class HomePage extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/api/users/products/")
      .then((response) => {
        console.log(response.data);
        this.setState({
          products: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <Hero />
        {this.state.products && (
          <>
            <Main products={this.state.products} />
          </>
        )}
      </div>
    );
  }
}
