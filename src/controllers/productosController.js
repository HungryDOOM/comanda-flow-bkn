import productosService from '../services/productosServices.js';

const productosController = {
  getProductos: async (req, res, next) => {
    try {
      const productos = await productosService.obtenerProductos();
      res.json(productos);
    } catch (error) {
      next(error);
    }

  }
};

export default productosController;