import pool from "../db.js";

async function enviarPedidos(mesa, pedido, precio_total) {
  const query = "INSERT INTO pedidos (mesa, pedido, precio_total, comanda) VALUES ($1, $2, $3, $4) RETURNING *";
  const values = [mesa, JSON.stringify(pedido), precio_total, comanda];
  const { rows } = await pool.query(query, values);
  return rows[0];
}

async function obtenerPedidos() {
  const query = "SELECT * FROM pedidos";
  const { rows } = await pool.query(query);
  return rows;
}

export default { enviarPedidos, obtenerPedidos };