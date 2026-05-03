import pool from "../db.js";

async function enviarPedidos(mesa, pedido, precio_total) {
  const query = "INSERT INTO pedidos (mesa, pedido, precio_total) VALUES ($1, $2, $3) RETURNING *";
  const values = [mesa, JSON.stringify(pedido), precio_total];
  const { rows } = await pool.query(query, values);
  return rows[0];
}

async function obtenerPedidos() {
  const query = "SELECT * FROM pedidos";
  const { rows } = await pool.query(query);
  return rows;
}

async function actualizarEstadoPedido(id, estado) {
  const query = "UPDATE pedidos SET estado = $1 WHERE id = $2 RETURNING *";
  const values = [estado, id];
  const { rows } = await pool.query(query, values);
  return rows[0];
}

export default { enviarPedidos, obtenerPedidos, actualizarEstadoPedido };