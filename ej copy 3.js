let num = parseInt(window.prompt('Dime un numero '))

let estilo = { color: 'black', }

if (num < 100) {
    estilo.color = 'green'
} else if (num >= 100 && num < 200) {
    estilo.color = 'yellow'
} else {
    estilo.color = 'red'
}
document.getElementById('div1').innerHTML =`<h1>${num}</h1>`;
document.getElementById('div1').style.color = estilo.color;
