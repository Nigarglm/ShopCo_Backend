import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import AuthRouter from './routes/auth.routes.js'
import productRoutes from './routes/product.routes.js'
import categoriesRoutes from './routes/category.routes.js'
import contactRoutes from './routes/contact.routes.js'
import cors from 'cors'

const app = express()

dotenv.config()

app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true,
}));

app.use('/products', productRoutes);
app.use('/users', AuthRouter)
app.use('/category', categoriesRoutes)
app.use ('/contact', contactRoutes )


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