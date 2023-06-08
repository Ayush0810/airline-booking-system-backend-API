const UserService = require("../services/user-service");

const userService = new UserService();
const create = async (req,res)=>{
    const {email,password} = req.body;
    try {
        const response = await userService.create({
            email,password
        })
        return res.status(201).json({
            message:"Successfully created new User",
            data:response,
            success:true,
            err:{}
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:"something went wrong",
            data:{},
            success:false,
            err:error
        })
    }
}

const signin = async(req,res)=>{
    console.log("first")
    try {
        console.log("second")
        // const {email,password} = req.body
        const response = await userService.signin(req.body.email,req.body.password);
        console.log(response)
        return res.status(200).json({
            message:"Successfully loggedin User",
            data:response,
            success:true,
            err:{}
        })
        
    } catch (error) {
        console.log("third")
        console.log(error)
        return res.status(500).json({
            message:"something went wrong",
            data:{},
            success:false,
            err:error
        })
    }
}

module.exports = {
    create,
    signin
}