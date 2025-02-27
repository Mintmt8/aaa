const diasElem = document.getElementById('dias');
const horasElem = document.getElementById('horas');
const minutosElem = document.getElementById('minutos');
const segundosElem = document.getElementById('segundos');

// Corrigindo a data para 17 de março de 2025
const targetDate = new Date('March 17, 2025 00:00:00').getTime();

function timer() {
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    if (distance < 0) {
        diasElem.innerHTML = "00";
        horasElem.innerHTML = "00";
        minutosElem.innerHTML = "00";
        segundosElem.innerHTML = "00";
        return;
    }

    const dias = Math.floor(distance / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((distance / (1000 * 60)) % 60);
    const segundos = Math.floor((distance / 1000) % 60);

    diasElem.innerHTML = dias.toString().padStart(2, '0');
    horasElem.innerHTML = horas.toString().padStart(2, '0');
    minutosElem.innerHTML = minutos.toString().padStart(2, '0');
    segundosElem.innerHTML = segundos.toString().padStart(2, '0');
}

timer(); // Chamar a função imediatamente para evitar atraso de 1s
setInterval(timer, 1000);

document.addEventListener("DOMContentLoaded", function () {
    const pato = document.getElementById("pato");

    document.body.addEventListener("mousemove", function (event) {
        if (event.clientX < 100 && event.clientY > window.innerHeight - 100) {
            pato.style.opacity = "1";
        } else {
            pato.style.opacity = "0";
        }
    });

    pato.addEventListener("click", function () {
        window.location.href = "https://i.imgur.com/0a54Mwi.png";
    });
});
