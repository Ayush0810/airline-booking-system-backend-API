const TicketService = require("../services/email-service");

const create = async (req,res)=>{
    try {
        const response = await TicketService.createNotifcation(req.body);
        return res.status(201).json({
            success:true,
            data:response,
            err:{},
            messaage:"SuccessFully registered an email reminder"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            data:{},
            err:error,
            messaage:"unable to  register an email reminder"
        })
    }
}

module.exports ={
    create,
}