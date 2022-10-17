



import React, { useState } from "react";
import "./Employeelogin.css"
import { Link } from "react-router-dom"
import { Login } from "../../Hooks/userLogin";
import logo from "../../assets/Inkprog-logo.png";


const Employeelogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error } = Login();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
    setEmail("");
    setPassword("");
  };


  return (
    <div className="root" >
      <div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div>
          <h1>EMPLOYEE RECRUITMENT SOFTWARE</h1>

        </div>
        <div className="auth">
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
        </div>

      </div>

      <form onSubmit={handleSubmit}>
        {/* <h1>Login</h1> */}
        <div >
          <label >Email :</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div>
          <label >Password :</label>
          <input
            type="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button className="submit">submit</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};



export default Employeelogin