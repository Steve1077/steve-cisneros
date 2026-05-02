// Verifica il funzionamento in console
console.log("Il portfolio è attivo e il JS è collegato correttamente!");

// Esempio dinamico: Cambia il colore del titolo al click
const titolo = document.querySelector('h1');

titolo.addEventListener('click', () => {
    titolo.style.color = '#ff4500'; // Diventa arancione al click
    alert('Hai cliccato il titolo! Il JavaScript funziona.');
});
