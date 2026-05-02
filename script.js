// Verifica il funzionamento in console
console.log("Il portfolio è attivo e il JS è collegato correttamente!");

// Esempio dinamico: Cambia il colore del titolo al click
const titolo = document.querySelector('h1');

titolo.addEventListener('click', () => {
    titolo.style.color = '#ff4500'; // Diventa arancione al click
    alert('Hai cliccato il titolo! Il JavaScript funziona.');
});
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar-custom');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scroll verso il basso - Nascondi
        navbar.classList.add('navbar-hidden');
    } else {
        // Scroll verso l'alto - Mostra
        navbar.classList.remove('navbar-hidden');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);
