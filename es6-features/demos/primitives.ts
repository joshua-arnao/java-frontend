function example01() {
  console.log("\n::VALORES PRIMITIVOS   \n");
  // se van a usar para ALMACENAR valores sencillos, sin requerimientos complejos
  // los valores primitivos SI tienen acceso a metodos comunes
  const numero = 42; // numero en algun momento puede pasar  de ser numero a boolean o string
  const texto: any = "JavaScript";

  // numero = 'Texto'; // no hay problema
  // numero = true; // no hay problema

  // // aqui ya hay una gran diferencia con los lenguajes fuertemente tipados: JAVA

  const booleano = false;
  const nulo = null;
  const indefinido = undefined;
  const simbolo = Symbol('id');

  // valores complejos

  const myStringPrimitive = 'Miguel'; // valor primitivo
  const myStringComplex = String('Miguel') // valor complejo, mas memoria pero tienes acceso a mas metodos.
}

export default { example01 }
