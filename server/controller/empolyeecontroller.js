

// const User = require("../models/employeemodel")
// const createToken = require("../utils/token")



// // login data

// const loginUser = async (req, res) => {

//     const { email, password} = req.body
//     try {
//         const user = await User.login( email, password)

//         //create token

//         const token = createToken(user._id)
//         res.status(200).json({ user :user ,token})

//     } catch (err) {
//         res.status(400).json({ error: err.message })
//     }


// }

// //singup

// const signUser = async (req, res) => {

//     const { firstName, lastName, email, password, mobileNumber} = req.body
//     try {
//         const user = await User.signup(firstName, lastName, email, password, mobileNumber)

//         //create token
 
//         const token = createToken(user._id)
//         res.status(200).json({ email, user ,token})

//     } catch (err) {
//         res.status(400).json({ error: err.message })
//     }

// }

// module.exports = {
//     loginUser, signUser

// }

const User = require("../models/employeemodel")
const createToken = require("../utils/token")
const mongoose = require("mongoose");



// login data

const loginUser = async (req, res) => {

    const { email, password} = req.body
    try {
        const user = await User.login( email, password)

        //create token

        const token = createToken(user._id)
        res.status(200).json({ user:user,token})

    } catch (err) {
        res.status(400).json({ error: err.message })
    }


}

//singup

const signUser = async (req, res) => {

    const { firstName, lastName, email, password, mobileNumber} = req.body
    try {
        const user = await User.signup(firstName, lastName, email, password, mobileNumber)

        //create token
 
        const token = createToken(user._id)
        res.status(200).json({ email, user ,token})

    } catch (err) {
        res.status(400).json({ error: err.message })
    }

}

// GET single USER

const getASingleUser = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such user details found!" });
    }
    const singleUser = await User.findById(id);
  
    if (!singleUser) {
      return res.status(404).json({ error: "user not available." });
    }
  
    res.status(200).json(singleUser);
  };
  


// additional update data


const updateAdditionalInfo = async (req, res) => {

    const { id } = req.params;
    const { role, currentCompany, currentLocation, technology, experience, location, graduate, english, notice } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
     return res.status(404).json({ error: "No additional user info available." });
    }
    const updateUserInfo = await User.findOneAndUpdate({ _id: id }, { role, currentCompany, currentLocation, technology, experience, location, graduate, english, notice }, { new: true })
    if (!updateUserInfo) {
  
      return res.status(404).json({ error: "No pervious info available." });
    }
    res.status(200).json(updateUserInfo);
  
  };










module.exports = {
    loginUser, signUser,getASingleUser,updateAdditionalInfo,

}