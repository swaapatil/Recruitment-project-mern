// import { useState } from "react";
// import axios from "axios";

// const Jobpost = () => {
//   const [save, setsave] = useState({
//     companyName: "",
//     role: "",
//     technologies: "",
//     experience: "",
//     location: "",
//     graduate: "",
//     english: "",
//     noticePeriod: "",
//   });

//   const handlesave = (e) => {
//     const { name, value } = e.target;
//     setsave({
//       ...save,
//       [name]: value,
//     });
//   };

//   const savedata = async (e) => {
//     e.preventDefault();
//     const response = await axios.post("/api/jobpost", save).then((res) => {
//       console.log(res);
//     });
//   };

//   return (
//     <div>
//       <div>
//         <p>Job post</p>
//         <div className="dropdownbuttons">
//           <select name="companyName" id="" onChange={handlesave}>
//             <option value="Technologies">Company Name</option>
//             <option value="TCS">TCS</option>
//             <option value="INFOSYS">INFOSYS </option>
//             <option value="ACCENTURE">ACCENTURE</option>
//             <option value="IBM">IBM</option>
//           </select>

//           <select name="role" id="" onChange={handlesave}>
//             <option value="Role">Role</option>
//             <option value="developer">developer</option>
//             <option value="Testing">Testing</option>
//             <option value="learning And Development">
//               learning And Development
//             </option>
//           </select>

//           <select name="technologies" id="" onChange={handlesave}>
//             <option value="Technologies">Technologies</option>
//             <option value="React">React</option>
//             <option value="Java">Java </option>
//             <option value="Python">Python</option>
//             <option value="AWS">AWS</option>
//           </select>

//           <select name="experience" id="" onChange={handlesave}>
//             <option value="Experience">Experience</option>
//             <option value="0">0</option>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             <option value="4">4</option>
//             <option value="5">5</option>
//           </select>

//           <select name="location" id="" onChange={handlesave}>
//             <option value="Location">Location</option>
//             <option value="Pune">Pune</option>
//             <option value="HYD">HYD</option>
//             <option value="Banglore">Banglore</option>
//           </select>

//           <select name="graduate" id="" onChange={handlesave}>
//             <option value="Graduate">Graduate</option>
//             <option value="Btech">Btech</option>
//             <option value="BCA">BCA</option>
//             <option value="Bsc Computer Sience">Bsc Computer Sience</option>
//           </select>

//           <select name="english" id="" onChange={handlesave}>
//             <option value="English">English</option>
//             <option value="Good">Good</option>
//             <option value="Bad">Bad</option>
//             {/* <option value="d"></option> */}
//           </select>

//           <select name="noticePeriod" id="" onChange={handlesave}>
//             <option value="Notice Period">Notice Period</option>
//             <option value="1 year">1 year</option>
//             <option value="2 year">2 year</option>
//             <option value="3 year">3 year</option>
//           </select>
//         </div>
//         <div className="otherdetailbuttons">
//           {/* <button onChange={edit}>Edit</button> */}

//           <button onClick={savedata}>Save</button>
//         </div>
//         {/* <p><span>{jobs.companyName}</span></p> */}
//         {/* <p><span>{ jobs.Role}</span></p> */}
//         {/* <p><span>{ jobs.CompanyName}</span></p>
//         <p><span>{ jobs.CompanyName}</span></p>
//         <p><span>{ jobs.CompanyName}</span></p> */}
//       </div>
//     </div>
//   );
// };

// export default Jobpost;



import JobRecords from "../../Components/JobRecord/JobRecords"
import Navbaremployee from "../../Components/Navbaremployer/Navbaremployer"



const JobPost = () => {
  return (
    <>
    <Navbaremployee/>
    <div className="post">
    <h2>Post a Job</h2>
    
    <JobRecords/>
    
    </div>
    </>
  )
}

export default JobPost