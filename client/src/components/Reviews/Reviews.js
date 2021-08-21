import "./Reviews.scss";
import { Link } from "react-router-dom";

export default function Reviews(props) {
  const products = props.productDetails;
  const productReviews = products.reviews;
  console.log(props);
  console.log(products);
  console.log(productReviews);
  return (
    <div>
      {/* {productReviews.map((pR, key) => {
        return (
          <div>
            <p>handleSubmit</p>
          </div>
        );
      })} */}
    </div>
  );
}
