const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const productosRoutes = require('./routes/productos');
const { default: pedidosController } = require('./controllers/pedidosController');

const app = express();

//Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

//Rutas
app.use('/productos', productosRoutes);
app.use('/pedidos', pedidosRoutes);

//Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
  });

module.exports = app;