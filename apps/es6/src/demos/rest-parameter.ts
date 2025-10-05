function example01() {
  console.log("\n\n::Rest Parameter")
  // nos sirve para AGRUPAR parametros de una funcion

  // requerimiento: se nos pude sumar todos los parametros de una funcion no importe la cantidad de parametros que se envie
  // se debe retormar la suma total de todos estos parametros, la cantidad de parametros es indistinta

  // function sumarTodos(num1, num2, num3, num4, num5) {
  function sumarTodos(...numeros) {
    console.log("rest parameter agrupa los parametros -> ", numeros);
    // usaremos return para iniciar un valor en cero
    // y en cada iteracion del arreglo se sumará a la respuesta
    return numeros.reduce((total, num) => total + num, 0);
  }
  console.log("sumarTodos -> " + sumarTodos(1, 2, 3, 5, 8));

  // como harian para hacer un saludo y con muchos nombres...
  function saludarTodos(...nombres) {
    let saludos = 'Hola: ';
    for (let index = 0; index < nombres.length; index++) {
      if (index != nombres.length - 1) {
        saludos = saludos + " " + nombres[index] + ",";
      } else {
        saludos = saludos + " " + nombres[index];
      }
    }
    return saludos;
  }
  console.log("saludando a todos", saludarTodos('miguel', 'ana', 'rocio', 'alfredo'))
}

export default { example01 }
