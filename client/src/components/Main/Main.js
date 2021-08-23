import "./Main.scss";
import { Link } from "react-router-dom";

export default function Main(props) {
  const products = props.products;
  return (
    <div className="main">
      {products.map((product, key) => {
        return (
          <li className="main__container" key={product._id}>
            <Link to={`/product/${product._id}`}>
              <div className="main__container-image">
                <img src={product.image} />
              </div>
              <div className="main__container-text">
                <p className="main__container-text-brand">
                  {product.brandName}
                </p>
                <p>{product.productName}</p>
                <p>{product.price}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </div>
  );
}
