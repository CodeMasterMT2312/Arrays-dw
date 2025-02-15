

# Ejemplo de Arrays y Objetos en una Tienda Online

Este código es un ejemplo práctico de cómo una tienda online, como Amazon, podría implementar arrays y objetos para gestionar productos, carritos de compra, y clientes. A través de este ejemplo, se demuestra la manipulación de arrays y objetos en JavaScript para llevar a cabo funciones esenciales de una plataforma de comercio electrónico.

## Funcionalidades

1. **Gestión de Productos:**
   - El array `productos` contiene una lista de objetos que representan los productos disponibles en la tienda. Cada objeto tiene información detallada como `id`, `nombre`, `precio`, `categoría`, `disponibilidad` y `cantidad`.
   - Se muestran los productos que están disponibles en el inventario utilizando la función `forEach` y una condición basada en la propiedad `disponible`.

2. **Agregar Productos al Carrito:**
   - El carrito de compras se representa como un array de objetos que contienen información de los productos seleccionados por el cliente, incluyendo el nombre, precio y cantidad.
   - La función `agregarAlCarrito` permite agregar productos al carrito si están disponibles y la cantidad solicitada no excede el inventario.
   - Después de agregar un producto al carrito, la cantidad en el inventario del producto se actualiza para reflejar el stock disponible.

3. **Cálculo del Total del Carrito:**
   - La función `calcularTotalCarrito` recorre el array `carrito` y calcula el precio total de los productos agregados. El total es formateado para mostrar dos decimales.

4. **Historial de Compras del Cliente:**
   - Se simula un objeto `cliente` que contiene un historial de compras anteriores, representado como un array de objetos. Cada objeto en el historial tiene detalles de la compra, como el nombre del producto, su precio, y la fecha de compra.
   - Este historial se imprime en la consola para mostrar las compras realizadas por el cliente.

## Estructura del Código

### Arrays de Productos

```javascript
const productos = [
    {
        id: 1,
        nombre: "Echo Dot (4th Gen)",
        precio: 49.99,
        categoria: "Electrónica",
        disponible: true,
        cantidad: 150
    },
    // Más productos...
];
```

- El array `productos` contiene objetos con propiedades como el `id`, `nombre`, `precio`, `categoria`, `disponible`, y `cantidad` para cada producto.

### Función para Mostrar Productos Disponibles

```javascript
productos.forEach(producto => {
    if (producto.disponible) {
        console.log(`Producto: ${producto.nombre}, Precio: $${producto.precio}`);
    }
});
```

- Esta función recorre el array `productos` y muestra en consola solo aquellos productos que están disponibles en inventario.

### Función para Agregar Productos al Carrito

```javascript
function agregarAlCarrito(producto, cantidad) {
    if (producto.disponible && cantidad <= producto.cantidad) {
        carrito.push({
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: cantidad
        });
        producto.cantidad -= cantidad;
        console.log(`${producto.nombre} añadido al carrito.`);
    } else {
        console.log(`Lo sentimos, ${producto.nombre} no está disponible en la cantidad solicitada.`);
    }
}
```

- Esta función permite agregar productos al carrito de compras, validando que el producto esté disponible y que la cantidad solicitada no exceda el stock disponible.

### Cálculo del Total del Carrito

```javascript
function calcularTotalCarrito(carrito) {
    let total = 0;
    carrito.forEach(item => {
        total += item.precio * item.cantidad;
    });
    return total.toFixed(2);
}
```

- Se recorre el array `carrito` para calcular el total a pagar, multiplicando el precio por la cantidad de cada producto en el carrito.

### Historial de Compras del Cliente

```javascript
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
        // Más compras...
    ]
};
```

- El objeto `cliente` contiene un array de objetos dentro de la propiedad `historialCompras` que representa las compras anteriores realizadas por el cliente.

## Cómo Ejecutar el Código

1. Copia y pega el código en un archivo JavaScript (`app.js`).
2. Abre el archivo en un entorno de desarrollo que soporte la ejecución de código JavaScript (por ejemplo, Node.js o la consola de un navegador web).
3. El código mostrará en consola los productos disponibles, las acciones de agregar productos al carrito, el total a pagar y el historial de compras del cliente.

## Aplicaciones en Plataformas E-commerce

Este ejemplo puede ser la base de funcionalidades en plataformas como Amazon, donde es esencial:
- Mantener un catálogo de productos en un inventario.
- Gestionar carritos de compra dinámicamente.
- Permitir a los usuarios visualizar su historial de compras.
- Calcular el total de compras y actualizar el stock disponible en tiempo real.

Este tipo de implementación es clave para garantizar una experiencia fluida y eficiente en la interacción con los usuarios en una tienda online.


 ## Autor: Mathias Teran