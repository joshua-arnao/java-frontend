// en este ejemplo tendré varias listas de nombres y mi misión será unificarlos

console.log("Unificacion de nombres")
const listaApi1 = ['alfredo', 'miguel', 'carlos'];
const listaApi2 = ['Rosario', 'Paul', 'Rafael'];
const listaApi3 = ['Milagros', 'Josue'];
//  el objetivo es unificar estas 3 listas en UNA SOLA, como lo hago???

// opcion 1: se puede usar concat
let listaUnificada1 = listaApi1.concat(listaApi2)
listaUnificada1 = listaApi1.concat(listaApi3); // aqui ya estaria la lista unificada...
console.log('lista unificada 1', listaUnificada1);

// opcion no viable
const listaNoViable = [listaApi1, listaApi2, listaApi3] // NOOOOOOO // esto genera una LISTA ANIDADA
console.log("lista no viable (anidada) => ", listaNoViable);
// output: [ [,,,], [,,,], [,,,]  ]

// opcion ideal: usando spread operator
const listaConSpreadOperator = [...listaApi1, ...listaApi2, ...listaApi3];
console.log('Lista unificada de nombres en una variable -> ', listaConSpreadOperator)
