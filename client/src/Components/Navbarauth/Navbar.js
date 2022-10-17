import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Inkprog-logo.png";
import "./Navbar.css";
import { useLogout } from "../../Hooks/userLogout";
import { useAuthContext } from "../../Hooks/EmployeeAuthContext";

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  

  const handleClick = () => {
    logout();
  };
  return (
    <nav>
      <Link to="/">
        <img src={logo} />
      </Link>
      <div>
      <h1>EMPLOYEE RECRUITMENT SOFTAWRE</h1>
      {/* <button onClick={handleClick}>log out</button> */}

      </div>

     
      {user && (
        <div>
          <span>{user.email}</span>
          <button onClick={handleClick}>log out</button>
        </div>
      )}
      {!user && (
        <div className="auth">
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
