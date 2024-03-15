import { Logo_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

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
            <Link to="/cart"> Cart - {cartItems.length}</Link>
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
          <li className="m-4 hover:text-orange-600 text-xl font-medium">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
