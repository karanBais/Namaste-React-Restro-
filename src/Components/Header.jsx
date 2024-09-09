import { LOGO_URL } from "../config/constants";

const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src= {LOGO_URL}
          />
        </div>
  
        <div className="nav-items">
          <ul className="ul-items">
            <li>Home</li>
            <li>About</li>
            <li>Sign Up</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;