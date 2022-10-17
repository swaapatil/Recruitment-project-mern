const mongoose = require("mongoose");


mongoose.connect("mongodb://0.0.0.0:27017/recruitment2")
.then(()=>{
    console.log("connection is estabilshed")

})
.catch((err)=>{
    console.log(`error is : ${err}`)
})
// const mongoose = require("mongoose");


// mongoose.connect("mongodb://localhost:27017/project")
// .then(()=>{
//     console.log("connection is estabilshed")

// })
// .catch((err)=>{
//     console.log(`error is : ${err}`)
// })