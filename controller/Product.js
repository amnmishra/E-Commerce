import { Product } from '../model/Product.js'

const createProduct = async (req , res) =>{

    const product = new Product(req.body)
    try{
        const data = await product.save()
        res.status(201).json(data)
    }catch(err){
        res.status(400).json(err)
    }
    
    
   
}

export {createProduct}