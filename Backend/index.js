const express = require ('express');
const users= require('./routes/userRoutes')
const cors = require ('cors');
const db = require('./database/index');
require("dotenv").config();
const PORT = 4000;

const cookieParser = require('cookie-parser');


const compliments=require('./routes/complimentsRoutes')
const astuces=require('./routes/astucesRoute')
const questions_reference=require('./routes/questRefRoutes')
const doctors=require('./routes/doctorsRoute')

const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({credentials:true}));
app.use(cookieParser());

app.get("/",(req,res)=>res.json('are you a webcrawler? nothing to see here!'));

app.use('/users',users);
app.use('/compliments',compliments);
app.use('/astuces',astuces);
app.use('/questions',questions_reference);
app.use('/doctors',doctors);




app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));