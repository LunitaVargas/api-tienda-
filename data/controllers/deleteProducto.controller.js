
const productos = require('../productos');

function deleteProducto(req, res) {
    const id = Number(req.params.id);

    const indice = productos.findIndex(p => p.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensaje: 'Producto no encontrado'
        });
    }

    const eliminado = productos.splice(indice, 1);

    res.json({
        mensaje: 'Producto eliminado correctamente',
        data: eliminado[0]
    });
}

module.exports = deleteProducto;
