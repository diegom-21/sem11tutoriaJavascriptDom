document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('product-form');
    const productList = document.querySelector('#product-list ul');
    const clearButton = document.getElementById('clear-products');

    productForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Obtener el nombre del producto del formulario
        const productName = document.getElementById('product-name').value;

        // Crear un nuevo elemento de lista
        const newProduct = document.createElement('li');
        newProduct.classList.add('product-item');
        newProduct.textContent = productName;

        // Agregar el nuevo producto a la lista
        productList.appendChild(newProduct);

        // Limpiar el formulario
        productForm.reset();
    });

    clearButton.addEventListener('click', () => {
        productList.innerHTML = '';
    });
});
