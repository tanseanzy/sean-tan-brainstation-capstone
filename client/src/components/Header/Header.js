import "./Header.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo.png";

export default function Header() {
  return (
    <div className="header">
      <Link to="/" exact>
        <h1 className="header__logo">theskinlab</h1>
      </Link>
      <div className="header__links">
        <Link to="/" exact>
          <p className="header__links-text">HOME</p>
        </Link>
        <Link to="/about">
          <p className="header__links-text">ABOUT</p>
        </Link>
        <Link to="/login">
          <p className="header__links-text">LOGIN</p>
        </Link>
      </div>
    </div>
  );
}
