const doctorModel=require("../models/doctorsModel");
module.exports={
   getAllDoctors:(req,res)=>{
    doctorModel.getAllDoctors((err,results)=>{
        err?res.status(500).send(err):res.status(200).json(results);
    },[])
   }
}