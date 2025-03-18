document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.download-btn');
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            alert(`Descargando ${event.target.parentElement.querySelector('h2').innerText}`);
        });
    });
});