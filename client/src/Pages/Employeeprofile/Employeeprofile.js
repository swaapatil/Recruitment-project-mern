


import React from "react";
import "./Employeeprofile.css"
import { useLogout } from "../../Hooks/userLogout";
import { useAuthContext } from "../../Hooks/EmployeeAuthContext";
import { Link } from "react-router-dom"
import Additionalinfo from "../../Components/Additionalinfo/Additionalinfo";
import Navbaremployee from "../../Components/Navbaremployee/Navbaremployee";
import ProfilePic from "../../Components/Profile/Profile";


const Employeeprofile = () => {

  const { user } = useAuthContext()
  let gettinguser=JSON.parse(localStorage.getItem("user"))
  let userinfo=gettinguser.user;
  // console.log(userid)

  return (
    <div>
      <Navbaremployee/>
      <ProfilePic/>

    

      <div className="upload_img">
        <img src="" alt="" />
        
      </div>
      <div className="employee_details">
        <h1> EMPLOYEE PERONAL INFORMATION</h1>


        <div>
          <p>first Name : <span>{userinfo.firstName}</span></p>

        </div>
        <div>
          <p>last Name :<span>{userinfo.lastName}</span></p>

        </div>
        <div>
          <p>email :<span>{userinfo.email}</span></p>

        </div>
        <div>
          <p>mobile Number :<span>{userinfo.mobileNumber}</span></p>

        </div>
      </div>

      <div>

        <Additionalinfo/>
      

      </div>


      <div>

        <div>
          <h1>Jobs Applied</h1>
        

        </div>



      </div>




    </div>
  );
};

export default Employeeprofile;