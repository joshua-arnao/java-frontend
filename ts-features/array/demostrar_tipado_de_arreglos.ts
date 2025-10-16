console.log("\n--- Demostrando Tipado de Arreglos ---");

// Arreglo que solo contiene strings.
const nombres: string[] = ["Raul", "Alfredo", "Miguel"];

// Arreglo que puede contener diferentes tipos de datos (unión de tipos).
const valores_mixtos: (string | number | boolean)[] = ["Raul", true, "Miguel", 37];

console.log("-> Nombres (string[]):", nombres);
console.log("-> Valores Mixtos ((string | number | boolean)[]):", valores_mixtos);
