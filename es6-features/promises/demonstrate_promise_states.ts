console.log('Visualizando el estado de un promise');
// ESTADOS: resolve, reject

const basicPromise = new Promise((resolve, reject) => {
  console.log('[ejecucion] estado: PENDING');

  // simulamos con 50% de probabilidad de resolve y reject
  setTimeout(() => {
    // const exito = Math.random() > 0.5; // 50% de probabilidad true / false
    const exito = false;
    console.log('exito -> ', exito);

    if (exito) {
      console.log('[ejecucion] llamado resolve -> FULFILLED');
      resolve('Operacion exitosa');
    } else {
      console.log('[ejecucion] llamado reject -> REJECTED');
      reject(new Error('Operacion fallo'));
    }
  }, 1000);
});

basicPromise
  .then((resultado) => {
    // este callback se ejecuta si resolve() fue llamado
    console.log('THEN ejecutado, fulfilled', resultado);
  })
  .catch((error) => {
    // este callback se ejecuta cuando reject() es llamado
    console.log('[CATCH] es llamado, rejected', error);
  })
  // hay casos que queremos ejecutar una logica SI O SI
  .finally(() => {
    // Siempre se va a ejecutar indistintamente sea fulfilled o rejected
    console.log('[FINALLY] promise finalizado');
  });
