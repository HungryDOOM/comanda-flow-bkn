import pool from "../db.js";

async function enviarPedidos(mesa, pedido, precio_total, comanda, estado) {
  const query = "INSERT INTO pedidos (mesa, pedido, precio_total, comanda, estado) VALUES ($1, $2, $3, $4, $5) RETURNING *";
  const values = [mesa, JSON.stringify(pedido), precio_total, comanda, estado];
  const { rows } = await pool.query(query, values);
  return rows[0];
}

async function obtenerPedidos() {
  const query = "SELECT * FROM pedidos";
  const { rows } = await pool.query(query);
  return rows;
}

async function actualizarEstadoPedido(comanda, estado) {
  const query = "UPDATE pedidos SET estado = $1 WHERE comanda = $2 RETURNING *";
  const values = [estado, comanda];
  const { rows } = await pool.query(query, values);
  return rows[0];
}

export default { enviarPedidos, obtenerPedidos, actualizarEstadoPedido };