import express from 'express'
import { config } from 'dotenv';
import mongoose from 'mongoose';
import { createProduct } from './controller/Product.js'

config();
const app = express(); 
// Middleware
app.use(express.json());



const dbConnection = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/e-commerce')
    console.log("Connected")
}
dbConnection().catch(err => console.log(err))



app.get("/" , (req , res) => {
    res.json({status:'Success'})
})

app.post("/products" , createProduct)




const port = process.env.PORT || 3000
app.listen(port , () => {
    console.log("Port is running : " , port)
})