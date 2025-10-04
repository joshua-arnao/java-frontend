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

export function promiseExample03() {
  console.log("Visualizando el estado de un promise");
  // ESTADOS: resolve, reject

  const basicPromise = new Promise((resolve, reject) => {
    console.log("[ejecucion] estado: PENDING");

    // simulamos con 50% de probabilidad de resolve y reject
    setTimeout(() => {

      // const exito = Math.random() > 0.5; // 50% de probabilidad true / false
      const exito = false;
      console.log('exito -> ', exito)

      if (exito) {
        console.log("[ejecucion] llamado resolve -> FULFILLED");
        resolve("Operacion exitosa")
      } else {
        console.log("[ejecucion] llamado reject -> REJECTED");
        reject(new Error("Operacion fallo"));
      }
    }, 1000)
  });

  basicPromise
    .then((resultado) => {
      // este callback se ejecuta si resolve() fue llamado
      console.log("THEN ejecutado, fulfilled", resultado);
    })
    .catch((error) => {
      // este callback se ejecuta cuando reject() es llamado
      console.log("[CATCH] es llamado, rejected", error);
    })
    // hay casos que queremos ejecutar una logica SI O SI
    .finally(() => {
      // Siempre se va a ejecutar indistintamente sea fulfilled o rejected
      console.log("[FINALLY] promise finalizado")
    })

}

export function promiseExamples() {
  promisesExample01();
  promiseExample02();
  promiseExample03();
}
//
