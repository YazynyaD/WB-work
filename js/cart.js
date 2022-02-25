const cart = function () {
    const cartBtn = document.querySelector('.button-cart');
    const cartModal = document.querySelector('#modal-cart');
    const cartModalClose = cartModal.querySelector('.modal-close');

    cartBtn.addEventListener('click', function () {
        cartModal.style.display = 'flex';
    });
    
    cartModalClose.addEventListener('click', function () {
        cartModal.style.display = '';
    });
}

cart();