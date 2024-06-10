const express=require('express');
const router=express.Router();
const {getAllAstuces}=require("../controller/astuces");

router.get("/getAll",getAllAstuces);
module.exports=router