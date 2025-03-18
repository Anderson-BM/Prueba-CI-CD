test('Debe actualizar el texto al hacer clic', () => {
    document.body.innerHTML = `<p id="mensaje"></p>`;
    require('../src/script');
    
    const button = document.createElement('button');
    button.id = 'btn';
    document.body.appendChild(button);
    
    button.click();
    expect(document.getElementById('mensaje').innerText).toBe('¡Hola, CI/CD!');
});