console.log("\n--- Demostrando Type Aliases ---");
// Los Type Aliases crean un nuevo nombre para un tipo. Son útiles para tipos complejos o uniones.
type ID = string | number;

let usuario_id: ID = 123;
console.log(`-> El ID del usuario es (de tipo número): ${usuario_id}`);

usuario_id = 'abc-456';
console.log(`-> El ID del usuario es (de tipo string): ${usuario_id}`);

// También se pueden usar para objetos
type Punto = {
  x: number;
  y: number;
};

const coordenada: Punto = { x: 10, y: 20 };
console.log("-> Coordenadas del punto (usando Type Alias 'Punto'):", coordenada);
