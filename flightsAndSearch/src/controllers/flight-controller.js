const {FlightService} = require("../service/index");
const {SuccessCodes} = require("../utils/error-codes");


const flightService = new FlightService();

const create = async(req,res) =>{
    try {
        const flightRequestData = {
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            arivalTime:req.body.arivalTime,
            departureTime:req.body.departureTime,
            price:req.body.price,
        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
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

const getAll = async(req,res)=>{
    try {
        const response = await flightService.getAllFlightData(req.query);
        return res.status(SuccessCodes.OK).json({
            data:response,
            success:true,
            err:{},
            message:"successfully fetched all flight"
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            messgae:"not able to fetch flights",
            err:error
       })
    }
}

const get = async(req,res)=>{
    try {
        const response = await flightService.getFlight(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data:response,
            success:true,
            err:{},
            message:"successfully fetched all flight"
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            messgae:"not able to fetch flights",
            err:error
       })
    }
}

const update = async(req,res)=>{
    try {
        const response = await flightService.updateFlight(req.params.id,req.body);
        return res.status(SuccessCodes.OK).json({
            data:response,
            success:true,
            err:{},
            message:"successfully updated flight"
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            messgae:"not able to fetch flights",
            err:error
       })
    }
}


module.exports = {
create,
getAll,
get,
update
}