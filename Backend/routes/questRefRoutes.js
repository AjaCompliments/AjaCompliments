const express=require('express');
const router=express.Router();

const {getAllQuestRefs}=require('../controller/questRef');


router.get('/getAll',getAllQuestRefs);
module.exports=router