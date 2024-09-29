// Get the link to About Us section
const aboutLink = document.querySelector('a[href="#about"]');

// Add click event listener to About Us link
aboutLink.addEventListener('click', () => {
    // Scroll to About Us section smoothly
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});
