// aqui arriba en la cabecera voy importando las referencias
// uso palabra reservada require yla ruta relativa
// const main = require("./arrow-function")

// ejemplo basico de javascript en accion

// console.log("hello world")

// que sucede si quiero almacenar ese valor
console.log("::variables \n")
const mensaje = "Hola Javascript es6"; // la variable mensaje guarda ese valor
console.log(mensaje); // referencio a la variable para mostrar su valor

//  FUNCIONES

// son piezas de codigo que reutilizan una funcionalidad
// ejm:
console.log("\n::Funciones \n")

// nombre: parametro de la funcion
// saludar: nombre de la funcion
function saludar(nombre) {
  // ` -> backticks y permite usar ${} para interpolar valores
  return `hola ${nombre}`; // templates literal  es mas moderno
  // o sino puedo concadenar string para retonar el valor
  // return "hola " + nombre; // es6
}
// si yo guardo no aparece el nombre y hola.... por que la funcion no ha sido invocada
saludar('Miguel'); // aun no se muestra :(
console.log(saludar('Alfredo')) // aqui uso console.log e invoco a la funcion


console.log("\n::FUNCION NORMAL \n");

const nombreAna = 'Ana';
// declaracion sencilla de una funcion
function saludarNombre() {
  return nombreAna;
}
console.log(nombreAna)

// arrow function es una declaracion más moderna
// tiene una sintaxis diferente y mas corta

console.log("\n::REESCRITO EN ARROW FUNCTION  \n");

const NombreAnaArrow = 'Ana';
// esta declaracion de arrow function es mas corta y facil de leer
const saludarNombreArrow = () => NombreAnaArrow;
console.log(saludarNombreArrow())

console.log("\n::VALORES PRIMITIVOS   \n");
// se van a usar para ALMACENAR valores sencillos, sin requerimientos complejos
// los valores primitivos SI tienen acceso a metodos comunes
// let numero = 42; // numero en algun momento puede pasar  de ser numero a boolean o string
// const texto = "JavaScript";

// numero = 'Texto'; // no hay problema
// numero = true; // no hay problema

// // aqui ya hay una gran diferencia con los lenguajes fuertemente tipados: JAVA

// const booleano = false;
// const nulo = null;
// const indefinido = undefined;
// const simbolo = Symbol('id');

// // valores complejos

// const myStringPrimitive = 'Miguel'; // valor primitivo
// const myStringComplex = String('Miguel') // valor complejo, mas memoria pero tienes acceso a mas metodos.

// se da muy poco que usen: String, Boolean, Function, Date
console.log("\n::CONVERSION DE TIPOS   \n");
// - me sirve por ejemplo llega un valor numerico del backend en forma de STRING
// - { data: user: { id: "1235", name: "Rafael", age: "16"  }  }

// guardamos la rpta del backend
const data = { data: { user: { id: "1235", name: "Rafael", age: "15" } } };
// palabra reservada typeof me sirve para validar el tipo primitivo del dato
console.log(typeof data.data.user.id); // {string}
const id = Number(data.data.user.id); // aqui es la conversion de tipos
console.log(typeof id) // aqui sale {number}

// - String a numero (Number)
// - Numero a String (String)
// - Booleanos (Boolean)
// - parseo de enteros y  flotantes (parseInt)

console.log("\n::OPERADOR TERNARIO   \n");

if (false) {
  console.log('es verdad')
} else {
  console.log('es falso')
}

console.log("\n::OPERADOR TERNARIO en accion   \n");

true ? console.log("es verdad") : console.log("es falso");


console.log("\n::Templates Literals \n")

// sirven para contruir plantillas basado en strings, sin necesidad de concadenar strings y variables

// sin Templates Literals
const nameLiteral = "Miguel";
const mensajeSinTL = "Hola" + " " + "Soy un texto" + " " + " SIn template Literals y mi nombre es" + nameLiteral;
console.log(mensajeSinTL)

// para templates literals se usan backticks -> `
// Soporta MULTILINEA
console.log("\n\n::multilinea")
const mensajeConTL = `Hola Soy Un texto sin templates Literals y mi nombre es ${nameLiteral}

aqui el contenido es multilinea y mi nombre es ->  ${nameLiteral}
aqui tambien ${nameLiteral} se puede construir templates multilinea
`;
console.log(mensajeConTL);

console.log("\n\n::multilinea")
