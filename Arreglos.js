// Array que contiene objetos de productos
const productos = [
    {
        id: 1,
        nombre: "Echo Dot (4th Gen)",
        precio: 49.99,
        categoria: "Electrónica",
        disponible: true,
        cantidad: 150
    },
    {
        id: 2,
        nombre: "Kindle Paperwhite",
        precio: 129.99,
        categoria: "Libros Electrónicos",
        disponible: false,
        cantidad: 0
    },
    {
        id: 3,
        nombre: "Apple AirPods Pro",
        precio: 199.99,
        categoria: "Accesorios",
        disponible: true,
        cantidad: 300
    }
];

// Mostrar todos los productos disponibles
productos.forEach(producto => {
    if (producto.disponible) {
        console.log(`Producto: ${producto.nombre}, Precio: $${producto.precio}`);
    }
});

// Array que representa el carrito de compras
let carrito = [];

// Función para agregar productos al carrito
function agregarAlCarrito(producto, cantidad) {
    if (producto.disponible && cantidad <= producto.cantidad) {
        carrito.push({
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: cantidad
        });
        producto.cantidad -= cantidad; // Actualiza la cantidad en inventario
        console.log(`${producto.nombre} añadido al carrito.`);
    } else {
        console.log(`Lo sentimos, ${producto.nombre} no está disponible en la cantidad solicitada.`);
    }
}

// Agregar productos al carrito
agregarAlCarrito(productos[0], 2); // Agrega 2 Echo Dot
agregarAlCarrito(productos[2], 1); // Agrega 1 AirPods Pro

// Mostrar carrito
console.log("Carrito actual:", carrito);


// Función para calcular el total
function calcularTotalCarrito(carrito) {
    let total = 0;
    carrito.forEach(item => {
        total += item.precio * item.cantidad;
    });
    return total.toFixed(2); // Limitar a dos decimales
}

// Mostrar el total del carrito
const totalCarrito = calcularTotalCarrito(carrito);
console.log(`El total a pagar es: $${totalCarrito}`);



// Objeto cliente con historial de compras
const cliente = {
    nombre: "Juan Pérez",
    direccion: "Av. Amazon 123, Quito",
    historialCompras: [
        {
            idProducto: 1,
            nombreProducto: "Echo Dot (4th Gen)",
            precio: 49.99,
            fechaCompra: "2024-10-15"
        },
        {
            idProducto: 2,
            nombreProducto: "Kindle Paperwhite",
            precio: 129.99,
            fechaCompra: "2024-10-10"
        }
    ]
};

// Mostrar historial de compras
console.log(`Historial de compras de ${cliente.nombre}:`);
cliente.historialCompras.forEach(compra => {
    console.log(`${compra.nombreProducto}, Precio: $${compra.precio}, Fecha: ${compra.fechaCompra}`);
});


