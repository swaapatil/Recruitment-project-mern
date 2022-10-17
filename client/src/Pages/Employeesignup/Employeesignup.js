



import React, { useState } from "react";
import "../Employeesignup/Employeesignup.css";
import { Signup } from "../../Hooks/userSignup"
import { Link } from "react-router-dom"
import logo from "../../assets/Inkprog-logo.png";


const Employeesignup = () => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [mobileNumber, setMobileNumber] = useState("")
  const [password, setPassword] = useState("")

  const { signup, error } = Signup()

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(firstName, lastName, email, mobileNumber, password)



  }

  return (
    <div className="root">
     <div>
        <Link to="/">
          <img src={logo}  alt=""/>
        </Link>
        <div>
          <h1>EMPLOYEE RECRUITMENT SOFTWARE</h1>

        </div>
        <div className="auth">
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
        </div>

      </div>
      <div className="form">
        <form onSubmit={handleSubmit} >
          <div>
            <label htmlFor="">first Name</label>
            <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
          </div>
          <div>
            <label htmlFor="">last Name</label>
            <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
          </div>
          <div>
            <label htmlFor="">email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
          </div>
          <div>
            <label htmlFor="">mobile Number</label>
            <input type="number" onChange={(e) => setMobileNumber(e.target.value)} value={mobileNumber} />
          </div>
          <div>
            <label htmlFor="">password</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
          </div>

          <button>submit</button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Employeesignup;