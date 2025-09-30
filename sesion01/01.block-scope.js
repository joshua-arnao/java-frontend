// aqui va el codigo javascript

// como haria para escribir en la consola del nodejs(motor)

// va aqui un string
// console es un objeto
// log es un metodo
// se invoca al metodo
// el parametro es un string (cadena)
// se suele finalizar con un punto y coma
// console.log("Hola Mundo");

// presionar ctrl + shift + p, abre la paleta de comandos (windows)

// una funcion realiza una tarea una vez que se ejecute y retorna un valor
// parametros: un arreglo de numeros
// que es un arreglo? / hashmap / list
// ejemplo: [1,2,3,5,8]
function suma(numeros) {
  // esta funcion sumara los numeros
  // declaro una variable y lo inicializo con cero
  let result = 0; // result SOLO vive en la funcion suma

  // aqui proceso el contenido
  // puedo iterar la lista/arreglo para obtener el resultado
  for (let i = 0; i < numeros.length; i++) {
    // el resultado se va a sumar con el numero de la iteracion
    // en la primera iteracion será 1
    // en la segunda 2
    result = result + numeros[i] // cambia el valor de LET
  }

  // aqui lo retorno
  return result;
}
console.log('imprimiendo el valor de result -->')
try {
  console.log(result) // que pasara?? undefined? null? exception?
} catch (e) {
  console.log('error fatal')
}

// aqui puedo invocar la funcion
console.log("la suma([1, 2]) deberia ser 1 + 2 = 3");
console.log(suma([1, 2])) // resultado seria [1,2]
