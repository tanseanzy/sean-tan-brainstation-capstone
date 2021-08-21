import "./ProductPage.scss";
import { Link } from "react-router-dom";

export default function ProductPage(props) {
  const products = props.productDetails;
  // const productReviews = products.reviews;
  // console.log(props);
  // console.log(products);
  // console.log(productReviews);
  return (
    products && (
      <div>
        <p>main div test</p>
        <img src={products.image} />
        <p>{products.brandName}</p>
        <p>{products.productName}</p>
        <p>{products.price}</p>
        <p>{products.categoryType}</p>
        <p>{products.description}</p>
        <p>{products.concerns}</p>
        <p>{products.skinType}</p>
      </div>
    )
  );
}
