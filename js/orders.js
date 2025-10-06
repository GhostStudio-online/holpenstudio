const ordersec = document.getElementById('orders');

async function loadOrders() {
    const responce = await fetch('https://holpenstudioback-production.up.railway.app/api/orders/get');
    const orders = await responce.json();

    const orderlist = orders.map(order => `
        <div class="flex flex-col justify-center relative gap-1 p-2 border border-gray-300/10 bg-zinc-700/30 backdrop-blur-xl rounded-lg tracking-tight">
            <div class="w-[100%]">
                <img src="${order.icon}" alt="${order.alt}" class="w-full h-full rounded-lg">
            </div>
            <h2 class="font-semibold text-gray-300 text-lg tracking-tight">${order.name}</h2>
            <h3 class="font-medium text-gray-300 text-base tracking-tight">Цена: <span class="text-blue-400">${order.price}₴</span></h3>
            <h4 class="px-2 py-1 bg-blue-500/95 text-xs text-white rounded-md absolute top-[3%] right-[2%]">${order.status}</h4>
        </div>
    `).join('');

    ordersec.innerHTML = orderlist;
}



loadOrders();
