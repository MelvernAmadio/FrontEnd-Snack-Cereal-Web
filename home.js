document.addEventListener('DOMContentLoaded', function(){
    var homeLink = document.getElementById('homeLink');
    if(homeLink) {
        homeLink.addEventListener('click', function(event) {
            event.preventDefault(); // Mencegah perilaku default dari link
            window.location.href = 'index.html'; // Mengarahkan pengguna ke halaman utama
        });
    }
});
