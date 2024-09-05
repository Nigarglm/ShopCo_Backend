import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'


const app = express()

dotenv.config()

const PORT = process.env.PORT
const MONGODB_URL =process.env.MONGODB_URL

app.use(express.json())

app.listen(PORT, ()=>{
    console.log(`Server listening on Port : ${PORT}`)
})

mongoose.connect(MONGODB_URL).then(()=>{
    console.log("Database connection established")
}).catch((err)=>{
    console.log(err);
})