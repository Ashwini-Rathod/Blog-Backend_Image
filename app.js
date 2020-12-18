const express = require("express");
const app = express();
const mongoose = require("mongoose");
const blogRoutes = require("./Routes/blogRoutes");
const dotenv = require("dotenv");
dotenv.config({
    path: "./config.env",
})
app.use(express.json());
app.use("/blogs", blogRoutes);

mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true , useNewUrlParser: true },(err, connection)=>{
    if(err){
        console.log(err);
    }
    console.log("Successfully connected to the database");       
})

app.listen(process.env.PORT, ()=>{
    console.log(`Listening to the port`);
})