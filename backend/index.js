const express= require("express");
const app= express()
const port=3001;
const env= require("dotenv").config();
const mongoose = require("mongoose");

const connectionString = process.env.MONGODB_URL;
mongoose.connect(connectionString).then(()=>{
    console.log("Mongodb connected");
}).catch((e)=>{
   console.log(e);
})



app.get("/",(req,res)=>{
    res.send("Hello from server");
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})