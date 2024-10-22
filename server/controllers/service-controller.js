const Service = require("../models/service-model");
const services = async(req,res)=>{
    try {
        const response = await Service.find();
        if(!response){
            res.status(404).json({msg: "No Service founnd"});
            return;
        }return res.status(200).json({msg: "Service founnd",data:response});

    } catch (error) {
        console.log(`error from the server ${error}`);
    }
}

module.exports = services;