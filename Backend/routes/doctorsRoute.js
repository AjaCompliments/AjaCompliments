const express=require('express');
const router=express.Router();

const {getAllDoctors}=require("../controller/doctors");

router.get('/getAll',getAllDoctors);
module.exports=router