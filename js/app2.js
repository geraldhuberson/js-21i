// // tres variables

// const x = 2;
// const y = 3;
// let z;

// // operadores
// let suma = x+y;
// let dif = x-y;
// let prod = x*y;
// let div = x/y;

// console.log(suma);
// console.log(dif);
// console.log(prod);
// console.log(div);

// // pares o impares.
// //si ddividdo un numero par en 2, el resto da 0
// //impares divididos en 2, el resto no es entero

// x % 2 == 0
//   ? console.log("el numero x es par")
//   : console.log("el numero x no es par");
// y % 2 == 1
//   ? console.log("el numero es par")
//   : console.log("el numero es impar");

//   // asignar valor a z
// // crear variable
// // a la vartiable suma, sumarle z
// // crear una variable que se llame prodcutio y guardar ahi el producto x e y
// // a la vaaariable prod, multiplicarla por z
// // crear una variable dif, que guarde la diferencia entre x e y
// // mostrar en consola todos los resultados

// z = 4;
// suma = suma + z;
// prod = prod * z;
// dif = dif - z;

// console.log(suma);
// console.log(prod);
// console.log(dif);

// console.log("holas mundo");
// console.log('hola mundo');

// console.log('la persona dijo: " hola mundo"');
// console.log('la \'persona\' dijo: \"hola mundo\"');

// // concatenacion de string

// console.log("hola "+", "+"soy "+"una "+"concaatenacion ");
// let ganaddor = 'leo messi';
// ganador=prompt('indique su nombre')
// console.log('el ganador es: '+ ganador);

// // concatenacion en medio del texto

// console.log('el ganador es: "ganador +" , y se gano una cerveza');


// // temp literald

// console.log(`el ganador es: ${ganador}, se gano una cerveza`);

// let direccion = 'san martin 250'
// //metodos utiles

// console.log(direccion.toUpperCase);
// console.log(direccion.substr(0,3));
// console.log(direccion.trim());
// console.log(direccion.includes("san martin"));


// // ejrecicio
// //recibir el apellido del usuario
// // usamos length para ver cuantos caraaateres hay

// // let lastname = prompt('escruba su apellido')
// // let charLength = lastname.length;
// // let lastLetter = lastname.charAt(charLength -1);
// // console.log(lastLetter);



// // ej 2
// // guardamos el nombre en un promp
// // guardemos la primer letraa con charAt en la posicion 0
// // pasamos la pri,era letra a mayusculas  con toUpperCase
// // concatenar el resto de la cadena con substr con laaa letra obtenida 
// let nombre = prompt('escriba su nombre')
// let firstLetter = nombre.charAt(0)
// firstLetter = firstLetter.toUpperCase();
// let resto = nombre.trim().substr(1,nombre.length).toLowerCase();
// console.log(firstLetter + resto);


// let numreddd = Math.floor(21.67);
// let numreddd2 = Math.round(21.67);

// console.log(numreddd);
// console.log(numreddd2 );

// let numero = prompt('escriba su numero')

// if(numero %2 == 0){
//        console.log('el numero es par')};
// else(){
//     console.log('el numero es impar');
// }



// const edad = Number(prompt('que edad tenes?'));

// switch (true) {
//     case edad>0 && edad<10:
//         alert('l-gante')
//         break;
//     case edad>=10 && edad<20:
//         alert('wachi')
//         break;
//     case edad>=20 && edad<30:
//         alert('lacuna coil')
//         break;
//     case edad>=30 && edad<40:
//         alert('viejo')
//         break;
//     default:
//         alert ('los asddasdasdasd')
//         break;
// }



// const x = Number( prompt ('ingrese un numero'))
// const y = Number( prompt ('ingrese otro numero'))

// if(x>y){
//     console.log(x+y);
// }else if(x<y){
//     console.log(y-x);
// }else{
//     console.log(x*y);
// }


// let respuesta = "porque si"
// let acierto = false

// while(acierto===false){
//     let propuesta = prompt ('por qué sale');
//     if(propuesta===respuesta){
//         acierto=true;
//     }else{
//         alert('Segui participando')
//     }
// }
// alert('Acertaste')

// let numero = Number (prompt ('ingrese un numero'))

// if(numero%2 == 0){
//     console.log('es par');
// }else{
//     console.log('no es par');
// // }
// let x = Number(prompt('primer numero'))
// let y = Number(prompt('ingrese otro numero'))

// if (x>y){
//     console.log('el numero es mayor');
// }else if (x<y){
//     console.log('el numero es menor');
// }else{
//     console.log(('el numero es igual'));
// }


// let dni = prompt('Ingrese tu DNI');

// if ((dni.length === 8 || dni.length === 7) && dni != 0 && !isNaN(Number(dni))) {
//     alert('Tu DNI fue procesado correctamente');
// } else {
//     alert('Ingresa un DNI valido');
// }


// const dia = new Date().getDay();
// switch(dia){
//     case 1:
//         console.log('Hoy es Lunes');
//     break;
//     case 2:
//         console.log('Hoy es Martes');
//     break;
//     case 3:
//         console.log('Hoy es M');
//     break;
//     case 4:
//         console.log('Hoy es J');
//     break;
//     case 5:
//         console.log('Hoy es V');
//     break;
// }

// let dni = prompt ('ingrese dni')

// if((dni.length===8 || dni.length===7) && dni!=0 ){
//     alert('su dni a sido cargado correctamente');
// }else{
    
//    alert('ingrese un dnia valido')
// }

// let numero;
// let acumulado = '';

// while(numero !== null){
//     numero = prompt (' ingrese un numero ');
//     if(isNaN(Number(numero))){
//         alert('ingrese un numero valido');
//     }else{
//         if(numero !== null){
//             acumulado = acumulado + numero;
//         }
//     }
// }


// console.log(acumulado);

const opciones = ['piedra', 'papel', 'tijeras'];

function bot(){
    let jugada = Math.round(Math.random()*2);
    return jugada;
}
function jugar (player){
    definicion (bot(), player)
}

function definicion(bot,player){
    console.log(`el bot ha elegido: ${opciones[bot]}`);
    switch(true){
        case bot===player:
            console.log('empate');
        break;
        case bot===0 && player===2:
            console.log('Gana el bot');
        break;
        case bot===0 && player===1:
            console.log('Gana el jugador');
        break;
        case bot===1 && player===0:
            console.log('Gana el bot');
        break;
        case bot===1 && player===2:
            console.log('Gana el jugador');
        break;
        case bot===2 && player===0:
            console.log('Gana el Jugador');
        break;
        case bot===2 && player===1:
            console.log('Gana el bot');
        break;
    }
}