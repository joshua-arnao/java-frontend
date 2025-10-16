const nombres = ['miguel', 'ana', 'rocio', 'alfredo']


let saludos = 'Hola: ';
for (let index = 0; index < nombres.length; index++) {
  if (index != nombres.length - 1) {
    saludos = saludos + " " + nombres[index] + ",";
  } else {
    saludos = saludos + " " + nombres[index];
  }
}
console.log(saludos)
