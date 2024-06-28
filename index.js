import express from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import productsRouter from './routes/Products.js'

dotenv.config();
const app = express(); 

// Middleware
app.use(express.json());
app.use('/products',productsRouter)


const dbConnection = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/e-commerce')
    console.log("Connected")
}
dbConnection().catch(err => console.log(err))

app.get("/" , (req , res) => {
    res.json({status:'Success'})
})


const port = process.env.PORT || 3000
app.listen(port , () => {
    console.log("Port is running : " , port)
})