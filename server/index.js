
// require("dotenv").config();
// const express = require("express");
// const app = express();
// const cors=require("cors")





// const port = process.env.PORT || 7000

// //DB connection

// require("../server/db/connections")




// //required routes

// const userRoutes = require("./routes/employeeroutes")
// const adminRoutes = require("./routes/employerroutes")
// const employeedetails = require("./routes/employeedetailsroute")
// const employerdetails = require("./routes/employerdetailsroute")
// const jobPost = require("./routes/jobpostroutes")




// //middleware

// app.use(express.json())
// app.use(cors())



// //routes

// app.use("/api/user",userRoutes);
// app.use("/api/admin",adminRoutes )
// app.use("/api/employee",employeedetails)
// app.use("/api/employer",employerdetails)
// app.use("/api/jobpost",jobPost)






// // app.get("/", (req, res) => {
// //     res.send("hello babu")
// // })


// app.listen(port, () => {
//     console.log(`serveris running at port : ${port}`)
// })


require("dotenv").config();
const express = require("express");
const app = express();
const cors=require("cors")





const port = process.env.PORT || 7000

//DB connection

require("../server/db/connections")




//required routes

const userRoutes = require("./routes/employeeroutes")
const adminRoutes = require("./routes/employerroutes")
const jobPost = require("./routes/jobpostroutes")
const imageupload = require("./routes/uploadroutes")




//middleware

app.use(express.json())
app.use(cors())



//routes

app.use("/api/user",userRoutes);
app.use("/api/admin",adminRoutes )
app.use("/api/jobpost",jobPost)
app.use("/api/image",imageupload)






// app.get("/", (req, res) => {
//     res.send("hello babu")
// })


app.listen(port, () => {
    console.log(`serveris running at port : ${port}`)
})