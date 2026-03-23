import express from "express";
import pedidosController from "../controllers/pedidosController.js";
const router = express.Router();

router.post("/", pedidosController.sendPedidos);
router.get("/", pedidosController.getPedidos);

export default router;