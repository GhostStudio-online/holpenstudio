const productsection = document.getElementById('productscont');

const products = [
    { icon: './src/images/products/v1.jpeg', alt: 'Товар V1', name: 'Первью V1 (Пример)', description: 'Это описание товара. Тут хз, чо писать ну типо да.', price: 199 },
    { icon: './src/images/products/v2.jpeg', alt: 'Товар V2', name: 'Первью V2 (Пример)', description: 'Это описание товара. Тут хз, чо писать ну типо да.', price: 199 },
    { icon: './src/images/products/v2.jpeg', alt: 'Товар V3', name: 'Первью V3 (Пример)', description: 'Это описание товара. Тут хз, чо писать ну типо да.', price: 199 },
    { icon: './src/images/products/v2.jpeg', alt: 'Товар V4', name: 'Первью V4 (Пример)', description: 'Это описание товара. Тут хз, чо писать ну типо да.', price: 199 },
    { icon: './src/images/products/v2.jpeg', alt: 'Товар V5', name: 'Первью V5 (Пример)', description: 'Это описание товара. Тут хз, чо писать ну типо да.', price: 199 }
];

const productslist = products.map(product => `<div class="flex flex-col justify-center gap-3 px-2 py-3">
        <div class="w-[100%]">
            <img src="${product.icon}" alt="${product.alt}" class="w-full h-full rounded-lg">
        </div>
        <div class="flex flex-col">
            <h3 class="font-bold text-gray-200 text-lg">${product.name}</h3>
            <p class="font-medium text-gray-400 text-sm">${product.description}</p>
        </div>
        <h5 class="font-medium text-gray-300 text-base">Цена: ${product.price}₴</h5>
        <button class="w-full py-2 bg-blue-300 rounded-lg text-black font-semibold">Купить</button>
    </div>`).join('');

productsection.innerHTML = productslist;