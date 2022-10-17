



import React from "react";
import "./Employerprofile.css"
import { useLogout } from "../../Hooks/userLogout";
import { useAuthContext } from "../../Hooks/EmployeeAuthContext";
import { Link } from "react-router-dom"
import AdditionalAdmin from "../../Components/AdditionalAdmin/AdditionalAdmin";
import Navbaremployer from "../../Components/Navbaremployer/Navbaremployer";


const Employerprofile = () => {

  const { user } = useAuthContext()
  let gettinguser=JSON.parse(localStorage.getItem("user"))
  let userinfo=gettinguser.user;
  // console.log(userid)
  
  return (
    <div>

      <Navbaremployer/>
      
    
      <div className="upload_img">
        <img src="" alt="" />
      </div>
      <div className="employee_details">
        <h1> EMPLOYER PERONAL INFORMATION</h1>


        <div>
          <p>Company Name : <span>{userinfo.nameOfTheCompany}</span></p>

        </div>
        <div>
          <p>Email :<span>{userinfo.email}</span></p>

        </div>
        <div>
          <p>Contact Number :<span>{userinfo.contactNumber}</span></p>

        </div>
        <div>
          <p>Company type :<span>{userinfo.CompanyType}</span></p>

        </div>
        
      </div>

      <AdditionalAdmin/>

      




    </div>
  );
};

export default Employerprofile;