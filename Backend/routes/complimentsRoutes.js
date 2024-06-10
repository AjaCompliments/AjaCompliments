const express=require('express');
const router=express.Router();
const {fetchALL,fetchFew}=require('../controller/compliments')


router.get('/fetchAll',fetchALL);
router.post('/fetchFew',fetchFew);
module.exports=router