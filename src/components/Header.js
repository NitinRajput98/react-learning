import { Logo_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={Logo_URL} />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          <li className="link">
            <Link to="/about">About Us</Link>
          </li>
          <li className="link">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="link">Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
