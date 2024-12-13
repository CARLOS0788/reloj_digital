function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Añadir un 0 delante de los números menores a 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Actualizar el contenido del reloj
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Actualizar el reloj cada segundo
setInterval(updateClock, 1000);

// Llamar una vez para que el reloj se muestre al cargar
updateClock();
