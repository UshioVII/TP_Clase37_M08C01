alert("moviesList.js loaded");
console.log("moviesList.js loaded");

let body = document.querySelector('body');
let h1 = document.querySelector('h1');

let mode = prompt('¿Desea modo oscuro?');


if (mode === 'si') {
    document.querySelector('body').style.backgroundColor = '#7f7f7f'
    body.classList.add('fondoMoviesList');
    h1.style.color = 'white';
    h1.style.backgroundColor = 'teal';
    h1.style.padding = '20px';
} else {    
    document.querySelector('body').style.backgroundColor = '#f3f3f3'
} 

