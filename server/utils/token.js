// const jwt = require("jsonwebtoken")

// const createToken =(_id)=>{
//    return jwt.sign({_id},process.env.JWT_SECRET,{
//         expiresIn:"1d"
//     })

// }

// module.exports = createToken


const jwt = require("jsonwebtoken")

const createToken =(_id)=>{
   return jwt.sign({_id},process.env.JWT_SECRET,{
        expiresIn:"7d"
    })

}

module.exports = createToken