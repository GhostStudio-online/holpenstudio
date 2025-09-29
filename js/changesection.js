const pageSections = document.querySelectorAll('.section');
const hdbtns = document.querySelectorAll('.hd-btns');

function changesection(id) {
    pageSections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(id).classList.add('active');

    // сбрасываем цвет всем
    hdbtns.forEach(btn => {
        btn.classList.remove('text-blue-600');
        btn.classList.add('text-white');
    });

    // активной кнопке даём синий
    const activeBtn = document.querySelector(`[data-target="${id}"]`);
    activeBtn?.classList.remove('text-white');
    activeBtn?.classList.add('text-blue-600');
}

hdbtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        changesection(target);
    });
});

changesection('support');
