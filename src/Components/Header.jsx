import { LOGO_URL } from "../config/constants";
import { useState } from "react";

const Header = () => {
  const [clickBtn, setClickBtn] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul className="ul-items">
          <li>Home</li>
          <li>About</li>
          <li>Sign Up</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              setClickBtn((prevState) => (prevState === "Login" ? "Logout" : "Login"))
            }}
          
          >
            {clickBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
