import "./NewReview.scss";

export default function NewReview(props) {
  const products = props.productDetails;
  // const productReviews = products.reviews;
  // console.log(props);
  // console.log(products);
  // console.log(productReviews);
  return (
    <div className="main__reviews">
      <div>
        <form className="main__form">
          <h3 className="main__form-title">leave a review!</h3>
          <label className="main__form-label">name</label>
          <div>
            <input className="main__form-name" type="name" type="text" />
          </div>
          <label className="main__form-label">content</label>
          <div>
            <input className="main__form-content" type="content" type="text" />
          </div>
          <div className="main__buttoncontainer">
            <button className="main__form-button" type="submit">
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
