const luces_circulo = document.querySelectorAll ('.luces_circulo');
/* console.log(luces_circulo); */

let contadorLuz = 0;

const mostrarLuz = () => {
    luces_circulo[contadorLuz].className = 'luces_circulo';
    contadorLuz++;

    if (contadorLuz > 2) contadorLuz = 0;

    const luzActual = luces_circulo[contadorLuz];
    luzActual.classList.add(luzActual.getAttribute('color'));
}

setInterval(mostrarLuz,3000);