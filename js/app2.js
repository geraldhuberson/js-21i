// tres variables

const x = 2;
const y = 3;
let z;

// operadores
let suma = x+y;
let dif = x-y;
let prod = x*y;
let div = x/y;

console.log(suma);
console.log(dif);
console.log(prod);
console.log(div);

// pares o impares.
//si ddividdo un numero par en 2, el resto da 0
//impares divididos en 2, el resto no es entero

x % 2 == 0
  ? console.log("el numero x es par")
  : console.log("el numero x no es par");
y % 2 == 1
  ? console.log("el numero es par")
  : console.log("el numero es impar");

  // asignar valor a z
// crear variable
// a la vartiable suma, sumarle z
// crear una variable que se llame prodcutio y guardar ahi el producto x e y
// a la vaaariable prod, multiplicarla por z
// crear una variable dif, que guarde la diferencia entre x e y
// mostrar en consola todos los resultados

z = 4;
suma = suma + z;
prod = prod * z;
dif = dif - z;

console.log(suma);
console.log(prod);
console.log(dif);

console.log("holas mundo");
console.log('hola mundo');

console.log('la persona dijo: " hola mundo"');
console.log('la \'persona\' dijo: \"hola mundo\"');

// concatenacion de string

console.log("hola "+", "+"soy "+"una "+"concaatenacion ");
let ganaddor = 'leo messi';
ganador=prompt('indique su nombre')
console.log('el ganador es: '+ ganador);

// concatenacion en medio del texto

console.log('el ganador es: "ganador +" , y se gano una cerveza');


// temp literald

console.log(`el ganador es: ${ganador}, se gano una cerveza`);

let direccion = 'san martin 250'
//metodos utiles

console.log(direccion.toUpperCase);
console.log(direccion.substr(0,3));
console.log(direccion.trim());
console.log(direccion.includes("san martin"));


// ejrecicio
//recibir el apellido del usuario
// usamos length para ver cuantos caraaateres hay

// let lastname = prompt('escruba su apellido')
// let charLength = lastname.length;
// let lastLetter = lastname.charAt(charLength -1);
// console.log(lastLetter);



// ej 2
// guardamos el nombre en un promp
// guardemos la primer letraa con charAt en la posicion 0
// pasamos la pri,era letra a mayusculas  con toUpperCase
// concatenar el resto de la cadena con substr con laaa letra obtenida 
let nombre = prompt('escriba su nombre')
let firstLetter = nombre.charAt(0)
firstLetter = firstLetter.toUpperCase();
let resto = nombre.trim().substr(1,nombre.length).toLowerCase();
console.log(firstLetter + resto);