import "./Product.scss";
import { Link } from "react-router-dom";

export default function Product(props) {
  const products = props.productDetails;
  // const productReviews = products.reviews;
  // console.log(props);
  // console.log(products);
  // console.log(productReviews);
  return (
    products && (
      <div className="product">
        <div className="product__imagecontainer">
          <img className="product__image" src={products.image} />
        </div>
        <div className="product__textcontainer">
          <div className="product__header">
            <p className="product__header-brand">{products.brandName}</p>
            <h3>{products.productName}</h3>
            <p>{products.price}</p>
          </div>
          <div className="product__details">
            <h2>about this product</h2>
            <table className="product__table">
              <tr className="proudct__table-container">
                <th className="product__table-type">category:</th>
                <th className="product__table-content">
                  {products.categoryType}
                </th>
              </tr>
              <tr>
                <th className="product__table-type">description:</th>
                <th className="product__table-content">
                  {products.description}
                </th>
              </tr>
              <tr>
                <th className="product__table-type">concerns:</th>
                <th className="product__table-content">{products.concerns}</th>
              </tr>
              <tr>
                <th className="product__table-type">skin type:</th>
                <th className="product__table-content">{products.skinType}</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  );
}
