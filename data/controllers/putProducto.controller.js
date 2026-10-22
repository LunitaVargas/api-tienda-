
const productos = require('../productos');

function putProducto(req, res) {
    const id = Number(req.params.id);
    const { nombre, precio } = req.body;

    const producto = productos.find(p => p.id === id);

    if (!producto) {
        return res.status(404).json({
            mensaje: 'Producto no encontrado'
        });
    }

    if (!nombre || precio === undefined || Number(precio) <= 0) {
        return res.status(400).json({
            mensaje: 'Nombre y precio son obligatorios'
        });
    }

    producto.nombre = nombre;
    producto.precio = Number(precio);

    res.json({
        mensaje: 'Producto actualizado correctamente',
        data: producto
    });
}

module.exports = putProducto;
