const {BookingService} = require("../services/index")
const {StatusCodes} = require("http-status-codes")
const bookingService = new BookingService();
const { createChannel,publishMessage} = require("../utils/messageQueue")
const {REMINDER_BINDING_KEY} = require("../config/serverConfig")
class BookingController{

     async sendMessageToQueue(req,res){
        const channel = await createChannel();
        publishMessage(channel,REMINDER_BINDING_KEY)

     }

    async create(req,res){
        try {
            const response = await bookingService.createBooking(req.body);
            return res.status(StatusCodes.OK).json({
                message:"successfully completed booking",
                success:true,
                err:{},
                data:response
            })
        } catch (error) {
            return res.status(error.statusCode).json({
                message:error.message, 
                success:false,
                err:error.explanation,
                data:{}
            })
        }
    }
}



module.exports= BookingController
