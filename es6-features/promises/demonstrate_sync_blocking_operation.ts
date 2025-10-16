// comparemos eventos sincronos y asincronos

console.log('ejecución sincrona (bloqueante)');
// ejecucion pesada

console.log('[1] inicio de tarea pesada');
function operacionPesadaSincrona() {
  const inicio = Date.now();
  // espera bloqueante por 2 segundos
  while (Date.now() - inicio < 4000) {
    // esto va a bloquear el hilo principal
  }
  return 'resultado de una operacion pesada';
}
const resultado = operacionPesadaSincrona(); // aqui ejecuto
console.log('[2] resultado', resultado);
console.log('[3] esta linea se ejecuta despues (BLOQUEADA)');
