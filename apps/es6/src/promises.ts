import { resolve } from "path";

export function promisesExample01() {
  // comparemos eventos sincronos y asincronos

  console.log('ejecución sincrona (bloqueante)');
  // ejecucion pesada

  console.log('[1] inicio de tarea pesada')
  function operacionPesadaSincrona() {
    const inicio = Date.now();
    // espera bloqueante por 2 segundos
    while (Date.now() - inicio < 4000) {
      // esto va a bloquear el hilo principal
    }
    return 'resultado de una operacion pesada'
  }
  const resultado = operacionPesadaSincrona(); // aqui ejecuto
  console.log('[2] resultado', resultado);
  console.log('[3] esta linea se ejecuta despues (BLOQUEADA)');
}

export function promiseExample02() {
  console.log('ejemplo de ejecucio ASINCRONA NO BLOQUEANTE');
  console.log('[1] inicio de tarea pesada asincrona')
  function operacionPesadaAsincrona() {
    return new Promise((resolve) => {
      // setTimeout NO bloquea el hilo
      setTimeout(() => {
        resolve("Resultado de la operacion asíncrona"); // me retorna el contenido del metodo resolve
      }, 4000);
    })
  }

  // simulacion de promise (no bloquea)
  operacionPesadaAsincrona().then((resultado) => {
    console.log('[2] resultado', resultado);
    console.log('[3] esta linea se ejecuta CUANDO La promise se resuelve');
  });
  console.log('[4] Esta linea SE EJECUTA INMEDIATAMENTE, NO SE BLOQUEA :)  '); // despues del promise

}

// estructura para implementar un promise
new Promise((resolve, reject) => {
  // resolve es un METODO que usaremos para retornar un valor cuando la promesa este OK
  // reject otro metodo para retornar cuando falle
  const exito = true;

  if (exito) {
    resolve('todo bien');
  } else {
    reject(new Error("algo salio mal"))
  }
});
