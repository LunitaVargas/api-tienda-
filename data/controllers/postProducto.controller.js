const productos = require('../productos');

function postProducto(req, res) {
    const { nombre, precio } = req.body;

    if (!nombre || precio === undefined || Number(precio) <= 0) {
        return res.status(400).json({
            mensaje: 'Debe ingresar un nombre y un precio valido'
        });
    }

    const nuevoProducto = {
        id: productos.length > 0
            ? Math.max(...productos.map(p => p.id)) + 1
            : 1,
        nombre: nombre,
        precio: Number(precio)
    };

    productos.push(nuevoProducto);

    res.status(201).json({
        mensaje: 'Producto creado correctamente',
        data: nuevoProducto
    });
}

module.exports = postProducto;
