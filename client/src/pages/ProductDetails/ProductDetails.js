import React, { Component } from "react";
import axios from "axios";
import "./ProductDetails.scss";
import Product from "../../components/Product/Product";

export default class ProductDetails extends Component {
  state = {
    productDetails: [],
    productReviews: [],
  };

  componentDidMount() {
    axios
      .get(
        `http://localhost:8080/api/users/products/${this.props.match.params.id}`
      )
      .then((response) => {
        this.setState({
          productDetails: response.data,
          productReviews: response.data.reviews,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const productReviews = this.state.productReviews;
    return (
      <div className="main">
        {this.state.productDetails && (
          <>
            <Product productDetails={this.state.productDetails} />
            {/* <Reviews productDetails={this.state.productDetails} /> */}
            <div className="main__reviews">
              <h2>reviews</h2>
              {productReviews.map((pR, key) => {
                return (
                  <div className="main__reviews-container" key={pR.id}>
                    <p className="main__reviews-name">{pR.name}</p>
                    <p className="main__reviews-text">{pR.content}</p>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    );
  }
}
