const express=require("express");
const cors=require("cors");
const morgan=require("morgan");
const mainRouter=require("./Routes/mainRouter")



const app=express();


app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(mainRouter)



module.exports=app;