const productsection = document.getElementById('productscont');

async function loadProducts() {
    const responce = await fetch('https://5ef8bbba3091.ngrok-free.app/api/products');
    const products = await responce.json();

    const productslist = products.map(product => `
        <div class="flex flex-col justify-center gap-3 px-2 py-3" data-id="${product.id}">
            <div class="w-[100%]">
                <img src="${product.icon}" alt="${product.alt}" class="w-full h-full rounded-lg">
            </div>
            <div class="flex flex-col">
                <h3 class="font-bold text-gray-200 text-lg">${product.name}</h3>
                <p class="font-medium text-gray-400 text-sm">${product.description}</p>
            </div>
            <h5 class="font-medium text-gray-300 text-base">Цена: ${product.price}₴</h5>
            <button class="buy-btn w-full py-2 bg-blue-700 rounded-xl text-gray-100 font-semibold transition duration-300 ease-in-out hover:scale-105 active:scale-95">Купить</button>
        </div>
    `).join('');

    productsection.innerHTML = productslist;

    document.querySelectorAll('.buy-btn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const card = e.target.closest('[data-id]');
            const order = {
                id: card.dataset.id,
                name: card.querySelector('h3').textContent,
                price: Number(card.querySelector('h5').textContent.replace('Цена: ', '').replace('₴','')),
                icon: card.querySelector('img').src,
                alt: card.querySelector('img').alt
            };
            try {
                const res = await fetch('https://5ef8bbba3091.ngrok-free.app/api/sendOrder', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(order)
                });
                const data = await res.json();
                console.log('Заказ отправлен', data);
                loadOrders();
            } catch (err) {
                console.log('Ошибка при отправке заказа:', err);
            }
        });
    });
}

loadProducts();
