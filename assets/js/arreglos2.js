let juegos = ['zelda', 'mario', 'metroid', 'chrono'];

console.log('Largo', juegos.length);

let primero = juegos[0];
let ultimmo = juegos[juegos.length - 1]; //saber el ultimo elemento del array
console.log(primero, ultimmo);


juegos.forEach((elemento, indice, arr) => {
    console.log(elemento, indice, arr);
    
    


})

let nuevaLongitud = juegos.push('F-zero')
console.log(nuevaLongitud, juegos);

nuevaLongitud = juegos.unshift('fire emblen')
console.log(nuevaLongitud, juegos);

let juegoBorrado = juegos.pop()
console.log(juegoBorrado, juegos);




let posicion = 1;
let juegosBorrados = juegos.splice(posicion, 2);
console.log(juegosBorrados, juegos);


let metroidIndex = juegos.indexOf('metroid') //para saber el indice de algun elemento
console.log(metroidIndex);
