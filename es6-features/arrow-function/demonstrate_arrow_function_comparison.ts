console.log("\n::FUNCION NORMAL \n");

const nombreAna = 'Ana';
// declaracion sencilla de una funcion
function saludarNombre() {
  return nombreAna;
}
console.log(nombreAna) //
saludarNombre();

// arrow function es una declaracion más moderna
// tiene una sintaxis diferente y mas corta

console.log("\n::REESCRITO EN ARROW FUNCTION  \n");

const NombreAnaArrow = 'Ana';
// esta declaracion de arrow function es mas corta y facil de leer
const saludarNombreArrow = () => NombreAnaArrow;
console.log(saludarNombreArrow())
