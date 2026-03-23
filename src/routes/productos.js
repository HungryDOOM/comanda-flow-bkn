import express from 'express';
import productosController from '../controllers/productosController.js';
const router = express.Router();

router.get('/', productosController.getProductos);

export default router;