import express from 'express';
import { createProduct , fetchAllProducts} from '../controller/Product.js'


const router = express.Router();



router.post("/" , createProduct)
      .get("/" , fetchAllProducts)

export default router;
