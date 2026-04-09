// Seleção de elementos
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

// Toggle do Menu Mobile
mobileMenu.addEventListener('click', () => {
    // No CSS real, você adicionaria uma classe 'active' para mostrar o menu
    alert('Menu responsivo acionado! Em um projeto real, aqui abriria a lista lateral.');
    // Exemplo de lógica para toggle:
    // navLinks.classList.toggle('nav-active');
});

// Mudança de cor do Header ao rolar
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.background = '#ffffff';
        header.style.padding = '10px 0';
    } else {
        header.style.padding = '20px 0';
    }
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
