console.log("\n--- Demostrando Genéricos (Generics) ---");
// Los genéricos permiten crear componentes reutilizables que funcionan con varios tipos.
// La <T> es un marcador de posición para un tipo que se especificará más tarde.
function obtener_primer_elemento<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[0] : undefined;
}

const numeros = [10, 20, 30];
const primer_numero = obtener_primer_elemento(numeros);
console.log(`-> El primer elemento del arreglo [${numeros}] es: ${primer_numero}`);

const palabras = ["hola", "mundo", "typescript"];
const primera_palabra = obtener_primer_elemento(palabras);
console.log(`-> El primer elemento del arreglo [${palabras}] es: "${primera_palabra}"`);
