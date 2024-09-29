document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.description').style.display = 'block';
        });

        card.addEventListener('mouseleave', function() {
            this.querySelector('.description').style.display = 'none';
        });
    });
});
