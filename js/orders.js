const ordersec = document.getElementById('orders');

async function loadOrders() {
    const responce = await fetch('holpenstudioback-production.up.railway.app/api/orders');
    const orders = await responce.json();

    const orderlist = orders.map(order => `
        <div class="flex flex-col relative p-2 border border-gray-400/60 rounded-lg">
            <div class="w-[100%]">
                <img src="${order.icon}" alt="${order.alt}" class="w-full h-full rounded-lg">
            </div>
            <h2 class="text-gray-100 text-xl font-semibold tracking-tight">${order.name}</h2>
            <h3 class="text-gray-300 text-md font-semibold tracking-tight">Цена: ${order.price}₴</h3>
            <h4 class="px-2 py-1 bg-blue-600 text-sm text-white rounded-md absolute top-[3%] right-[2%]">${order.status}</h4>
        </div>
    `).join('');

    ordersec.innerHTML = orderlist;
}


loadOrders();
