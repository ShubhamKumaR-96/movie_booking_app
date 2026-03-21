import express from "express";
import dotenv from 'dotenv'
import mongoose from "mongoose";
dotenv.config()

const app=express()

app.use(express.json())



app.get('/home',(req,res)=>{
    return res.json({success:true,message:"Welcome to movie booking app"})
})

app.listen(process.env.PORT,async()=>{
    console.log(`Server started on PORT: ${3001}`)
    
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("Sucessfully connected to mongoDB")
    } catch (error) {
        console.log("Error while connecting to mongodb",error)
    }
})
