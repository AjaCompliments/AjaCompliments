const astuceModel=require("../models/astucesModel");
module.exports={
    getAllAstuces:(req,res)=>{
        astuceModel.getAllAstuces((err,results)=>{
err?res.status(500).send(err):res.status(200).json(results);
        },[])
    },
}