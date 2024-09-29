document.addEventListener('DOMContentLoaded', function() {
    const kidsImg = document.getElementById('kids-img');
    const adultImg = document.getElementById('adult-img');

    // Event listeners for image hover effect
    kidsImg.addEventListener('mouseover', function() {
        kidsImg.src = 'stewie griffin 2.jpg';
    });

    kidsImg.addEventListener('mouseout', function() {
        kidsImg.src = 'stewie.jpg';
    });

    adultImg.addEventListener('mouseover', function() {
        adultImg.src = 'peter griffin 2.jpg';
    });

    adultImg.addEventListener('mouseout', function() {
        adultImg.src = 'peter griffin.jpg';
    });

    // Event listeners for image click to navigate to new pages
    kidsImg.addEventListener('click', function() {
        window.location.href = 'kids.html';
    });

    adultImg.addEventListener('click', function() {
        window.location.href = 'adult.html';
    });
});
