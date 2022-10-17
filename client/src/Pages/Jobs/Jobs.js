import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Inkprog-logo.png";
const Jobs = () => {
  return (
    <div className="Jobs">
      <div className="navbar1">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div>
          <h1>EMPLOYEE RECRUITMENT SOFTWARE</h1>
        </div>
      </div>

      <div className="jobs">
        <div className="topdata">
          <p></p>
          <p></p>
        </div>
        <div className="bottomdata">
          <div className="leftside">
            <div className="datafields"><p>Technologies<span></span></p></div>
            <div className="datafields"><p>Experience<span></span></p></div>
            <div className="datafields"><p>Location<span></span></p></div>
            <div className="datafields"><p>Graduate<span></span></p></div>
            <div className="datafields"><p>English<span></span></p></div>
            <div className="datafields"><p>Notice period<span></span></p></div>
          </div>
          <div className="right">
              <div className="datafields">
                <button>Apply</button>
              </div>
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
