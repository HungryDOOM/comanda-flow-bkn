import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productosRoutes from "./routes/productos.js";
import pedidosRoutes from "./routes/pedidos.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());

app.use("/productos", productosRoutes);
app.use("/pedidos", pedidosRoutes);
app.use("/getPedidos", pedidosRoutes);

app.listen(PORT, () => console.log(`Servidor backend en puerto ${PORT}`));