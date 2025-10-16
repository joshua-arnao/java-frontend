console.log("\n--- Demostrando Funciones Tipadas ---");

// La función y sus parámetros tienen tipos, y se declara el tipo del valor de retorno.
function calcular_total(price: number, quantity: number): number {
  return price * quantity;
}

// El signo de interrogación (?) hace que un parámetro sea opcional.
function crear_usuario(nombre: string, edad?: number): string {
  return `-> Usuario creado: ${nombre}, Edad: ${edad || "no especificada"}`;
}

console.log(crear_usuario("Miguel"));
console.log(crear_usuario("Ana", 25));
console.log(`-> El total de la compra es: ${calcular_total(18, 78)}`);
