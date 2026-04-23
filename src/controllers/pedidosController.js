import pedidosServices from "../services/pedidosServices.js";

const pedidosController = {
  sendPedidos: async (req, res, next) => {
    try {
      const { mesa, pedido, precio_total, comanda } = req.body;
      const nuevoPedido = await pedidosServices.enviarPedidos(mesa, pedido, precio_total, comanda);
      res.json(nuevoPedido);
    }
    catch (error) {
      next(error);
    }
  },
  getPedidos: async (req, res, next) => {
    try {
      const pedidos = await pedidosServices.obtenerPedidos();
      res.json(pedidos);
    }
    catch (error) {
      next(error);
    }
  }
}

export default pedidosController;