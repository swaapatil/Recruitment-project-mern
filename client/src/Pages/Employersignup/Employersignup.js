import React, { useState } from "react";
import "./Employersignup.css";
import { Signup } from "../../Hooks/adminSignup"
import { Link } from "react-router-dom"
import logo from "../../assets/Inkprog-logo.png";


const Employersignup = () => {

  const [nameOfTheCompany, setnameOfTheCompany] = useState("")
  const [email, setEmail] = useState("")
  const [contactNumber, setcontactNumber] = useState("")
  const [CompanyType, setCompanyType] = useState("")
  const [password, setPassword] = useState("")


  const { signup, error } = Signup()

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(nameOfTheCompany, email, contactNumber, CompanyType, password)
}

 return (
    <div className="root">
      <div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div>
          <h1>EMPLOYER RECRUITMENT SOFTWARE</h1>

        </div>

        <div className="auth">
          <Link to="/adminsignup">Sign Up</Link>
          <Link to="/adminlogin">Login</Link>
        </div>

      </div>

     
      <div className="form">
        <form onSubmit={handleSubmit} >
          <div>
            <label htmlFor="">Company Name</label>
            <input type="text" onChange={(e) => setnameOfTheCompany(e.target.value)} value={nameOfTheCompany} />
          </div>
          <div>
            <label htmlFor="">email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
          </div>
          <div>
            <label htmlFor="">Contact Number</label>
            <input type="text" onChange={(e) => setcontactNumber(e.target.value)} value={contactNumber} />
          </div>
          <div>
            <label htmlFor="">Company Type</label>
            <input type="text" onChange={(e) => setCompanyType(e.target.value)} value={CompanyType} />
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

export default Employersignup;