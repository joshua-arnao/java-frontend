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
