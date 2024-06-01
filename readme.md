# Venta de Electrodomésticos

En esta página permite agregar nuevos productos a una lista y eliminar toda la lista de productos mediante un botón.

## Desarrollo 

**1. HTML**:
   - Se definió una estructura básica con un encabezado, una lista de productos y un formulario para agregar nuevos productos, ademas de usar identificadores para su posterior uso en JavaScript.
   - Se añadió un botón rojo dentro de la sección de productos para eliminar toda la lista.

**2. CSS**:
   - Se utilizó Flexbox para centrar el contenido vertical y horizontalmente.
   - Se definieron estilos específicos para los elementos de la lista de productos y los botones.

**3. JavaScript**:
   - Se utilizó `DOMContentLoaded` para asegurar que el DOM esté completamente cargado antes de agregar los `event listeners`.
   - Se utilizó `getElementById()` para obtener referencias al formulario (`product-form`) y al botón de eliminación (`clear-products`).
   - Se utilizó `querySelector()` para seleccionar la lista de productos (`#product-list ul`).
   - Se implementó un `event listener` para el formulario que captura el nombre del producto, crea un nuevo elemento de lista y lo agrega a la lista de productos.
   - Se utilizó `preventDefault()` dentro del manejador del evento `submit` del formulario para evitar que la página se recargue.
   - Se añadió un `event listener` al botón de eliminación que vacía la lista de productos al hacer clic.


