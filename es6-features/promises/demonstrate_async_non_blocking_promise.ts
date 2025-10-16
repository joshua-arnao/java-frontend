console.log('ejemplo de ejecucio ASINCRONA NO BLOQUEANTE');
console.log('[1] inicio de tarea pesada asincrona');
function operacionPesadaAsincrona() {
  return new Promise((resolve) => {
    // setTimeout NO bloquea el hilo
    setTimeout(() => {
      resolve('Resultado de la operacion asíncrona'); // me retorna el contenido del metodo resolve
    }, 4000);
  });
}

// simulacion de promise (no bloquea)
operacionPesadaAsincrona().then((resultado) => {
  console.log('[2] resultado', resultado);
  console.log('[3] esta linea se ejecuta CUANDO La promise se resuelve');
});
console.log('[4] Esta linea SE EJECUTA INMEDIATAMENTE, NO SE BLOQUEA :)  '); // despues del promise
