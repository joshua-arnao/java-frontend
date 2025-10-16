console.log("--- Demostrando Tipos Básicos ---");
// En TypeScript, definimos el "contrato" o la forma de un objeto.
const user: { name: string; age: number } = {
  name: "Miguel",
  age: 30
};
console.log(`-> La edad del usuario es: ${user.age}`);
