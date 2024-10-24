document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validasyonu
document.getElementById('contact-form').addEventListener('submit', function(e) {
    const email = document.querySelector('input[type="email"]').value;
    if (!email.includes('@')) {
        alert('Geçerli bir email adresi giriniz.');
        e.preventDefault();
    }
});
