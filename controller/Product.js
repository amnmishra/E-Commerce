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

const fetchAllProducts = async (req , res) =>{

    let query = Product.find({});

    if(req.query.category){
        query = query.find({category : req.query.category});
    }
    if(req.query.brand){
        query = query.find({category : req.query.brand});
    }
    if(req.query._sort && req.query._order){
        query = query.sort({[req.query._sort]:req.query._order});
    }
    if(req.query._page && req.query._limit){
        const pageSize = req.query._limit
        const page = req.query._page
        query = query.skip(pageSize*(page-1))._limit(pageSize)
    }
    try{        
        const data = await query.exec();
        res.status(200).json(data)
    }catch(err){
        res.status(400).json(err)
    }
}

export {createProduct , fetchAllProducts}