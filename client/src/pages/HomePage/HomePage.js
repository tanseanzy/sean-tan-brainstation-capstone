import React, { Component } from "react";
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
      .get("/api/users/products/")
      .then((response) => {
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
