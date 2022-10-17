// const express = require("express")

// const router = express.Router()




// //required controller

// const {loginUser,signUser} = require("../controller/employercontroller")






// //login  post  data

// router.post("/login",loginUser)




// //signup data

// router.post("/signup",signUser)



// module.exports = router



const express = require("express")

const router = express.Router()




//required controller

const {loginUser,signUser,getAAdmin,updateAdditionalInfo,} = require("../controller/employercontroller")






//login  post  data

router.post("/login",loginUser)




//signup data

router.post("/signup",signUser)


// GET single user details using id
router.get('/:id', getAAdmin);




// UPDATE a user details from the list using id
router.patch('/login/:id',  updateAdditionalInfo)



module.exports = router