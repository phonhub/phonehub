const searchInput = document.getElementById('search-input');
const productCards = document.querySelectorAll('product-card');

searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase();
    productCards.forEach(card => {
        const productName = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = productName.includes(query) ? '' : 'none';
    });
});


