const {CityService} = require("../service/index");

const cityService = new CityService();

const create = async(req , res) =>{
    try {

        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            success:true,
            data:city,
            message:"Successfully created a city",
            err:{}
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
             data:{},
             success:false,
             messgae:"not able to create city",
             err:error
        })
    }
    
}
const destroy = async(req , res) =>{
    try {

        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            success:true,
            data:response,
            message:"Successfully deleted a city",
            err:{}
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
             data:{},
             message:"not able to delete a city",
             success:false,
             err:error
        })
    }
}
const get = async (req , res) =>{
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            success:true,
            data:city,
            message:"Successfully fetched a city",
            err:{}
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
             data:{},
             message:"not able to fetch a city",
             success:false,
             err:error
        })
    }
   
}
const update = async (req , res) =>{
    try {
        const city = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            success:true,
            data:city,
            message:"Successfully updated a city",
            err:{}
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
             data:{},
             message:"not able to update a city",
             success:false,
             err:error
        })
    }
}


module.exports = {
    create , 
    update, 
    destroy,
    get
}