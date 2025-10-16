// en este ejemplo podemos usar Spread para obtener el MAXIMO de una lista de numeros
// temperaturas registradas
const temperaturas = [18, 20, 25, 28, 30];

// PROBLEMA!!!!!
// Math.max(temperaturas); // ESTO VA A FALLAR por que Math.max no acepta ARREGLOS
console.log(Math.max(18, 20, 25, 28, 30)) // esto no falla
//  esto no es viable, que tal el BE envia 200 valores de temperatura y quieres obtener el maximo...
// usando Spread Operator, EXTRAEMOS/EXPANDIMOS los valores que se encuentran en un arreglo

console.log('Math.max usando Spread Operator', Math.max(...temperaturas)); // los 3 puntos indican uso del spread operator
