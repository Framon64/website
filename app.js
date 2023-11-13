
var productsData = [
    { name: 'Товар 1', description: 'Описание товара 1', price: '$10.99' },
    { name: 'Товар 2', description: 'Описание товара 2', price: '$19.99' },
    // Добавьте другие товары по аналогии
];

var productsContainer = document.getElementById('productsContainer');
var searchInput = document.getElementById('searchInput');

function renderProducts(products) {
    // Очистим контейнер перед добавлением новых результатов
    while (productsContainer.firstChild) {
        productsContainer.removeChild(productsContainer.firstChild);
    }

    products.forEach(function (product) {
        var productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="no_photo.png" alt="${product.name}">
            <div class="product-title">${product.name}</div>
            <div class="product-description">${product.description}</div>
            <div class="product-price">Цена: ${product.price}</div>
        `;

        productsContainer.appendChild(productElement);
    });
}

function filterProducts(query) {
    query = query.toLowerCase();

    if (query === '') {
        // Если поле поиска пустое, не отображаем товары
        renderProducts([]);
        return;
    }

    var filteredProducts = productsData.filter(function (product) {
        return product.name.toLowerCase().startsWith(query);
    });

    renderProducts(filteredProducts);
}

searchInput.addEventListener('input', function () {
    var query = this.value;
    filterProducts(query);
});

// Инициализация с начальным списком товаров
renderProducts(productsData);