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
        return res.status(error.statusCode).json({
            message:error.message,
            data:{},
            success:false,
            err:error.explanation
        })
    }
}

const signin = async(req,res)=>{
    try {
        const response = await userService.signin(req.body.email,req.body.password);
        console.log(response)
        return res.status(200).json({
            message:"Successfully loggedin User",
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

const isAuthenticated = async(req,res)=>{
    try {
        const token = req.headers["x-access-token"];
       const response = await userService.isAuthenticated(token);
       return res.status(200).json({
        success:true,
        err:{},
        data:response,
        message:"user is authenticated"
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
const isAdmin = async(req,res)=>{
    try {
        const {id} = req.body;
        const response = await userService.isAdmin(id);
        return res.status(200).json({
            message:"successfully fetched whether user is admin or not",
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
module.exports = {
    create,
    signin,
    isAuthenticated,
    isAdmin
}