// import "../Profile.css";
// import axios from "axios";
// import React, { useEffect, useContext } from "react";
// import img from "../../../Asserts/sample.png";
// import Calendar from "react-calendar";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// //---------------------------------------------------------------------------------------------

// const ProfileHero = () => {
//   //calendar function
//   const [value, onChange] = useState(new Date());

//   //----------------------------------------------------------------------
//   //image upload

//   //---------------------------------------------------------------------------------------------
//   //getting data from an api
//   let gettinguser = JSON.parse(localStorage.getItem("employee"));
//   let empid = gettinguser.data.user._id;

//   const [details, setDetails] = useState("");
//   // get request
//   const getdetails = async () => {
//     const response = await axios.get(
//       `http://localhost:4000/api/employee/${empid}`
//     );
//     setDetails(response.data);
//   };
//   useEffect(() => {
//     getdetails();
//   },[]);
//   //----------------------------------------------------------------------

//   //----------------------------------------------------------------------
//   //update req
//   const [basicdetail, setbasicdetail] = useState({
//     _id: null,
//     role: "",
//     DOB: "",
//     department: "",
//     preaddress: "",
//     location: "",
//     pnumber: "",
//   });

//   const collectdata = (e) => {
//     const { name, value } = e.target;
//     setbasicdetail(
//       {
//         // ...basicdetail,
//         [name]: value
//       },

//       // setbasicdetail(e.target.value)
//     )
//     // getdetails()
//     console.log(basicdetail)
//     setDetails(e.target.value);

//   };

//   const updatedetail = async (e) => {
//     e.preventDefault();
//     // const { _id } = details._id;
//     // console.log(details)

//     await axios
//       .patch(`http://localhost:4000/api/employee/${empid}`, basicdetail)
//       .then((res) => {
//         console.log(res.data.message);
//       });
//       getdetails()

//   };

//   //edit change
//   const [require, readonl] = useState(true);

//   const change = () => {
//     if (require == true) {
//       readonl(false);
//     } else {
//       readonl(true);
//     }
//   };
//   //-------------------------------------------------------------------------
//   return (
//     <div>
//       <div>
//         <div className="auth-details">
//           <div className="top">
//             <div className="top-left">
//               <form onSubmit={updatedetail}>
//                 {/* <input type="file" name="image" /> */}
//                 {/* <button type="submit">Submit</button> */}

//                 <div className="details">
//                   <pre>
//                     <p>Full Name : <input type="text" value={details.name} required
//                       readOnly={require}/></p>
//                     <p>Email : <input type="text" value={details.email} required
//                       readOnly={require}/></p>
//                     <p>Employee ID : <input type="text" value={details.emp_id} required
//                       readOnly={require}/> </p>
//                     <p>Contact : <input type="text" value={details.phone} required
//                       readOnly={require}/></p>
//                     <p>Department : <input type="text" value={details.dept} required
//                       readOnly={require}/></p>
//                     <p>Year : <input type="text" value={details.year} required
//                       readOnly={require}/></p>
//                   </pre>
//                 </div>
//               </form>
//             </div>

//             <div className="top-right">
//               <div className="basic-info">
//                 <h1>BASIC INFORMATION</h1>
//                 <button onClick={change}>Edit</button>
//               </div>
//               <div>
//                 <form onSubmit={updatedetail}>
//                   <div className="form-inside">
//                     <input
//                       type="text"
//                       placeholder="Role"
//                       name="role"
//                       onChange={collectdata}
//                       value={details.role}
//                       required
//                       readOnly={require}
//                     />
//                     <input
//                       type="text"
//                       placeholder="Date of Birth"
//                       name="dob"
//                       onChange={collectdata}
//                       value={details.dob}
//                       required
//                       readOnly={require}
//                     />
//                   </div>

//                   <div className="form-inside">
//                     <input
//                       type="text"
//                       placeholder="Department"
//                       name="department"
//                       onChange={collectdata}
//                       value={details.dept}
//                       required
//                       readOnly={require}
//                     />
//                     <input
//                       type="text"
//                       placeholder="Present Address"
//                       name="address"
//                       onChange={collectdata}
//                       value={details.address}
//                       required
//                       readOnly={require}
//                     />
//                   </div>
//                   <div className="form-inside">
//                     <input
//                       type="text"
//                       placeholder="Location"
//                       name="location"
//                       onChange={collectdata}
//                       value={details.location}
//                       required
//                       readOnly={require}
//                     />
//                     <input
//                       type="tel"
//                       placeholder="Emergency Contact No"
//                       name="econtact"
//                       onChange={collectdata}
//                       value={details.emgcontact}
//                       required
//                       readOnly={require}
//                     />
//                   </div>
//                   <button type="submit">save</button>
//                 </form>
//               </div>
//             </div>
//           </div>

//           <div className="bottom">
//             <div className="leaves">
//               <div className="count">
//                 <p>01/10</p>
//               </div>
//               <div className="leaves-taken">
//                 <h1>Leaves Taken</h1>
//                 <p>Leave taken on 25 Jan 2022</p>
//                 <p>Leave taken on 26 Jan 2022</p>
//                 <p>Leave taken on 27 Jan 2022</p>
//               </div>
//             </div>
//             <div className="calendar">
//               <Calendar onChange={onChange} value={value} />
//             </div>
//             <div className="weeks">
//               <Link>TIMESHEET 1</Link>
//               <Link>TIMESHEET 2</Link>
//               <Link>TIMESHEET 3</Link>
//               <Link>TIMESHEET 4</Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileHero;