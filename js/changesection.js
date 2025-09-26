const pageSections = document.querySelectorAll('main section');
const hdbtns = document.querySelectorAll('.hd-btns');

function changesection(id) {
    pageSections.forEach(section => section.classList.add('hidden'));
    document.getElementById(id)?.classList.remove('hidden');
}

hdbtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        changesection(target);
    });
});

changesection('products');
