const express = require('express');
const app = express();
const env = require("dotenv").config();
const connectdb = require('./config_db');
connectdb();


app.listen(process.env.PORT, (req,res)=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});