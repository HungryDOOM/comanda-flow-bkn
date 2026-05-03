import pedidosServices from "../services/pedidosServices.js";

const pedidosController = {
  sendPedidos: async (req, res, next) => {
    try {
      const { mesa, pedido, precio_total, comanda, estado } = req.body;
      const nuevoPedido = await pedidosServices.enviarPedidos(mesa, pedido, precio_total, comanda, estado);
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
  },
  updatePedidoStatus: async (req, res, next) => {
    try {
      const { comanda } = req.params;
      const { estado } = req.body;
      const pedidoActualizado = await pedidosServices.actualizarEstadoPedido(comanda, estado);
      res.json(pedidoActualizado);
    }
    catch (error) {
      next(error);
    }
  }
}

export default pedidosController;