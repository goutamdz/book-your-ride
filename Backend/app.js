const express=require('express');
const app=express();
const doenv=require('dotenv');
doenv.config();
const cors = require('cors');
app.use(cors());
const connectDB=require('./db/db');
const userRouter=require('./routes/user.routes');
app.use(express.json());
app.use(express.urlencoded({extended:true}));   
connectDB();

app.use('/user',userRouter)

app.get('/',(req,res)=>{
    res.send("Hello World");
});

module.exports=app;