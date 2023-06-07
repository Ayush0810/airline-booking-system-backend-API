const {FlightService} = require("../service/index");

const flightService = new FlightService();

const create = async(req,res) =>{
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data:flight,
            success:true,
            err:{},
            message:"successfully created flight"
        })

        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
             data:{},
             success:false,
             messgae:"not able to create flight",
             err:error
        })
    }
}


module.exports = {
create
}