const contenedor = document.getElementById('burbujas-container');

function crearBurbuja() {
    const burbuja = document.createElement('div');
    burbuja.classList.add('burbuja');
    
    // Posición aleatoria
    burbuja.style.left = `${Math.random() * 100}%`;
    const size = Math.random() * 50 + 20; // Tamaño entre 10px y 25px
    burbuja.style.width = `${size}px`;
    burbuja.style.height = `${size}px`;
    burbuja.style.animationName = 'moverArriba';
    burbuja.style.animationDuration = `${Math.random() * 3 + 2}s`; // Duración entre 2s y 5s
    contenedor.appendChild(burbuja);

    burbuja.addEventListener('animationend', () => {
        burbuja.remove();
    });

}

window.addEventListener('DOMContentLoaded', () => {
    setInterval(crearBurbuja, 500); // Crear una burbuja cada 500ms
});