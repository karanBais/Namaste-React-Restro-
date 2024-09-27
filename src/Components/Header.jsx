import { LOGO_URL } from "../config/constants";
import { useState } from "react";

const Header = () => {
  const [clickBtn, setClickBtn] = useState("Login");

  return (
    <div className="header h-16 flex justify-between items-center px-4">
      <div className="logo-container">
        <img className="fixed top-0 left-0 mx-1 w-16 h-16" src={LOGO_URL} alt="Logo" />
      </div>

      <div className="nav-items flex space-x-4">
        <ul className="ul-items flex space-x-4">
          <li className="px-2">Home</li>
          <li className="px-2">About</li>
          <li className="px-2">Sign Up</li>
          <li className="px-2">Cart</li>
        </ul>

        <button
          className="px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => {
            setClickBtn((prevState) => (prevState === "Login" ? "Logout" : "Login"));
          }}
        >
          {clickBtn}
        </button>
      </div>
    </div>
  );
};

export default Header;
