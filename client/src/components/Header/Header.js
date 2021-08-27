import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  // logout the user
  let handleLogout = () => {
    sessionStorage.clear();
  };

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

        {sessionStorage.getItem("token") === null ? (
          <Link to="/login">
            <p className="header__links-text">LOGIN</p>
          </Link>
        ) : (
          <Link to="/logout" onClick={handleLogout}>
            <p className="header__links-text">LOGOUT</p>
          </Link>
        )}
      </div>
    </div>
  );
}
