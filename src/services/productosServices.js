import pool from '../db.js';

async function obtenerProductos() {
  const query = 'SELECT * FROM menu';
  const { rows } = await pool.query(query);
  return rows;
}

export default { obtenerProductos };