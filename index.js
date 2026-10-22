
const express = require('express');
const app = express();

const productos = require('./data/productos');
const productosRoutes = require('./data/routes/productos.routes');

app.use(express.json());

app.get('/productos', (req, res) => {
    res.json(productos);
});

app.use('/', productosRoutes);

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
