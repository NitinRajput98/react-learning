import { Logo_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between border-2 shadow-lg m-1">
      <div className="w-21">
        <Link to="/">
          <img className="w-24 hover:scale-90" src={Logo_URL} />
        </Link>
      </div>
      <div className="m-4 self-center">
        <ul className="flex">
          <li className="m-4 hover:text-orange-600 text-xl font-medium">
            Online Status:{onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="m-4 hover:text-orange-600 text-xl font-medium">
            <Link to="/">Home</Link>
          </li>
          <li className="m-4 hover:text-orange-600 text-xl font-medium">
            <Link to="/about">About Us</Link>
          </li>
          <li className="m-4 hover:text-orange-600 text-xl font-medium">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="m-4 hover:text-orange-600 text-xl font-medium">
            Cart
          </li>
          <button
            className="m-4 hover:text-orange-600 text-xl font-medium"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}&rarr;
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
