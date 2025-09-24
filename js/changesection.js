// Sections
const productsct = document.getElementById('products');
const profilesct = document.getElementById('profile');

// Buttons
const profilebtn = document.getElementById('profile-btn');
const productsbtn = document.getElementById('products-btn');
const supportbtn = document.getElementById('support-btn');

function changesection(section) {
    if (section === 'profile') {
        productsct.classList.add('hidden');
        productsct.classList.remove('block');
        profilesct.classList.add('block');
        profilesct.classList.remove('hidden');
    }
    else if (section === 'products') { 
        profilesct.classList.remove('block');
        profilesct.classList.add('hidden');
        productsct.classList.remove('hidden');
        productsct.classList.add('block');
    }
}

profilebtn.addEventListener('click', () => {
    changesection('profile');
});

productsbtn.addEventListener('click', () => {
    changesection('products');
});
