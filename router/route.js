import express from 'express'

const router = express.Router()
import { userSignup, userLogin } from '../controller/user-controller.js';
import { getProducts, getProductById } from '../controller/product-controller.js';
router.post('/signup',userSignup);
router.post('/login',userLogin);
router.get('/products',getProducts);
router.get('/product/:id', getProductById)
export default router;
