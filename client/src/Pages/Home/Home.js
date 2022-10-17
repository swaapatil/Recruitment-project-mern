import React from "react";
import "../Home/Home.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Inkprog-logo.png";

const Home = () => {
  return (
    <div className="root">

      <div className="Navbar">
        <div className="Heading1">
        <h1>INKPROOG</h1>
        </div>
        <div  className="Center-Text">
          <h1 className="title">EMPLOYEE RECRUITMENT SOFTAWRE</h1>
        </div>
      </div>

      <div className="Container">
        <div className="keys">
          <Link to="/signup"><button>EMPLOYEE</button></Link>
          <Link to="/adminsignup"><button>EMPLOYER</button></Link>

        </div>
      </div>
    </div>
  );
};

export default Home;