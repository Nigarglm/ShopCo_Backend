import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import AuthRouter from './routes/auth.routes.js'
import productRoutes from './routes/product.routes.js'
import cors from 'cors'

const app = express()

dotenv.config()



app.use(express.json())
app.use(cors())

app.use('/products', productRoutes);
app.use('/auth', AuthRouter)


const PORT = process.env.PORT
const MONGODB_URL =process.env.MONGODB_URL

app.listen(PORT, ()=>{
    console.log(`Server listening on Port : ${PORT}`)
})

mongoose.connect(MONGODB_URL)
.then(()=>{
    console.log("Database connection established")
})
.catch((err)=>{
    console.log(err);
})