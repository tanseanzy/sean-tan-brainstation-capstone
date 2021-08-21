import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";
import "./ProductDetails.scss";
import ProductPage from "../../components/ProductPage/ProductPage";
import Reviews from "../../components/Reviews/Reviews";

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
        console.log(response.data);
        console.log(response.data.reviews);
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
    console.log(productReviews);
    return (
      <div>
        {this.state.productDetails && (
          <>
            <p>hi</p>
            <ProductPage productDetails={this.state.productDetails} />
            {/* <Reviews productDetails={this.state.productDetails} /> */}

            {productReviews.map((pR, key) => {
              return (
                <div>
                  <p>{pR.name}</p>
                  <p>{pR.content}</p>
                  <p>{pR.postedBy}</p>
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}
