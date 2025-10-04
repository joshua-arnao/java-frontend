

export function spreadExample() {
  const numerosOriginales = [1, 2, 3]; // numeros originales
  console.log("numeros originales", numerosOriginales);

  // aqui podria usar spread para EXPANDIR estos elementos
  console.log('elementos expandidos con spread', ...numerosOriginales); // aqui expando
}

export function spreadExample02() {
  // en este ejemplo podemos usar Spread para obtener el MAXIMO de una lista de numeros
  // temperaturas registradas
  const temperaturas = [18, 20, 25, 28, 30];

  // PROBLEMA!!!!!
  // Math.max(temperaturas); // ESTO VA A FALLAR por que Math.max no acepta ARREGLOS
  console.log(Math.max(18, 20, 25, 28, 30)) // esto no falla
  //  esto no es viable, que tal el BE envia 200 valores de temperatura y quieres obtener el maximo...
  // usando Spread Operator, EXTRAEMOS/EXPANDIMOS los valores que se encuentran en un arreglo

  console.log('Math.max usando Spread Operator', Math.max(...temperaturas)); // los 3 puntos indican uso del spread operator
}

export function spreadExample03() {
  console.log("\n\nSPREAD CON STRINGS\n\n");
  const palabra = "HOLA";
  console.log("Palabra original", palabra);

  // spread puede extraer el string en caracteres
  const letras = [...palabra]; // aqui extrae los caracteres string del valor
  console.log("Array de letras -> ", letras) // aqui me mostraria un arreglo con cada uno de los caracteres
  console.log("Array de letras -> ", ...palabra) // AQUI SI EXTRAERIA LOS VALORES
  // Output: ['H', 'O', 'L', 'A'];
}

export function spreadExample04() {
  // en este ejemplo tendré varias listas de nombres y mi misión será unificarlos

  console.log("Unificacion de nombres")
  const listaApi1 = ['alfredo', 'miguel', 'carlos'];
  const listaApi2 = ['Rosario', 'Paul', 'Rafael'];
  const listaApi3 = ['Milagros', 'Josue'];
  //  el objetivo es unificar estas 3 listas en UNA SOLA, como lo hago???

  // opcion 1: se puede usar concat
  let listaUnificada1 = listaApi1.concat(listaApi2)
  listaUnificada1 = listaApi1.concat(listaApi3); // aqui ya estaria la lista unificada...

  // opcion no viable
  const listaNoViable = [listaApi1, listaApi2, listaApi3] // NOOOOOOO // esto genera una LISTA ANIDADA
  console.log("lista no viable (anidada) => ", listaNoViable);
  // output: [ [,,,], [,,,], [,,,]  ]

  // opcion ideal: usando spread operator
  const listaConSpreadOperator = [...listaApi1, ...listaApi2, ...listaApi3];
  console.log('Lista unificada de nombres en una variable -> ', listaConSpreadOperator)
}
//

export function spreadOperatorExamples() {
  spreadExample();
  spreadExample02();
  spreadExample03();
  spreadExample04();
}
