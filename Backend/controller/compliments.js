const complimentModel=require('../models/complimentsModel')
module.exports={
fetchALL:(req,res)=>{
    complimentModel.fetchAllCompliments((err,results)=>{
        err?res.status(500).send(err):res.status(200).json(results)
    },[])
},
fetchFew:(req,res)=>{
    complimentModel.fetchComplimentUNSAFE((err,results)=>{
        err?res.status(500).send(err):res.status(200).json(results);
    },[req.body.category])
}
}