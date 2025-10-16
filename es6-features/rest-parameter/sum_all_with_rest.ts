console.log("rest parameter agrupa los parametros -> ", numeros);
// usaremos return para iniciar un valor en cero
// y en cada iteracion del arreglo se sumará a la respuesta

numeros.reduce((total, num) => total + num, 0);

// console.log("sumarTodos -> " + sum_all_with_rest(1, 2, 3, 5, 8));

