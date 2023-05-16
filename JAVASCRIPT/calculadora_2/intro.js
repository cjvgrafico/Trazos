//alert("Hola... qué tal?");
//console.log("Hola");

//variable espacio de memoria en el que guardamos un valor. si no pones var funciona igual, peor hay que declarar la variable siempre

var nombre = "María";
var apellido = "López";

console.log(nombre, apellido);
nombre = "Raquel";
console.log(nombre, apellido);

//lo más antiguo ni un numero ni dos palabras console.log significa que lo muestre e la consola. no ponmos var en la segunda para cxambiar el valor, si no se crearía otra variable.

//tipos de variables: var let const. las variables tienen un ámbito:
//VAR >(variable en el cuerpo -> global variable dentro de una funcion -> variable local.)
//LET (tiene 3 ambitos los dos de antes y bloque también. una cond¡cion es un bloque)
//CONST ( necesita un valo en el momento en el que se crea. es una constante, el valor no se puede cambiar)

let usuario;
usuario = "Inés";

const procedencia = "madrid";

usuario = "Pilar";
//procedencia = "Cuenca";
console.log(usuario, procedencia);

//tipos de datos:
//numeros - number o float
//cadenas de texto. - string
//en otros lenguajes hay que decirle el tipo de dato que es
//la variable. los datos van entrecomillados.

//array, arreglo, ,atriz,coleccion de datos
var dias = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo",
];

//bolean-> los boleanos son un tipo de datos. true o false  boleano: lo de true o false

let edad = 34;
console.log(edad);
edad = edad + 1;
console.log(edad);

//los números no se ponen entre comillas pq se puede operar con ellos.

//oper adores, bucles, condicionales
//objetos parecidos a los arrays
//funciones o métodos

//operadores matemáticos:
// +
// - resta
// * multiplicaión
// / div
// % modulos de la division
// ** exponente

//sumar cadenas es concatenar

console.log(nombre, apellido);
console.log(nombre + " " + apellido);
console.log(nombre + " " + apellido + "tiene" + edad + "años");
console.log(nombre, apellido);

//array

//así se crea un array

//let semana = new Array();
//semana = ["lunes", "martes", "miércoles", "jueves", "viernes"];

//let semana = ["lunes", "martes", "miércoles", "jueves", "viernes"];

let semana = [
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
  "domingo",
];

console.log(semana);
console.log(semana[0], semana[3]);

console.log(semana.length);

//condicionales if, else if, else

let primeravez = true;

if (primeravez) {
  //  alert("si es la primera vez");
  primeravez = false;
}

if (!primeravez) {
  // alert("ya no es la primera vez");
}

//bucles

//hay varios tipos de bucles
// ++ se suma uno a sí mismo
// i es una variable numérica que nos hemos inventado. la i es la posición del array

for (let i = 0; i < semana.length; i++) {
  console.log(semana[i]);
}

console.log(semana.length);

// BUCLE PARA HACER LA tabla del 56!!

for (let i = 1; i < 11; i++) {
  console.log(i * 56);
}

//

for (let i = 1; i <= 11; i++) {
  console.log("56 x " + i + "=" + 56 * i);
}

// prompt es un tipo de alert.

// let nacimiento = prompt("escriba su año de nacimiento");
// console.log(nacimiento);

// if (nacimiento <= 2005) {
// la respuesta a esto es un boleano
// console.log("puedes continuar");
// } else {
// console.log("a tu casa");}

///calculadora de masa corporal imc=peso/(altura*altura) peso en kilos altuar en

let sexo = prompt("Escriba h(hombre) o m(mujer)");

let peso = prompt("escriba su peso (en kilogramos)");
console.log(peso);

let altura = prompt("escriba su altura (en metros)");
console.log(altura);

let imc = peso / (altura * altura);
alert("este es su imc = " + imc.toFixed(2));

if (peso == "") {
  alert("debe completar el dato");
  peso = prompt("Escriba su peso en kilos");
} else if (altura == "") {
  alert("debe completar el dato");
  peso = prompt("Escriba su altura en metros");
}

if (sexo == h) {
  if (imc < 18.56) {
    alert("su peso es inferior al adecuado");
  } else if (imc >= 18.5 && imc <= 24.9) {
    alert("su peso es normal");
  } else if (imc >= 25 && imc <= 29.9) {
    alert("su peso es superior al normal");
  } else if (imc > 30) {
    alert("usted padece de obesidad");
  }
}
//tofixed hace que tengas solo dos decimales
