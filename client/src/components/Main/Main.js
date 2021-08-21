import "./Main.scss";
import { Link } from "react-router-dom";

export default function Main(props) {
  const products = props.products;
  console.log(products);
  return (
    <div>
      <p>main div</p>
      {products.map((product, key) => {
        return (
          <li key={product._id}>
            <Link to={`/product/${product._id}`}>
              <img src={product.image} />
              <p>{product.brandName}</p>
              <p>{product.productName}</p>
              <p>{product.price}</p>
            </Link>
          </li>
        );
      })}
    </div>
  );
}
