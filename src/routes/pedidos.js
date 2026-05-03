import express from "express";
import pedidosController from "../controllers/pedidosController.js";
const router = express.Router();

router.post("/", pedidosController.sendPedidos);
router.get("/", pedidosController.getPedidos);
router.put("/:comanda", pedidosController.updatePedidoStatus);

export default router;