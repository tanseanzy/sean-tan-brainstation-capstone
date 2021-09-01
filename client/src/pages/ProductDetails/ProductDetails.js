import React, { Component } from "react";
import axios from "axios";
import "./ProductDetails.scss";
import Product from "../../components/Product/Product";
import NewReview from "../../components/NewReview/NewReview";

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

  postComment = (obj) => {
    axios
      .post(
        `http://localhost:8080/api/secure/products/${this.props.match.params.id}/reviews`,
        obj,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        this.props.history.push(`/product/${this.props.match.params.id}`);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const newComment = {
      content: event.target.content.value,
    };

    this.postComment(newComment);
    event.target.reset();
  };

  render() {
    console.log(sessionStorage.getItem("token"));
    const productReviews = this.state.productReviews;
    return (
      <div className="main">
        {this.state.productDetails && (
          <>
            <Product productDetails={this.state.productDetails} />
            <div className="main__reviews">
              <div>
                {sessionStorage.getItem("token") === null ? null : (
                  <form className="main__form" onSubmit={this.handleSubmit}>
                    <h3 className="main__form-title">leave a review!</h3>
                    <div>
                      <input
                        className="main__form-content"
                        name="content"
                        type="text"
                      />
                    </div>
                    <div className="main__buttoncontainer">
                      <button className="main__form-button" type="submit">
                        submit
                      </button>
                    </div>
                  </form>
                )}
              </div>
              <h2 className="main__title">reviews</h2>
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
