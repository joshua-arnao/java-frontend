console.log("\n\nSPREAD CON STRINGS\n\n");
const palabra = "HOLA";
console.log("Palabra original", palabra);

// spread puede extraer el string en caracteres
const letras = [...palabra]; // aqui extrae los caracteres string del valor
console.log("Array de letras -> ", letras) // aqui me mostraria un arreglo con cada uno de los caracteres
console.log("Array de letras -> ", ...palabra) // AQUI SI EXTRAERIA LOS VALORES
// Output: ['H', 'O', 'L', 'A'];
