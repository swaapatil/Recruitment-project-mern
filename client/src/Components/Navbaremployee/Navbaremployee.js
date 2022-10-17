// import React from 'react'
// import { Link } from "react-router-dom";
// import logo from "../../assets/Inkprog-logo.png";
// import { useLogout } from "../../Hooks/userLogout";
// import "../Navbaremployee/Navbaremployee.css"
// import { useAuthContext } from "../../Hooks/EmployeeAuthContext";

// const Navbaremployee = () => {
//     const { user } = useAuthContext()
//     const { logout } = useLogout();
//     const handleClick = () => {
//         logout();
//       };
    

//   return (

//     <div className='nav'>

//         <div className='img'>
//             <img src={logo} alt="" />
//         </div>

//         <div className='list'>
//            <Link to="/employeedetails"><li>Home</li></Link>
//            <Link to="/job"><li >Jobs</li></Link>
           
//         </div>


      
//           <div className='logout'>
//             <span>{user.email}</span>
//             <button onClick={handleClick}>log out</button>
//           </div>



//     </div>
   
//   )
// }

// export default Navbaremployee



import React from 'react'
import { Link } from "react-router-dom";
import logo from "../../assets/Inkprog-logo.png";
import { useLogout } from "../../Hooks/userLogout";
import "../Navbaremployee/Navbaremployee.css"
import { useAuthContext } from "../../Hooks/EmployeeAuthContext";

const Navbaremployee = () => {
    const { user } = useAuthContext()
    const { logout } = useLogout();
    const handleClick = () => {
        logout();
      };

      let gettinguser=JSON.parse(localStorage.getItem("user"))
      let userinfo=gettinguser.user;
      
    

  return (

    <div className='nav'>

        <div className='img'>
            <img src={logo} alt="" />
        </div>

        <div className='list'>
           <Link to="/employeedetails"><li>Home</li></Link>
           <Link to="/employeejobapply"><li >Job</li></Link>
           
        </div>


      
          <div className='logout'>
            <span>{ userinfo.email}</span>
            <button onClick={handleClick}>log out</button>
          </div>



    </div>
   
  )
}

export default Navbaremployee